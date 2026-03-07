<script lang="ts">
	import { parallaxOrb } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const pills = [
		{ en: '✦ Custom Design',       ja: '✦ カスタムデザイン',  delay: '0s',   dur: '7s',   pos: 'top-[14%] left-[8%]'  },
		{ en: '✦ Local SEO',           ja: '✦ 地域SEO',           delay: '1.2s', dur: '8s',   pos: 'top-[26%] right-[8%]' },
		{ en: '✦ Booking Integration', ja: '✦ 予約連携',           delay: '2.4s', dur: '6.5s', pos: 'top-[44%] left-[12%]' },
		{ en: '✦ Svelte + TypeScript', ja: '✦ 高速フロントエンド', delay: '0.8s', dur: '7.5s', pos: 'top-[60%] right-[6%]'  },
		{ en: '✦ Michigan-Based',      ja: '✦ ミシガン拠点',       delay: '1.8s', dur: '8.5s', pos: 'top-[74%] left-[8%]'  },
	];
</script>

<section id="hero" class="hero-section min-h-screen grid items-start relative overflow-hidden pt-24 pb-12 px-16 bg-gradient-to-br from-stone via-fog to-[#dce8e2] max-xl:px-8 xl:grid-cols-[1fr_1fr]"
	style="gap:clamp(2rem,4vw,4rem)">

	<div class="absolute rounded-full pointer-events-none blur-[80px] will-change-transform w-[520px] h-[520px] -right-16 -top-20"
		style="background:radial-gradient(circle,rgba(90,140,120,.18) 0%,transparent 70%)"
		use:parallaxOrb={{ speed: 0.7 }}></div>
	<div class="absolute rounded-full pointer-events-none blur-[80px] will-change-transform w-[340px] h-[340px] left-[5%] bottom-[10%]"
		style="background:radial-gradient(circle,rgba(196,168,130,.1) 0%,transparent 70%)"
		use:parallaxOrb={{ speed: -0.5 }}></div>
	<div class="absolute inset-0 opacity-[0.03] pointer-events-none"
		style="background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');background-size:180px"></div>

	<div class="relative z-[2] max-xl:text-center">
		<p class="hero-anim-left font-mono text-[0.72rem] tracking-[0.18em] text-forest-mid uppercase flex items-center gap-4 mb-6 max-xl:justify-center" style="--d:.2s">
			<span class="w-9 h-px bg-gold shrink-0"></span>
			{m.hero_eyebrow()}
		</p>

		<h1 class="font-display font-light leading-[1.1] text-forest-deep mb-6" style="font-size:clamp(2.8rem,5.5vw,5.2rem)">
			{#each m.hero_title_line1().split(' ') as word, i(i)}
				<span class="word-clip"><span class="word-rise" style="--d:{0.4 + i * 0.12}s">{word}</span></span> 
			{/each}<br>
			<em class="hero-em not-italic text-forest-mid relative">
				{#each m.hero_title_line2().split(' ') as word, i(i)}
					<span class="word-clip"><span class="word-rise" style="--d:{0.7 + i * 0.12}s">{word}</span></span> 
				{/each}
			</em><br>
			{#each m.hero_title_line3().split(' ') as word, i(i)}
				<span class="word-clip"><span class="word-rise" style="--d:{0.95 + i * 0.12}s">{word}</span></span> 
			{/each}
		</h1>

		<p class="hero-anim text-[1.02rem] text-slate-green leading-[1.8] font-light max-w-[500px] mb-10" style="--d:.85s">
			{m.hero_sub()}
		</p>

		<div class="hero-anim flex gap-4 flex-wrap max-xl:justify-center" style="--d:1.05s">
			<a href="#work" class="inline-flex items-center gap-2 bg-forest text-fog px-8 py-[0.85rem] text-[0.82rem] tracking-[0.08em] font-medium rounded-[3px] transition-all hover:bg-forest-mid hover:-translate-y-0.5">
				{m.hero_cta_primary()}
			</a>
			<a href="#contact" class="inline-flex items-center gap-2 border border-sage text-forest px-8 py-[0.85rem] text-[0.82rem] tracking-[0.06em] font-medium rounded-[3px] transition-all hover:bg-fog hover:-translate-y-0.5">
				{m.hero_cta_secondary()}
			</a>
		</div>

		<div class="hero-anim flex gap-10 mt-12 max-sm:hidden max-xl:justify-center" style="--d:1.2s">
			{#each [
				{ val: m.hero_stat1_val(), label: m.hero_stat1_label() },
				{ val: m.hero_stat2_val(), label: m.hero_stat2_label() },
				{ val: m.hero_stat3_val(), label: m.hero_stat3_label() },
			] as stat, i (i)}
				<div>
					<span class="block font-display text-[2rem] font-light text-forest leading-none">{stat.val}</span>
					<span class="block font-mono text-[0.62rem] tracking-[0.07em] text-ink-muted mt-1">{stat.label}</span>
				</div>
			{/each}
		</div>
	</div>

	<div class="hero-anim-right self-stretch relative z-[2] max-xl:min-h-[620px] max-xl:mx-auto max-xl:w-full" style="--d:.6s">
		<div class="absolute bottom-[-16px] right-[-16px] w-[60%] h-[45%] border border-gold opacity-25 rounded z-[-1]"></div>
		<div class="relative bg-forest-deep rounded-[6px] overflow-hidden shadow-[32px_32px_80px_rgba(26,46,39,.22),0_0_0_1px_rgba(138,171,151,.12)] h-full">
			<div class="absolute inset-0" style="background:radial-gradient(ellipse at 80% 20%,rgba(90,140,120,.35) 0%,transparent 55%),radial-gradient(ellipse at 20% 80%,rgba(196,168,130,.2) 0%,transparent 50%),linear-gradient(160deg,#1a2e27 0%,#2d4a3e 60%,#1a2e27 100%)"></div>
			<div class="absolute inset-0 overflow-hidden opacity-[0.18]">
				<svg viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
					<path d="M200 480 C200 400 160 350 120 280 C80 210 40 180 20 100" stroke="#8aab97" stroke-width="1" opacity=".6"/>
					<path d="M200 480 C200 400 240 350 280 280 C320 210 360 180 380 100" stroke="#8aab97" stroke-width="1" opacity=".6"/>
					<path d="M120 280 C150 270 180 240 200 220" stroke="#8aab97" stroke-width=".8" opacity=".5"/>
					<path d="M280 280 C250 270 220 240 200 220" stroke="#8aab97" stroke-width=".8" opacity=".5"/>
				</svg>
			</div>
			<div class="absolute inset-0 pointer-events-none">
				{#each pills as pill(pill)}
					<div class="absolute {pill.pos} bg-white/7 border border-sage/25 backdrop-blur-lg rounded-full px-4 py-[0.45rem] font-mono text-[0.62rem] tracking-[0.1em] text-sage whitespace-nowrap"
						style="animation:var(--animate-pill-float);animation-delay:{pill.delay};animation-duration:{pill.dur}">
						<span class="pill-en">{pill.en}</span><span class="pill-ja">{pill.ja}</span>
					</div>
				{/each}
			</div>
			<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-square flex items-center justify-center">
				<div class="absolute inset-0 rounded-full border border-sage/15" style="animation:var(--animate-ring-a)"></div>
				<div class="absolute inset-[12%] rounded-full border border-gold/12" style="animation:var(--animate-ring-b)"></div>
				<div class="absolute inset-[24%] rounded-full border border-sage/20" style="animation:var(--animate-ring-c)"></div>
				<div class="relative z-[2] w-[72px] h-[72px] bg-forest-light/20 border border-forest-light/30 rounded-full flex items-center justify-center">
					<svg viewBox="0 0 36 36" fill="none" class="w-9 h-9">
						<line x1="18" y1="34" x2="18" y2="14" stroke="#8aab97" stroke-width="1.5" stroke-linecap="round"/>
						<path d="M18 20 C18 20 10 16 8 10 C12 10 16 14 18 14 C20 14 24 10 28 10 C26 16 18 20 18 20Z" fill="rgba(138,171,151,.25)" stroke="#8aab97" stroke-width="1"/>
						<path d="M18 26 C18 26 12 22 10 17 C14 17 17 20 18 20 C19 20 22 17 26 17 C24 22 18 26 18 26Z" fill="rgba(138,171,151,.2)" stroke="#8aab97" stroke-width=".8"/>
						<circle cx="18" cy="8" r="3" fill="rgba(196,168,130,.3)" stroke="#c4a882" stroke-width="1"/>
					</svg>
				</div>
			</div>
			<div class="absolute bottom-0 left-0 right-0 p-6" style="background:linear-gradient(to top,rgba(26,46,39,.95),transparent)">
				<span class="block font-mono text-[0.6rem] tracking-[0.15em] text-gold uppercase mb-2">Ironpine Web Studio</span>
				<p class="font-display text-[1.2rem] text-fog font-light leading-[1.3] mb-3">
					{m.hero_card_line1()}<br><em class="not-italic text-sage">{m.hero_card_line2()}</em>
				</p>
				<div class="flex gap-2 items-center">
					<div class="w-[6px] h-[6px] rounded-full bg-forest-light" style="animation:var(--animate-card-pulse)"></div>
					<span class="font-mono text-[0.6rem] tracking-[0.1em] text-sage">{m.hero_card_status()}</span>
				</div>
			</div>
			<div class="absolute top-5 right-5 w-10 h-10 border-t border-r border-gold/35"></div>
		</div>
	</div>

	<div class="hero-anim absolute bottom-8 left-16 flex items-center gap-3 z-[2] max-lg:left-8 max-xl:hidden" style="--d:1.5s">
		<div class="w-11 h-px bg-gradient-to-r from-sage to-transparent" style="animation:var(--animate-scroll-hint)"></div>
		<span class="font-mono text-[0.6rem] tracking-[0.18em] text-ink-muted uppercase">{m.hero_scroll()}</span>
	</div>
</section>

<style>
	.word-clip {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
		line-height: 1.15;
		margin-right: 0.28em;
	}
	.word-rise {
		display: inline-block;
		animation: word-rise 0.75s cubic-bezier(0.16, 1, 0.3, 1) calc(1.8s + var(--d, 0s)) both;
	}
	.hero-anim {
		animation: fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) calc(1.8s + var(--d, 0s)) both;
	}
	.hero-anim-left {
		animation: fade-from-left 0.9s cubic-bezier(0.16, 1, 0.3, 1) calc(1.8s + var(--d, 0s)) both;
	}
	.hero-anim-right {
		animation: fade-from-right 1s cubic-bezier(0.16, 1, 0.3, 1) calc(1.8s + var(--d, 0s)) both;
	}
	.pill-en { display: inline; }
	.pill-ja { display: none; }
	:global(body.ja) .pill-en { display: none; }
	:global(body.ja) .pill-ja { display: inline; }
</style>
