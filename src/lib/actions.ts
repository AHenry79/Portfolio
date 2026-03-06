// Reveal element when it enters viewport

export function reveal(node: HTMLElement, delay: number = 0) {
    node.classList.add('reveal');
    if (delay) node.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    node.classList.add('revealed');
                    observer.unobserve(node);
                }
            });
        },
        { threshold: 0.12 }
    );

    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    }
}

// parallax effect on mouse movement

export function parallax(node: HTMLElement, {strength = 0.02 }: { strength?: number } = {}): { destroy(): void } {
    let raf: number;
    function onMouseMove(e: MouseEvent) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
            const x = (e.clientX / window.innerWidth - 0.5) * strength * 100;
            const y = (e.clientY / window.innerHeight - 0.5) * strength * 100;
            node.style.transform = `translate(${x}px, ${y}px)`;
        });
    }
    window.addEventListener('mousemove', onMouseMove);

    return {
        destroy() {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMouseMove);
        }
    }
}

// Trap focus within element for things like modals

export function trapFocus(node: HTMLElement): { destroy(): void }  {
    const focusable = node.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    function handleKeydown(e: KeyboardEvent) {
        if (e.key !== 'Tab') return;
        if (e.shiftKey) {
            if (document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }
    node.addEventListener('keydown', handleKeydown);
    return {
        destroy() {
            node.removeEventListener('keydown', handleKeydown);
        }}
    }