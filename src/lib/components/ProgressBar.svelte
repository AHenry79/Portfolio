<script lang="ts">
	import { onMount } from 'svelte';
	let progress = $state(0);
	onMount(() => {
		const onScroll = () => {
			const max = document.documentElement.scrollHeight - window.innerHeight;
			progress = max > 0 ? (window.scrollY / max) * 100 : 0;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<div class="fixed top-0 left-0 right-0 h-[2px] z-[500] bg-sage/10" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
	<div class="h-full bg-gradient-to-r from-sage to-gold transition-[width] duration-100" style="width:{progress}%"></div>
</div>
