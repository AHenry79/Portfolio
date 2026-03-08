<script lang="ts">
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const cards = [
		{ num: '01', icon: '⬡', nameKey: 'svc1_name' as const, descKey: 'svc1_desc' as const, tags: ['Figma', 'SvelteKit', 'Custom'] },
		{ num: '02', icon: '⚡\uFE0E', nameKey: 'svc2_name' as const, descKey: 'svc2_desc' as const, tags: ['Svelte', 'React', 'TypeScript'] },
		{ num: '03', icon: '◈', nameKey: 'svc3_name' as const, descKey: 'svc3_desc' as const, tags: ['Acuity', 'Jane App', 'Vagaro'] },
		{ num: '04', icon: '◎', nameKey: 'svc4_name' as const, descKey: 'svc4_desc' as const, tags: ['Schema', 'GMB', 'Keywords'] },
		{ num: '05', icon: '✦', nameKey: 'svc5_name' as const, descKey: 'svc5_desc' as const, tags: ['GSAP', 'ScrollTrigger', 'CSS'] },
		{ num: '06', icon: '◇', nameKey: 'svc6_name' as const, descKey: 'svc6_desc' as const, tags: ['Monthly', 'Updates', 'Support'] },
	];
	const rv = ['sr-left','sr','sr-right','sr-left','sr','sr-right'] as const;
	const dl = ['d1','d2','d3','d1','d2','d3'] as const;
</script>

<section id="services" class="bg-forest-deep px-16 py-32 overflow-hidden max-lg:px-8 max-lg:py-20">
	<div class="grid grid-cols-2 gap-16 items-end mb-20 max-md:grid-cols-1 max-md:gap-6">
		<div>
			<div class="sr flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-gold-light mb-4" use:reveal>
				<span class="w-8 h-px bg-gold-light shrink-0"></span>{m.services_eyebrow()}
			</div>
			<h2 class="sr d1 font-display font-light leading-[1.2] text-fog" style="font-size:clamp(2.5rem,5vw,4rem)" use:reveal>
				{m.services_heading()}<br><em class="italic text-sage">{m.services_heading_em()}</em>
			</h2>
		</div>
		<p class="sr d2 text-mist text-[0.97rem] leading-[1.8] font-light max-w-[420px]" use:reveal>{m.services_intro()}</p>
	</div>

	<div class="grid grid-cols-3 gap-px bg-white/5 max-md:grid-cols-1">
		{#each cards as card, i(i)}
			<div class="{rv[i]} {dl[i]} group relative bg-forest-deep p-11 border border-white/5 overflow-hidden transition-all duration-400 hover:bg-sage/8 hover:-translate-y-[3px]" use:reveal>
				<span class="absolute top-5 right-7 font-display text-[3.5rem] text-sage/10 font-light">{card.num}</span>
				<div class="w-11 h-11 bg-sage/10 rounded-full flex items-center justify-center text-[1.2rem] mb-6 text-white leading-none pb-px">{card.icon}</div>
				<h3 class="font-display text-[1.35rem] text-fog font-normal mb-3 leading-[1.3]">{m[card.nameKey]()}</h3>
				<p class="text-mist/55 text-[0.87rem] leading-[1.7]">{m[card.descKey]()}</p>
				<div class="flex flex-wrap gap-[0.4rem] mt-5">
					{#each card.tags as tag(tag)}
						<span class="font-mono text-[0.62rem] tracking-[0.08em] px-[0.65rem] py-[0.2rem] border border-sage/20 text-sage rounded-full">{tag}</span>
					{/each}
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-14 text-center sr" use:reveal>
		<a href="#contact" class="inline-flex items-center gap-2 bg-forest text-fog px-8 py-[0.85rem] text-[0.82rem] tracking-[0.08em] font-medium rounded-[3px] transition-all hover:bg-forest-mid hover:-translate-y-0.5">
			{m.services_cta()}
		</a>
	</div>
</section>
