<script lang="ts">
    import { onMount } from 'svelte';

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let isHovering = false;
    let raf: number;

    onMount(() => {
        function onMouseMove(e: MouseEvent) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }
        function animateRing() {
            ringX += (mouseX- ringX) * 0.12;
            ringY += (mouseY- ringY) * 0.12;
            raf = requestAnimationFrame(animateRing);
        }
        // function onEnter() {
        //     isHovering = true;
        // }
        // function onLeave() {
        //     isHovering = false;
        // }
        window.addEventListener('mousemove', onMouseMove);

        // Hover detection responsible for interactive elements
        document.body.addEventListener('mouseover', (e) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"], .service-card, .portfolio-item')) {
                isHovering = false;
            }
        });

        raf = requestAnimationFrame(animateRing);
        animateRing();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(raf);
        }
    })
</script>
<!-- Only shown on desktop -->
<div 
    class="cursor" 
    class:hovering={isHovering} 
    style="left: {mouseX}px; top: {mouseY}px;" 
    aria-hidden="true" >
</div>
<div 
    class="cursor-ring"
    style="left: {ringX}px; top: {ringY}px;"
    aria-hidden="true">
</div>

<style>
    .cursor,
    .cursor-ring {
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        /* Hide on touch or coarse devices */
        display: none;
    }

    @media (pointer: fine) {
        .cursor {
            display: block;
            width: 12px;
            height: 12px;
            background: var(--forest-mid);
            mix-blend-mode: multiply;
            transition: width 0.3s var(--ease-out), height 0.3s var(--ease-out), background 0.3s;
        }
        .cursor.hovering {
            width: 40px;
            height: 40px;
            background: var(--gold);
            mix-blend-mode: normal;
        }
        .cursor-ring {
            display: block;
            width: 36px;
            height: 36px;
            border: 1.5px solid var(--forest-mid);
            opacity: 0.6;
            transition: transform 0.3s var(--ease-out), opacity 0.3s;
        }
        .cursor-ring.hovering {
            transform: translate(-50%, -50%) scale(1.4);
        }
    }
</style>