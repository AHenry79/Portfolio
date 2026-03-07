<script lang="ts">
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const cards = [
		{ qKey: 't1_quote' as const, nKey: 't1_name' as const, rKey: 't1_role' as const, initial: 'M', rv: 'sr-left' },
		{ qKey: 't2_quote' as const, nKey: 't2_name' as const, rKey: 't2_role' as const, initial: 'J', rv: 'sr'      },
		{ qKey: 't3_quote' as const, nKey: 't3_name' as const, rKey: 't3_role' as const, initial: 'S', rv: 'sr-right' },
	];
</script>

<section id="testimonials" class="relative bg-gradient-to-br from-forest-deep to-[#162821] px-16 py-32 overflow-hidden max-lg:px-8 max-lg:py-20">
	<div class="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-gold-light mb-4 sr" use:reveal>
		<span class="w-8 h-px bg-gold-light shrink-0"></span>{m.t_eyebrow()}
	</div>
	<h2 class="sr d1 font-display font-light mb-14 leading-[1.25] text-fog" style="font-size:clamp(2rem,4vw,3.2rem)" use:reveal>
		{m.t_heading()}<br><em class="italic text-sage">{m.t_heading_em()}</em>
	</h2>
	<div class="grid grid-cols-3 gap-8 max-lg:grid-cols-1">
		{#each cards as card, i}
			<div class="{card.rv} d{i+1} bg-white/4 border border-white/7 p-10 rounded-[2px]" use:reveal>
				<p class="font-display text-[1.1rem] text-mist italic leading-[1.75] mb-7 font-light">"{m[card.qKey]()}"</p>
				<div class="flex items-center gap-4">
					<div class="w-11 h-11 rounded-full bg-gradient-to-br from-forest-mid to-sage flex items-center justify-center font-display text-[1.2rem] text-fog font-semibold shrink-0">{card.initial}</div>
					<div>
						<span class="block text-fog text-[0.9rem] font-medium mb-[0.15rem]">{m[card.nKey]()}</span>
						<span class="font-mono text-[0.63rem] tracking-[0.05em] text-ink-muted">{m[card.rKey]()}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
