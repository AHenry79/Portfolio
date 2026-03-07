<script lang="ts">
	import * as m from '$lib/paraglide/messages';
</script>

<footer class="bg-charcoal px-16 py-10 flex justify-between items-center border-t border-white/4 max-lg:flex-col max-lg:gap-5 max-lg:text-center max-lg:px-8 max-lg:py-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center">
	<a href="/" class="font-display text-[1.1rem] text-fog">Ironpine<span class="text-gold">.</span></a>
	<ul class="flex gap-7">
		<li><a href="#services"  class="font-mono text-[0.63rem] tracking-[0.08em] text-sage/40 transition-colors hover:text-sage">{m.nav_services()}</a></li>
		<li><a href="#work"      class="font-mono text-[0.63rem] tracking-[0.08em] text-sage/40 transition-colors hover:text-sage">{m.nav_work()}</a></li>
		<li><a href="#about"     class="font-mono text-[0.63rem] tracking-[0.08em] text-sage/40 transition-colors hover:text-sage">{m.nav_about()}</a></li>
		<li><a href="#contact"   class="font-mono text-[0.63rem] tracking-[0.08em] text-sage/40 transition-colors hover:text-sage">{m.nav_contact()}</a></li>
	</ul>
	<p class="font-mono text-[0.62rem] text-sage/30 lg:justify-self-end">{m.footer_copy()}</p>
</footer>
