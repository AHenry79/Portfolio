<script lang="ts">
	import { wordReveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const wordKeys = [
		'reveal_w1','reveal_w2','reveal_w3','reveal_w4','reveal_w5',
		'reveal_w6','reveal_w7','reveal_w8','reveal_w9','reveal_w10',
		'reveal_w11','reveal_w12','reveal_w13','reveal_w14','reveal_w15',
		'reveal_w16','reveal_w17','reveal_w18','reveal_w19','reveal_w20',
	] as const;
</script>

<div id="word-reveal" class="relative bg-charcoal px-16 py-40 overflow-hidden max-lg:px-8 max-lg:py-16" use:wordReveal>
	<div class="max-w-[860px] mx-auto pl-8">
		<p class="font-mono text-[0.65rem] tracking-[0.2em] text-gold uppercase mb-12 opacity-70">{m.reveal_label()}</p>
		<p class="word-reveal-text font-display font-light leading-[1.45] tracking-[0.01em]" style="font-size:clamp(2rem,4.5vw,3.8rem)">
			{#each wordKeys as key}
				{#if m[key]()}
					<span class="w">{m[key]()}</span>{' '}
				{/if}
			{/each}
		</p>
	</div>
</div>
