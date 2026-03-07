<script lang="ts">
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const blocks = [
		{ numKey: 'about1_num' as const, hKey: 'about1_h' as const, bodyKey: 'about1_body' as const },
		{ numKey: 'about2_num' as const, hKey: 'about2_h' as const, bodyKey: 'about2_body' as const },
		{ numKey: 'about3_num' as const, hKey: 'about3_h' as const, bodyKey: 'about3_body' as const },
	];
</script>

<section id="about" class="bg-stone px-16 pt-32 max-lg:px-8 max-lg:py-20">
	<div class="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-forest-mid mb-8 sr" use:reveal>
		<span class="w-8 h-px bg-gold shrink-0"></span>{m.about_eyebrow()}
	</div>
	<div class="grid grid-cols-2 gap-24 items-start max-lg:grid-cols-1">
		<div class="sr-left self-stretch" use:reveal>
			<div class="h-full min-h-[625px] rounded-[2px] overflow-hidden bg-gradient-to-b from-forest-mid to-forest-deep flex items-center justify-center relative shadow-[20px_20px_50px_rgba(45,74,62,.18)]">
				<span class="font-display text-[9rem] text-white/10 font-light">A</span>
				<div class="absolute bottom-5 left-5 bg-fog px-[1.1rem] py-[0.65rem] rounded-[1px] shadow-[0_4px_16px_rgba(0,0,0,.12)]">
					<span class="block text-[0.75rem] text-slate-green">{m.about_badge()}</span>
					<span class="block text-[0.75rem] text-forest-mid font-semibold">● {m.about_badge_loc()}</span>
				</div>
			</div>
		</div>
		<div class="flex flex-col">
			{#each blocks as block, i(i)}
				<div class="sr d{i+1} py-7 border-b border-mist last:border-b-0" use:reveal>
					<p class="font-mono text-[0.65rem] tracking-[0.15em] text-gold uppercase mb-2">{m[block.numKey]()}</p>
					<h3 class="font-display text-[1.7rem] text-forest-deep font-normal mb-3 leading-[1.3]">{m[block.hKey]()}</h3>
					<p class="text-slate-green text-[0.92rem] leading-[1.8] font-light">{m[block.bodyKey]()}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
