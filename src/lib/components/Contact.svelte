<script lang="ts">
	import { onMount } from 'svelte';
	import { reveal } from '$lib/actions/gsap';
	import * as m from '$lib/paraglide/messages';

	const FORMSPREE_URL = 'https://formspree.io/f/mnjgnpqr';

	type CalApi = ((...args: unknown[]) => void) & {
		loaded?: boolean;
		ns: Record<string, (...args: unknown[]) => void>;
		q: unknown[][];
	};
	type CalWindow = typeof window & { Cal?: CalApi };

	onMount(() => {
		const win = window as CalWindow;

		if (!win.Cal) {
			const q: unknown[][] = [];
			const Cal: CalApi = Object.assign(
				(...args: unknown[]) => { q.push(args); },
				{ loaded: false, ns: {} as Record<string, (...args: unknown[]) => void>, q }
			);
			win.Cal = Cal;
			const script = document.createElement('script');
			script.src = 'https://app.cal.com/embed/embed.js';
			document.head.appendChild(script);
		}

		win.Cal('init', '30min', { origin: 'https://cal.com' });
		win.Cal.ns['30min']?.('ui', { hideEventTypeDetails: false, layout: 'month_view' });
	});

	let name    = $state('');
	let email   = $state('');
	let business = $state('');
	let message = $state('');
	let status  = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	async function handleSubmit() {
		if (!name || !email || !message) return;
		status = 'sending';
		try {
			const res = await fetch(FORMSPREE_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
				body: JSON.stringify({ name, email, business, message }),
			});
			status = res.ok ? 'success' : 'error';
		} catch {
			status = 'error';
		}
	}
</script>

<section id="contact" class="bg-stone px-16 py-32 max-lg:px-8 max-lg:py-20 overflow-hidden">
	<div class="flex items-center gap-3 font-mono text-[0.68rem] tracking-[0.18em] uppercase text-forest-mid mb-8 sr" use:reveal>
		<span class="w-8 h-px bg-gold shrink-0"></span>{m.contact_eyebrow()}
	</div>

	<div class="grid gap-24 items-start lg:grid-cols-[1fr_1fr] max-lg:gap-16">
		<!-- Left: heading + cal -->
		<div class="sr-left" use:reveal>
			<h2 class="font-display font-light text-forest-deep leading-[1.15] mb-6" style="font-size:clamp(2.5rem,4.5vw,4rem)">
				{m.contact_heading()}<br><em class="italic text-forest-mid">{m.contact_heading_em()}</em>
			</h2>
			<p class="text-slate-green text-[0.97rem] leading-[1.8] font-light mb-12 max-w-[400px]">{m.contact_intro()}</p>

			<!-- Cal.com booking block -->
			<div class="border border-mist rounded-[4px] p-8 bg-fog/40">
				<p class="font-mono text-[0.62rem] tracking-[0.15em] text-gold uppercase mb-3">{m.contact_cal_label()}</p>
				<p class="text-slate-green text-[0.9rem] leading-[1.75] font-light mb-6">{m.contact_cal_sub()}</p>
				<button
				data-cal-namespace="30min"
				data-cal-link="austin-henry-n5r6ix/30min"
				data-cal-config={'{"layout":"month_view"}'}
				class="inline-flex items-center gap-2 border border-forest text-forest px-6 py-[0.7rem] text-[0.82rem] tracking-[0.06em] font-medium rounded-[3px] transition-all hover:bg-forest hover:text-fog hover:-translate-y-0.5"
			>
				<svg viewBox="0 0 16 16" fill="none" class="w-4 h-4 shrink-0">
					<rect x="1" y="3" width="14" height="12" rx="1.5" stroke="currentColor" stroke-width="1.2"/>
					<line x1="1" y1="7" x2="15" y2="7" stroke="currentColor" stroke-width="1.2"/>
					<line x1="5" y1="1" x2="5" y2="5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
					<line x1="11" y1="1" x2="11" y2="5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
				</svg>
				{m.contact_cal_btn()}
			</button>

				<div class="flex items-center gap-4 mt-8">
					<span class="h-px flex-1 bg-mist"></span>
					<span class="font-mono text-[0.6rem] tracking-[0.1em] text-ink-muted">{m.contact_or()}</span>
					<span class="h-px flex-1 bg-mist"></span>
				</div>

				<div class="mt-6">
					<p class="font-mono text-[0.6rem] tracking-[0.1em] text-ink-muted mb-2">{m.contact_direct_label()}</p>
					<a href="mailto:{m.contact_email_addr()}" class="font-display text-[1rem] text-forest-deep hover:text-forest-mid transition-colors">
						{m.contact_email_addr()}
					</a>
				</div>
			</div>
		</div>

		<!-- Right: form -->
		<div class="sr-right" use:reveal>
			{#if status === 'success'}
				<div class="border border-mist rounded-[4px] p-12 text-center bg-fog/30 flex flex-col items-center gap-4">
					<div class="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center">
						<svg viewBox="0 0 24 24" fill="none" class="w-6 h-6 text-forest">
							<path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</div>
					<h3 class="font-display text-[1.6rem] text-forest-deep font-light">{m.contact_success_h()}</h3>
					<p class="text-slate-green text-[0.92rem] font-light">{m.contact_success_b()}</p>
				</div>
			{:else}
				<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }} novalidate class="flex flex-col gap-5">
					<div class="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
						<div class="field-group">
							<label for="cf-name" class="field-label">{m.contact_name()}</label>
							<input id="cf-name" type="text" bind:value={name} required autocomplete="name" class="field-input" />
						</div>
						<div class="field-group">
							<label for="cf-email" class="field-label">{m.contact_email()}</label>
							<input id="cf-email" type="email" bind:value={email} required autocomplete="email" class="field-input" />
						</div>
					</div>
					<div class="field-group">
						<label for="cf-business" class="field-label">{m.contact_business()}</label>
						<input id="cf-business" type="text" bind:value={business} autocomplete="organization" class="field-input" />
					</div>
					<div class="field-group">
						<label for="cf-message" class="field-label">{m.contact_message()}</label>
						<textarea id="cf-message" bind:value={message} required rows="6" class="field-input resize-none"></textarea>
					</div>

					{#if status === 'error'}
						<p class="font-mono text-[0.72rem] text-red-600 tracking-[0.04em]">{m.contact_error()}</p>
					{/if}

					<button
						type="submit"
						disabled={status === 'sending'}
						class="w-full bg-forest text-fog py-[0.95rem] text-[0.85rem] tracking-[0.08em] font-medium rounded-[3px] transition-all hover:bg-forest-mid hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
					>
						{status === 'sending' ? m.contact_sending() : m.contact_submit()}
					</button>

					<p class="font-mono text-[0.6rem] tracking-[0.06em] text-ink-muted text-center leading-[1.6]">
						No spam. No newsletters. Just a direct reply from Austin within 24 hours.
					</p>
				</form>
			{/if}
		</div>
	</div>
</section>

<style>
	.field-group { display: flex; flex-direction: column; gap: 0.4rem; }
	.field-label {
		font-family: var(--font-mono);
		font-size: 0.62rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: #4a6358;
	}
	.field-input {
		width: 100%;
		background: white;
		border: 1px solid #c5d8d0;
		border-radius: 3px;
		padding: 0.75rem 1rem;
		font-family: var(--font-body);
		font-size: 0.9rem;
		color: #1c2c28;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s;
	}
	.field-input:focus {
		border-color: #5a8c78;
		box-shadow: 0 0 0 3px rgba(90, 140, 120, 0.1);
	}
	.field-input::placeholder { color: #6b8c7e; opacity: 0.5; }
</style>
