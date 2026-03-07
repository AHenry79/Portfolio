<script lang="ts">
	import { onMount } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);
	let ringX = $state(0);
	let ringY = $state(0);
	let hovering = $state(false);

	onMount(() => {
		let raf: number;

		const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };

		const animateRing = () => {
			ringX += (mouseX - ringX) * 0.12;
			ringY += (mouseY - ringY) * 0.12;
			raf = requestAnimationFrame(animateRing);
		};

		document.body.addEventListener('mouseover', (e) => {
			if ((e.target as HTMLElement).closest('a, button, [role="button"]')) hovering = true;
		});
		document.body.addEventListener('mouseout', (e) => {
			if ((e.target as HTMLElement).closest('a, button, [role="button"]')) hovering = false;
		});

		window.addEventListener('mousemove', onMouseMove);
		raf = requestAnimationFrame(animateRing);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			cancelAnimationFrame(raf);
		};
	});
</script>

<div class="cursor" class:hovering style="left:{mouseX}px;top:{mouseY}px" aria-hidden="true"></div>
<div class="cursor-ring" class:hovering style="left:{ringX}px;top:{ringY}px" aria-hidden="true"></div>

<style>
	.cursor,
	.cursor-ring {
		position: fixed;
		border-radius: 50%;
		pointer-events: none;
		z-index: 9999;
		/* centering handled here — never via Tailwind utilities */
		transform: translate(-50%, -50%);
		display: none;
	}

	@media (pointer: fine) {
		.cursor {
			display: block;
			width: 10px;
			height: 10px;
			background: #3d6456;
			mix-blend-mode: multiply;
			transition: width .25s ease, height .25s ease, background .25s ease;
		}
		.cursor.hovering {
			width: 36px;
			height: 36px;
			background: #c4a882;
			mix-blend-mode: normal;
		}
		.cursor-ring {
			display: block;
			width: 32px;
			height: 32px;
			border: 1.5px solid #3d6456;
			opacity: 0.5;
			/* only transition opacity — transform is managed by JS interpolation */
			transition: opacity .3s ease, width .25s ease, height .25s ease, border-color .25s ease;
		}
		.cursor-ring.hovering {
			width: 48px;
			height: 48px;
			opacity: 0.25;
			border-color: #c4a882;
		}
	}
</style>
