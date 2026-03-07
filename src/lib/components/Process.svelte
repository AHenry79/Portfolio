<script lang="ts">
	import { reveal, stickyCounter } from '$lib/actions/gsap';
	import { language } from '$lib/stores/language';
	import * as m from '$lib/paraglide/messages';

	let counterEl = $state<HTMLElement | null>(null);

	const steps = [
		{
			num: '01',
			icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"><path d="M2 11 Q2 3 8 3 Q14 3 14 11" opacity=".35"/><path d="M4 11 Q4 5.5 8 5.5 Q12 5.5 12 11" opacity=".7"/><circle cx="8" cy="11" r="1.4" fill="currentColor" stroke="none"/></svg>`,
			tagKey: 'step1_tag' as const, titleKey: 'step1_title' as const, emKey: 'step1_em' as const, bodyKey: 'step1_body' as const,
		},
		{
			num: '02',
			icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="12" height="12" rx="1"/><line x1="2" y1="6" x2="14" y2="6"/><line x1="5.5" y1="2" x2="5.5" y2="6"/></svg>`,
			tagKey: 'step2_tag' as const, titleKey: 'step2_title' as const, emKey: 'step2_em' as const, bodyKey: 'step2_body' as const,
		},
		{
			num: '03',
			icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4 L3 8 L6 12"/><path d="M10 4 L13 8 L10 12"/></svg>`,
			tagKey: 'step3_tag' as const, titleKey: 'step3_title' as const, emKey: 'step3_em' as const, bodyKey: 'step3_body' as const,
		},
		{
			num: '04',
			icon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="5.5"/><polyline points="5.5,8.5 7.5,10.5 11,6.5"/></svg>`,
			tagKey: 'step4_tag' as const, titleKey: 'step4_title' as const, emKey: 'step4_em' as const, bodyKey: 'step4_body' as const,
		},
	];
</script>

<section id="process" class="bg-fog px-16 max-lg:px-8">
	<div class="grid gap-24 min-h-screen relative lg:grid-cols-[1fr_2fr] max-lg:gap-12 max-lg:min-h-0 max-lg:py-20"
		use:stickyCounter={{ el: counterEl, total: steps.length }}>

		<div class="sr-left sticky top-0 h-screen flex flex-col justify-center py-16 max-lg:relative max-lg:h-auto max-lg:py-0" use:reveal>
			<div class="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-forest-mid mb-4">
				<span class="w-8 h-px bg-gold shrink-0"></span>{m.process_eyebrow()}
			</div>
			<h2 class="font-display font-light text-forest-deep leading-[1.2] mb-4" style="font-size:clamp(2.5rem,4.5vw,4rem)">
				{m.process_heading()}<br><em class="italic text-forest-mid">{m.process_heading_em()}</em>
			</h2>
			<p class="text-slate-green text-[0.97rem] font-light leading-[1.7] max-w-[320px] mb-8">{m.process_sub()}</p>
			<p class="font-mono text-[0.65rem] tracking-[0.15em] text-ink-muted" bind:this={counterEl}>
				{$language === 'ja' ? 'ステップ 1 / 4' : 'Step 1 of 4'}
			</p>
		</div>

		<div class="py-32 flex flex-col gap-24 max-lg:py-0">
			{#each steps as step, i(i)}
				<div class="process-step sr d{i+1} grid gap-8 items-start p-12 max-sm:p-6 bg-stone border border-mist rounded-[2px]"
					style="grid-template-columns:auto 1fr" use:reveal>
					<span class="font-display text-forest-deep/8 font-light leading-[0.9] shrink-0" style="font-size:5rem">{step.num}</span>
					<div>
						<div class="flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.15em] text-gold uppercase mb-3"><span class="w-4 h-4 shrink-0">{@html step.icon}</span>{m[step.tagKey]()}</div>
						<h3 class="font-display font-light leading-[1.2] text-forest-deep mb-3" style="font-size:1.8rem">
							{m[step.titleKey]()}<br><em class="italic text-forest-mid">{m[step.emKey]()}</em>
						</h3>
						<p class="text-slate-green text-[0.92rem] leading-[1.8] font-light">{m[step.bodyKey]()}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.process-step {
		transition: transform 350ms cubic-bezier(0.34, 1.2, 0.64, 1),
		            box-shadow 350ms cubic-bezier(0.16, 1, 0.3, 1);
	}
	.process-step:hover {
		transform: translateX(6px);
		box-shadow: 0 20px 50px rgba(45, 74, 62, 0.1);
	}
</style>
