<script lang="ts">
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const cards = [
		{ num: '01', icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.5 2 L14 4.5 L5.5 13 L2.5 13.5 L3 10.5 Z"/><line x1="9.5" y1="4" x2="12" y2="6.5"/></svg>`, nameKey: 'svc1_name' as const, descKey: 'svc1_desc' as const, tags: ['Figma', 'SvelteKit', 'Custom'] },
		{ num: '02', icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2L4.5 9H8L6.5 14l6-7H9L9.5 2z"/></svg>`, nameKey: 'svc2_name' as const, descKey: 'svc2_desc' as const, tags: ['Svelte', 'React', 'TypeScript'] },
		{ num: '03', icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3.5" width="12" height="10" rx="1"/><line x1="2" y1="7" x2="14" y2="7"/><line x1="5.5" y1="2" x2="5.5" y2="5"/><line x1="10.5" y1="2" x2="10.5" y2="5"/><line x1="5" y1="10" x2="7" y2="10"/></svg>`, nameKey: 'svc3_name' as const, descKey: 'svc3_desc' as const, tags: ['Acuity', 'Jane App', 'Vagaro'] },
		{ num: '04', icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5C12.5 3.5 10.5 1.5 8 1.5z"/><circle cx="8" cy="6" r="1.5"/></svg>`, nameKey: 'svc4_name' as const, descKey: 'svc4_desc' as const, tags: ['Schema', 'GMB', 'Keywords'] },
		{ num: '05', icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><line x1="8" y1="2" x2="8" y2="4"/><line x1="8" y1="12" x2="8" y2="14"/><line x1="2" y1="8" x2="4" y2="8"/><line x1="12" y1="8" x2="14" y2="8"/><line x1="4.1" y1="4.1" x2="5.5" y2="5.5"/><line x1="10.5" y1="10.5" x2="11.9" y2="11.9"/><line x1="11.9" y1="4.1" x2="10.5" y2="5.5"/><line x1="5.5" y1="10.5" x2="4.1" y2="11.9"/><circle cx="8" cy="8" r="2"/></svg>`, nameKey: 'svc5_name' as const, descKey: 'svc5_desc' as const, tags: ['GSAP', 'ScrollTrigger', 'CSS'] },
		{ num: '06', icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="2"/><path d="M12.2 6.5 L13.9 7 L13.9 9 L12.2 9.5 L11.9 10.3 L11.4 10.9 L11.9 12.6 L10.1 13.6 L8.8 12.4 L8 12.5 L7.2 12.4 L5.9 13.6 L4.1 12.6 L4.6 10.9 L4.1 10.3 L3.8 9.5 L2.1 9 L2.1 7 L3.8 6.5 L4.1 5.8 L4.6 5.1 L4.1 3.4 L5.9 2.4 L7.2 3.6 L8 3.5 L8.8 3.6 L10.1 2.4 L11.9 3.4 L11.4 5.1 L11.9 5.8 Z"/></svg>`, nameKey: 'svc6_name' as const, descKey: 'svc6_desc' as const, tags: ['Monthly', 'Updates', 'Support'] },
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
				<div class="w-11 h-11 bg-sage/10 rounded-full flex items-center justify-center mb-6 text-sage">
					<span class="w-[1.1rem] h-[1.1rem] flex">{@html card.icon}</span>
				</div>
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

