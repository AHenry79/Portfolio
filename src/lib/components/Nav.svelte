<script lang="ts">
	import { onMount } from 'svelte';
	import { language, toggleLanguage } from '$lib/stores/language';
	import * as m from '$lib/paraglide/messages';

	let scrolled = $state(false);
	let progress = $state(0);
	let menuOpen = $state(false);
	let menuClosing = $state(false);

	function openMenu()  { menuClosing = false; menuOpen = true; }
	function closeMenu() {
		menuClosing = true;
		setTimeout(() => { menuOpen = false; menuClosing = false; }, 280);
	}
	function toggleMenu() { if (menuOpen && !menuClosing) { closeMenu(); } else { openMenu(); } }

	onMount(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 60;
			const max = document.body.scrollHeight - window.innerHeight;
			progress = max > 0 ? (window.scrollY / max) * 100 : 0;
		};
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const links = [
		{ href: '#services',     key: 'nav_services' as const },
		{ href: '#work',         key: 'nav_work'     as const },
		{ href: '#process',      key: 'nav_process'  as const },
		{ href: '#about',        key: 'nav_about'    as const },
		{ href: '#contact',      key: 'nav_contact'  as const },
	];
</script>

<div class="fixed top-0 left-0 z-[300] h-[2px] bg-gold pointer-events-none transition-[width] duration-100" style="width:{progress}%"></div>

<nav class="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center px-16 transition-all duration-400 max-lg:px-8
	{scrolled ? 'py-4 bg-stone/95 backdrop-blur-md shadow-[0_1px_0_#c5d8d0]' : 'py-6'}">

	<a href="/" class="font-display text-[1.35rem] font-semibold text-forest-deep tracking-[0.01em]">
		Ironpine<span class="text-gold">.</span>
	</a>

	<ul class="hidden lg:flex gap-9">
		{#each links as link(link)}
			<li>
				<a href={link.href} class="nav-link relative font-mono text-[0.72rem] tracking-[0.05em] text-slate-green pb-[3px] transition-colors hover:text-forest">
					{m[link.key]()}
				</a>
			</li>
		{/each}
	</ul>

	<div class="flex items-center gap-4 lg:justify-self-end">
		<button
			onclick={toggleLanguage}
			class="lang-toggle relative flex items-center border border-mist rounded-full cursor-pointer overflow-hidden transition-colors hover:border-sage select-none"
			aria-label={$language === 'en' ? 'Switch to Japanese' : 'Switch to English'}
		>
			<div class="lang-pill absolute top-[3px] left-[4px] h-[calc(100%-6px)] bg-forest rounded-full pointer-events-none"></div>
			<span class="lang-opt-en relative z-10 font-mono text-[0.62rem] tracking-[0.06em] text-slate-green px-3 py-[0.3rem] transition-colors">EN</span>
			<span class="relative z-10 text-mist/40 text-[0.5rem] shrink-0">|</span>
			<span class="lang-opt-ja relative z-10 text-[0.68rem] text-slate-green px-3 py-[0.3rem] transition-colors whitespace-nowrap" style="font-family:var(--font-noto-sans)">日本語</span>
		</button>

		<a href="#contact" class="hidden sm:inline-flex bg-forest text-fog px-6 py-[0.6rem] text-[0.78rem] tracking-[0.06em] rounded-[3px] font-medium whitespace-nowrap transition-all hover:bg-forest-mid hover:-translate-y-px">
			{m.nav_cta()}
		</a>

		<button
			onclick={toggleMenu}
			class="flex lg:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 w-9"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
		>
			<span class="block h-[2px] bg-forest-deep transition-all duration-300 origin-center {menuOpen && !menuClosing ? 'translate-y-[7px] rotate-45' : ''}"></span>
			<span class="block h-[2px] bg-forest-deep transition-all duration-300 {menuOpen && !menuClosing ? 'opacity-0 scale-x-0' : ''}"></span>
			<span class="block h-[2px] bg-forest-deep transition-all duration-300 origin-center {menuOpen && !menuClosing ? '-translate-y-[7px] -rotate-45' : ''}"></span>
		</button>
	</div>
</nav>

{#if menuOpen}
	<div class="fixed inset-0 z-[150] bg-stone/97 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
		style="animation:{menuClosing ? 'var(--animate-menu-out)' : 'var(--animate-menu-in)'}" role="dialog" aria-modal="true">
		<ul class="flex flex-col items-center gap-7">
			{#each links as link (link.href)}
				<li>
					<a href={link.href} onclick={closeMenu} class="font-display text-[2rem] font-light text-forest-deep">
						{m[link.key]()}
					</a>
				</li>
			{/each}
		</ul>
		<a href="#contact" onclick={closeMenu}
			class="bg-forest text-fog px-8 py-[0.85rem] text-[0.82rem] tracking-[0.08em] font-medium rounded-[3px] transition-all hover:bg-forest-mid">
			{m.nav_cta()}
		</a>
	</div>
{/if}

<style>
	.lang-toggle {
		background: rgba(45, 74, 62, 0.05);
	}
	.lang-pill {
		width: 34px;
		transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
		            width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}
	:global(body.ja) .lang-pill {
		width: calc(100% - 46px);
		transform: translateX(38px);
	}
	:global(body:not(.ja)) .lang-opt-en { color: #e8f0ec; }
	:global(body.ja)       .lang-opt-ja { color: #e8f0ec; }
</style>
