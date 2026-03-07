<script lang="ts">
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';
</script>

<section id="contact" class="relative bg-forest-deep px-16 py-32 text-center overflow-hidden max-lg:px-8 max-lg:py-20">
	<div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(ellipse at center,rgba(90,140,120,.1) 0%,transparent 60%)"></div>
	<div class="flex items-center justify-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-gold-light mb-4 sr" use:reveal>
		<span class="w-8 h-px bg-gold-light shrink-0"></span>{m.cta_eyebrow()}
	</div>
	<h2 class="sr d1 relative font-display font-light leading-[1.2] mt-3 mb-10 text-fog" style="font-size:clamp(3rem,6vw,5rem)" use:reveal>
		{m.cta_heading()}<br><em class="italic text-sage">{m.cta_heading_em()}</em>
	</h2>
	<div class="sr d2 flex gap-4 justify-center flex-wrap relative" use:reveal>
		<a href="mailto:austin@ironpineweb.com"
			class="inline-flex items-center bg-gradient-to-br from-forest-light to-sage text-white px-9 py-[0.9rem] text-[0.85rem] tracking-[0.07em] font-medium rounded-[3px] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(90,140,120,.35)]">
			{m.cta_btn1()}
		</a>
		<a href="#testimonials"
			class="inline-flex items-center border border-sage/35 text-mist px-9 py-[0.9rem] text-[0.85rem] tracking-[0.06em] font-medium rounded-[3px] transition-all hover:bg-white/6 hover:-translate-y-0.5">
			{m.cta_btn2()}
		</a>
	</div>
</section>
