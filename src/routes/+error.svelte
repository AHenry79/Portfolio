<svelte:head>
  <title>404 — Page Not Found</title>
</svelte:head>

<section class="not-found">
  <div class="inner">
    <p class="section-label">404</p>
    <h1 class="title">Page not<br /><em>found</em></h1>
    <p class="sub">
      The page you're looking for doesn't exist or has moved.
    </p>
    <a href="/" class="btn-primary" style="margin-top:2rem;">Back to Home</a>
  </div>
</section>

<style>
  .not-found {
    min-height: 100vh;
    background: var(--stone);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
  }

  .inner { text-align: center; max-width: 500px; }

  .title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(4rem, 10vw, 8rem);
    font-weight: 300;
    color: var(--forest-deep);
    line-height: 1.05;
    margin: 0.5rem 0 1.5rem;
  }

  em { font-style: italic; color: var(--forest-mid); }

  .sub {
    color: var(--slate);
    font-size: 1.05rem;
    line-height: 1.7;
    font-weight: 300;
  }
</style>
