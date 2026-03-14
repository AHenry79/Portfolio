import type { Action } from 'svelte/action';

export const reveal: Action = (node) => {
	let ctx: { kill: () => void } | null = null;
	import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
		import('gsap').then(({ gsap }) => {
			gsap.registerPlugin(ScrollTrigger);
			ctx = ScrollTrigger.create({
				trigger: node,
				start: 'top 88%',
				onEnter: () => node.classList.add('visible')
			}) as unknown as { kill: () => void };
		});
	});
	return { destroy() { ctx?.kill(); } };
};

export const parallaxOrb: Action<HTMLElement, { speed: number }> = (node, params) => {
	let speed = params?.speed ?? 0.5;
	let moveX: ((v: number) => void) | null = null;
	let moveY: ((v: number) => void) | null = null;
	import('gsap').then(({ gsap }) => {
		moveX = gsap.quickTo(node, 'x', { duration: 0.8, ease: 'power2.out' });
		moveY = gsap.quickTo(node, 'y', { duration: 0.8, ease: 'power2.out' });
	});
	const onMove = (e: MouseEvent) => {
		if (!moveX || !moveY) return;
		moveX((e.clientX / window.innerWidth - 0.5) * 50 * speed);
		moveY((e.clientY / window.innerHeight - 0.5) * 50 * speed);
	};
	document.addEventListener('mousemove', onMove);
	return {
		update(p: { speed: number }) { speed = p.speed; },
		destroy() { document.removeEventListener('mousemove', onMove); }
	};
};

export const parallaxBand: Action = (node) => {
	const kills: (() => void)[] = [];
	import('gsap').then(({ gsap }) => {
		import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
			gsap.registerPlugin(ScrollTrigger);
			const trig = { trigger: node, start: 'top bottom', end: 'bottom top', scrub: true };
			const bg = node.querySelector<HTMLElement>('[data-para-bg]');
			if (bg) {
				const t = gsap.fromTo(bg, { y: -60 }, { y: 60, ease: 'none', scrollTrigger: trig });
				kills.push(() => t.scrollTrigger?.kill());
			}
			node.querySelectorAll<HTMLElement>('[data-para-speed]').forEach((el, i) => {
				const s = parseFloat(el.dataset.paraSpeed ?? '0.2');
				const d = parseFloat(el.dataset.paraDir ?? (i % 2 === 0 ? '1' : '-1'));
				const travel = window.innerHeight * s;
				const t = gsap.fromTo(el,
					{ y: -travel, x: -(d * 12), rotation: -(d * 8) },
					{ y: travel, x: d * 12, rotation: d * 8, ease: 'none', scrollTrigger: trig }
				);
				kills.push(() => t.scrollTrigger?.kill());
			});
		});
	});
	return { destroy() { kills.forEach(k => k()); } };
};

export const wordReveal: Action = (node) => {
	let st: { kill: () => void } | null = null;
	let lastLit = -1;
	import('gsap').then(({ gsap }) => {
		import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
			gsap.registerPlugin(ScrollTrigger);
			const words = node.querySelectorAll<HTMLElement>('.w');
			if (!words.length) return;
			st = ScrollTrigger.create({
				trigger: node, start: 'top 75%', end: 'center 50%', scrub: 0.2,
				onUpdate(self) {
					const count = Math.floor(self.progress * words.length);
					if (count === lastLit) return;
					words.forEach((w, i) => {
						const should = i < count;
						const has = w.classList.contains('lit');
						if (should && !has) { w.classList.add('lit', 'glow'); setTimeout(() => w.classList.remove('glow'), 600); }
						else if (!should && has) { w.classList.remove('lit', 'glow'); }
					});
					lastLit = count;
				}
			}) as unknown as { kill: () => void };
		});
	});
	return { destroy() { st?.kill(); } };
};

export const stickyCounter: Action<HTMLElement, { el: HTMLElement | null; total: number }> = (node, params) => {
	let el = params?.el ?? null;
	const total = params?.total ?? 4;
	const steps = Array.from(node.querySelectorAll('.process-step')) as HTMLElement[];
	const set = (i: number) => {
		if (!el) return;
		el.textContent = document.body.classList.contains('ja')
			? `ステップ ${i} / ${total}`
			: `Step ${i} of ${total}`;
	};
	const update = () => {
		const mid = window.innerHeight / 2;
		let closest = 0;
		let closestDist = Infinity;
		steps.forEach((step, i) => {
			const rect = step.getBoundingClientRect();
			const center = (rect.top + rect.bottom) / 2;
			const dist = Math.abs(center - mid);
			if (dist < closestDist) { closestDist = dist; closest = i; }
		});
		set(closest + 1);
	};
	window.addEventListener('scroll', update, { passive: true });
	update();
	return { update(p: { el: HTMLElement | null; total: number }) { el = p.el; }, destroy() { window.removeEventListener('scroll', update); } };
};
