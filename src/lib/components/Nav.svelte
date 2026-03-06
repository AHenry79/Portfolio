<script lang="ts">
	import { page } from '$app/stores';
    import { navLinks } from '$lib/data';
    import { onMount } from 'svelte';

    let scrolled = false;
    let mobileOpen = false;

    onMount(() => {
        function onScroll() {
            scrolled = window.scrollY > 60;
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    });
</script>

<nav class:scrolled aria-label="Main navigation">
    <a href="/" class="nav-logo">Austin Henry<span class="dot">.</span></a>
    <ul class="nav-links" role="list">
        {#each navLinks as link (link.href)}
        <li>
            <a href={link.href} class:active={$page.url.pathname === link.href} on:click={() => (mobileOpen = false)}>{link.label}</a>
        </li>
        {/each}
    </ul>

    <a href="/contact" class="nav-cta">Start a Project</a>

    <!-- Mobile hamburger menu -->
     <button class="hamburger" aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} on:click={()=>(mobileOpen = !mobileOpen)}>
        <span class:open={mobileOpen}></span>
        <span class:open={mobileOpen}></span>
        <span class:open={mobileOpen}></span>
     </button>
</nav>

<!-- Mobile drawer -->
{#if mobileOpen}
    <div class="mobile-drawer" role="dialog" aria-modal="true">
        <ul role="list">
            {#each navLinks as link (link.href)}
            <li>
                <a href={link.href} on:click={() => (mobileOpen = false)}>{link.label}</a>
            </li>
            {/each}
             <li>
                <a href="/contact" class="mobile-cta" on:click={() => (mobileOpen = false)}>Start a Project</a>
            </li>   
        </ul>
    </div>
{/if}
<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    transition: background 0.4s, backdrop-filter 0.4s, padding 0.4s, box-shadow 0.4s;
  }

  nav.scrolled {
    background: rgba(247, 249, 248, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    padding: 1rem 4rem;
    box-shadow: 0 1px 0 var(--mist);
  }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: var(--forest-deep);
  }

  .dot { color: var(--gold); }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    list-style: none;
  }

  .nav-links a {
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--slate);
    font-weight: 500;
    position: relative;
    transition: color 0.3s;
    padding-bottom: 4px;
  }

  .nav-links a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gold);
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s var(--ease-out);
  }

  .nav-links a:hover,
  .nav-links a.active {
    color: var(--forest);
  }

  .nav-links a:hover::after,
  .nav-links a.active::after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .nav-cta {
    background: var(--forest);
    color: var(--fog);
    padding: 0.65rem 1.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-radius: var(--radius);
    font-weight: 500;
    transition: background 0.3s, transform 0.2s;
  }

  .nav-cta:hover {
    background: var(--forest-mid);
    transform: translateY(-1px);
  }

  /* Hamburger */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    padding: 0.5rem;
  }

  .hamburger span {
    display: block;
    width: 24px;
    height: 1.5px;
    background: var(--forest);
    transition: transform 0.3s, opacity 0.3s;
    transform-origin: center;
  }

  .hamburger span.open:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
  .hamburger span.open:nth-child(2) { opacity: 0; }
  .hamburger span.open:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

  /* Mobile drawer */
  .mobile-drawer {
    position: fixed;
    inset: 0;
    background: var(--stone);
    z-index: 90;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s var(--ease-out);
  }

  .mobile-drawer ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }

  .mobile-drawer a {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem;
    font-weight: 300;
    color: var(--forest-deep);
  }

  .mobile-cta {
    font-size: 1rem !important;
    font-family: 'DM Sans', sans-serif !important;
    background: var(--forest);
    color: var(--fog) !important;
    padding: 0.9rem 2rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-weight: 500 !important;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @media (max-width: 768px) {
    nav { padding: 1.25rem 1.5rem; }
    nav.scrolled { padding: 1rem 1.5rem; }
    .nav-links { display: none; }
    .nav-cta { display: none; }
    .hamburger { display: flex; }
  }
</style>
