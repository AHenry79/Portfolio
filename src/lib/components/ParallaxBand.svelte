<script lang="ts">
	import { parallaxBand, reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';
</script>

<div class="relative h-[380px] overflow-hidden bg-stone flex items-center" use:parallaxBand>
	<div data-para-bg class="absolute -inset-[40%] will-change-transform"
		style="background:url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 stroke=%22%238aab97%22 stroke-width=%22.4%22 opacity=%22.12%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%2220%22/%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%2210%22/%3E%3Cline x1=%2230%22 y1=%220%22 x2=%2230%22 y2=%2260%22/%3E%3Cline x1=%220%22 y1=%2230%22 x2=%2260%22 y2=%2230%22/%3E%3C/g%3E%3C/svg%3E') repeat;background-size:60px">
	</div>
	<div class="absolute inset-0 pointer-events-none">
		<div class="absolute top-[15%] left-[6%] opacity-[0.12] will-change-transform" data-para-speed="0.18" data-para-dir="1">
			<svg width="80" height="120" viewBox="0 0 80 120" fill="none"><path d="M40 110 C40 110 5 80 5 45 C5 20 20 5 40 5 C60 5 75 20 75 45 C75 80 40 110 40 110Z" stroke="#8aab97" stroke-width="1.5" fill="rgba(138,171,151,.08)"/><line x1="40" y1="10" x2="40" y2="108" stroke="#8aab97" stroke-width=".8" opacity=".5"/></svg>
		</div>
		<div class="absolute top-[55%] left-[18%] opacity-[0.12] will-change-transform" data-para-speed="0.28" data-para-dir="-1">
			<svg width="50" height="80" viewBox="0 0 50 80" fill="none"><path d="M25 75 C25 75 3 55 3 30 C3 12 12 3 25 3 C38 3 47 12 47 30 C47 55 25 75 25 75Z" stroke="#c4a882" stroke-width="1.2" fill="rgba(196,168,130,.06)"/><line x1="25" y1="6" x2="25" y2="73" stroke="#c4a882" stroke-width=".7" opacity=".4"/></svg>
		</div>
		<div class="absolute top-[25%] right-[8%] opacity-[0.12] will-change-transform" data-para-speed="0.12" data-para-dir="1">
			<svg width="100" height="60" viewBox="0 0 100 60" fill="none"><path d="M5 30 C5 30 30 5 55 5 C75 5 95 18 95 30 C95 42 75 55 55 55 C30 55 5 30 5 30Z" stroke="#8aab97" stroke-width="1.5" fill="rgba(138,171,151,.06)"/></svg>
		</div>
		<div class="absolute top-[65%] right-[22%] opacity-[0.12] will-change-transform" data-para-speed="0.22" data-para-dir="-1">
			<svg width="60" height="90" viewBox="0 0 60 90" fill="none"><path d="M30 85 C30 85 4 62 4 36 C4 16 15 4 30 4 C45 4 56 16 56 36 C56 62 30 85 30 85Z" stroke="#8aab97" stroke-width="1.2" fill="rgba(138,171,151,.05)" transform="rotate(-20 30 45)"/></svg>
		</div>
		<div class="absolute top-[40%] left-[42%] opacity-[0.12] will-change-transform" data-para-speed="0.35" data-para-dir="1">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="#c4a882" stroke-width="1" opacity=".4" fill="none"/><circle cx="20" cy="20" r="10" stroke="#c4a882" stroke-width=".7" opacity=".3" fill="none"/></svg>
		</div>
	</div>
	<div class="relative z-[2] w-full px-16 flex justify-between items-center gap-12 max-lg:flex-col max-lg:items-start max-lg:px-8">
		<p class="sr font-display font-light italic leading-[1.3] text-forest-deep max-w-[640px]" style="font-size:clamp(1.6rem,3.5vw,2.8rem)" use:reveal>
			{m.band_quote()} <em class="not-italic text-forest-mid border-b border-gold pb-[2px]">{m.band_quote_em()}</em> {m.band_quote_end()}
		</p>
		<span class="sr d3 font-mono text-[0.65rem] tracking-[0.2em] text-ink-muted uppercase [writing-mode:vertical-rl] rotate-180 max-lg:[writing-mode:horizontal-tb] max-lg:rotate-0" use:reveal>
			{m.band_attr()}
		</span>
	</div>
</div>
