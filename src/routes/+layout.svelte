<script lang='ts'>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Cursor from '$lib/components/Cursor.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate } from '$app/navigation';

	// Smooth page chagnes
	onNavigate((navigation) => {
    if (!document.startViewTransition) return;
    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Cursor />
<Nav />

<main>
	<slot />
</main>

<Footer />

<style>
  main {
    /* Offset for fixed nav on non-home pages */
    padding-top: 0;
  }

  /* View Transitions */
  :global(::view-transition-old(root)) {
    animation: fade-out 0.25s ease forwards;
  }
  :global(::view-transition-new(root)) {
    animation: fade-in 0.3s var(--ease-out) 0.1s both;
  }

  @keyframes fade-out {
    to { opacity: 0; transform: translateY(-8px); }
  }
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>