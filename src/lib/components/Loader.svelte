<script lang="ts">
	import { onMount } from 'svelte';

	let visible = $state(true);
	let exiting = $state(false);

	onMount(() => {
		const t = setTimeout(() => {
			exiting = true;
			setTimeout(() => { visible = false; }, 700);
		}, 1800);
		return () => clearTimeout(t);
	});
</script>

{#if visible}
	<div class="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-forest-deep"
		style={exiting ? 'animation:loader-exit 0.7s cubic-bezier(0.16,1,0.3,1) forwards' : ''}>
		<div class="flex flex-col items-center gap-6" style="animation:var(--animate-loader-in)">
			<svg viewBox="0 0 40 40" fill="none" class="w-12 h-12">
				<line x1="20" y1="38" x2="20" y2="16" stroke="#8aab97" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M20 22 C20 22 11 17 9 10 C13 10 17 15 20 15 C23 15 27 10 31 10 C29 17 20 22 20 22Z" fill="rgba(138,171,151,.25)" stroke="#8aab97" stroke-width="1"/>
				<path d="M20 30 C20 30 13 25 11 18 C15 18 18 22 20 22 C22 22 25 18 29 18 C27 25 20 30 20 30Z" fill="rgba(138,171,151,.2)" stroke="#8aab97" stroke-width=".8"/>
				<circle cx="20" cy="7" r="3.5" fill="rgba(196,168,130,.3)" stroke="#c4a882" stroke-width="1"/>
			</svg>
			<div class="flex flex-col items-center gap-1">
				<span class="font-display text-[1.4rem] font-light tracking-[0.08em] text-fog">Ironpine Web Studio</span>
				<span class="font-mono text-[0.62rem] tracking-[0.2em] text-sage/60 uppercase">Michigan · Est. 2026</span>
			</div>
			<div class="w-48 h-px bg-forest-mid overflow-hidden rounded-full">
				<div class="h-full bg-gold origin-left rounded-full" style="animation:loader-bar 1.4s cubic-bezier(0.16,1,0.3,1) forwards"></div>
			</div>
		</div>
	</div>
{/if}
