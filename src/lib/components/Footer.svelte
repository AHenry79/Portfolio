<script lang='ts'>
    import { navLinks } from '$lib/data';

    const year = new Date().getFullYear();
</script>

<footer>
    <a href="/" class="footer-logo"> Austin Henry.</a>
    <ul class="footer-links" role="list">
    {#each navLinks as link (link.href)}
        <li><a href={link.href}>{link.label}</a></li>
    {/each}
    </ul>

    <p class="footer-copy">© {year} Ironwood Web Studio. All rights reserved.</p>
</footer>

<style>
  footer {
    background: var(--charcoal);
    padding: 3rem 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem;
    color: var(--fog);
    font-weight: 400;
  }

  .footer-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .footer-links a {
    font-family: 'Space Mono', monospace;
    font-size: 0.68rem;
    letter-spacing: 0.1em;
    color: var(--slate-light);
    text-transform: uppercase;
    transition: color 0.3s;
  }

  .footer-links a:hover { color: var(--sage); }

  .footer-copy {
    font-family: 'Space Mono', monospace;
    font-size: 0.65rem;
    color: var(--slate-light);
    letter-spacing: 0.05em;
  }

  @media (max-width: 768px) {
    footer {
      flex-direction: column;
      gap: 1.5rem;
      text-align: center;
      padding: 3rem 1.5rem;
    }
    .footer-links { flex-wrap: wrap; justify-content: center; }
  }
</style>