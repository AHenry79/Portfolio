<script lang="ts">
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';
	import taylord from '$lib/assets/taylordbeauty.png';
	import jacob from '$lib/assets/jcaywoodtherapy.png';

	const projects = [
		{
			name: 'Taylor\'d Beauty',
			url: 'https://taylord-beauty.netlify.app',
			role: 'Design & Development',
			tags: ['SvelteKit', 'TypeScript', 'Tailwind CSS', 'GSAP'],
			desc: 'A vibrant, editorial site for a licensed esthetician in Ann Arbor. Designed to reflect her unique brand and make booking feel as polished as her services.',
			gradient: 'from-[#1a2e27] to-[#2d4a3e]',
			accent: '#8aab97',
			screenshot: taylord,
		},
		{
			name: 'Jacob Caywood Therapy',
			url: 'https://jcaywoodtherapy.com',
			role: 'Design & Development',
			tags: ['React', 'TypeScript', 'Tailwind CSS'],
			desc: 'A calm, conversion-focused site for a limited licensed therapist. Designed to lower the anxiety of first contact and make booking feel effortless.',
			gradient: 'from-[#1a2e27] to-[#2d4a3e]',
			accent: '#8aab97',
			screenshot: jacob,
		},
		// Add more projects here as you build them
	];
</script>

<section id="work" class="bg-fog px-16 py-32 max-lg:px-8 max-lg:py-20">
	<div class="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-forest-mid mb-8 sr" use:reveal>
		<span class="w-8 h-px bg-gold shrink-0"></span>{m.work_eyebrow()}
	</div>

	<div class="grid grid-cols-2 gap-6 items-end mb-16 max-md:grid-cols-1 max-md:gap-4">
		<h2 class="sr font-display font-light text-forest-deep leading-[1.15]" style="font-size:clamp(2.5rem,5vw,4rem)" use:reveal>
			{m.work_heading()}<br><em class="italic text-forest-mid">{m.work_heading_em()}</em>
		</h2>
		<p class="sr d2 text-slate-green text-[0.97rem] leading-[1.8] font-light max-w-[400px] max-md:max-w-none" use:reveal>
			{m.work_intro()}
		</p>
	</div>

	<div class="flex flex-col gap-6">
		{#each projects as project, i (i)}
			<a
				href={project.url}
				target="_blank"
				rel="noopener noreferrer"
				class="sr d{i+1} group grid gap-0 rounded-[4px] overflow-hidden border border-mist transition-all duration-500 hover:shadow-[0_24px_64px_rgba(45,74,62,.12)] hover:-translate-y-[3px] md:grid-cols-[1fr_1fr]"
				use:reveal
			>
				<!-- Visual panel -->
				{#if project.screenshot}
				<div class="relative overflow-hidden leading-0">
					<img
						src={project.screenshot}
						alt="{project.name} screenshot"
						class="w-full block opacity-0 transition-opacity duration-700"
						onload={(e) => (e.currentTarget as HTMLImageElement).classList.replace('opacity-0', 'opacity-100')}
					/>
					<div class="absolute inset-0 flex items-center justify-center bg-forest-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
						<span class="font-mono text-[0.72rem] tracking-[0.12em] text-fog border border-fog/30 px-5 py-[0.6rem] rounded-full">
							{m.work_visit()}
						</span>
					</div>
				</div>
				{:else}
				<div class="relative aspect-16/10 max-md:aspect-video flex items-center justify-center overflow-hidden bg-linear-to-br {project.gradient}">
					<div class="absolute inset-0 opacity-20">
						<svg viewBox="0 0 600 400" fill="none" class="w-full h-full">
							<rect x="40" y="30" width="520" height="340" rx="8" stroke="{project.accent}" stroke-width=".5" opacity=".4"/>
							<rect x="40" y="30" width="520" height="40" fill="{project.accent}" opacity=".06"/>
							<circle cx="62" cy="50" r="6" fill="{project.accent}" opacity=".3"/>
							<circle cx="82" cy="50" r="6" fill="{project.accent}" opacity=".2"/>
							<circle cx="102" cy="50" r="6" fill="{project.accent}" opacity=".15"/>
							<rect x="60" y="100" width="180" height="16" rx="2" fill="{project.accent}" opacity=".2"/>
							<rect x="60" y="126" width="280" height="8" rx="2" fill="{project.accent}" opacity=".12"/>
							<rect x="60" y="144" width="240" height="8" rx="2" fill="{project.accent}" opacity=".1"/>
							<rect x="60" y="162" width="200" height="8" rx="2" fill="{project.accent}" opacity=".08"/>
							<rect x="60" y="200" width="100" height="32" rx="3" fill="{project.accent}" opacity=".2"/>
							<rect x="340" y="90" width="180" height="220" rx="4" fill="{project.accent}" opacity=".06" stroke="{project.accent}" stroke-width=".5"/>
						</svg>
					</div>
					<div class="relative z-2 flex flex-col items-center gap-3">
						<span class="font-display text-[2.5rem] text-white/10 font-light">0{i+1}</span>
						<span class="font-mono text-[0.6rem] tracking-[0.2em] uppercase opacity-40" style="color:{project.accent}">Live Site</span>
					</div>
					<div class="absolute inset-0 flex items-center justify-center bg-forest-deep/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[3]">
						<span class="font-mono text-[0.72rem] tracking-[0.12em] text-fog border border-fog/30 px-5 py-[0.6rem] rounded-full">
							{m.work_visit()}
						</span>
					</div>
				</div>
				{/if}

				<!-- Info panel -->
				<div class="bg-stone p-12 flex flex-col justify-between max-lg:p-8">
					<div>
						<p class="font-mono text-[0.62rem] tracking-[0.15em] text-gold uppercase mb-3">{project.role}</p>
						<h3 class="font-display text-[1.9rem] text-forest-deep font-light leading-[1.2] mb-4">{project.name}</h3>
						<p class="text-slate-green text-[0.92rem] leading-[1.8] font-light">{project.desc}</p>
					</div>
					<div class="mt-8 flex flex-wrap gap-2">
						{#each project.tags as tag (tag)}
							<span class="font-mono text-[0.62rem] tracking-[0.08em] px-3 py-[0.2rem] border border-mist text-forest-mid rounded-full">{tag}</span>
						{/each}
					</div>
				</div>
			</a>
		{/each}

		<!-- Placeholder card for next project -->
		<div class="sr group grid rounded-[4px] overflow-hidden border border-dashed border-mist/70 transition-all duration-300 hover:border-sage/50 md:grid-cols-[1fr_1fr]" use:reveal>
			<div class="bg-fog/50 aspect-[16/10] flex items-center justify-center max-md:aspect-[16/9]">
				<span class="font-display text-[4rem] text-forest-deep/10 font-light">03</span>
			</div>
			<div class="bg-fog/30 p-12 flex flex-col justify-center max-lg:p-8">
				<p class="font-mono text-[0.62rem] tracking-[0.15em] text-ink-muted/40 uppercase mb-3">Coming Soon</p>
				<h3 class="font-display text-[1.9rem] text-forest-deep/25 font-light leading-[1.2] mb-4">Your Project Here</h3>
				<a href="#contact" class="mt-4 inline-flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.08em] text-sage border-b border-sage/30 pb-px w-fit transition-colors hover:text-forest hover:border-forest">
					{m.work_cta()}
				</a>
			</div>
		</div>
	</div>
</section>
