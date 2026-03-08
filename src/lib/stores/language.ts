import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { getLocale, setLocale } from '$lib/paraglide/runtime';

export type Language = 'en' | 'ja';

const initial: Language = browser ? (getLocale() as Language) : 'en';

export const language = writable<Language>(initial);

function applyLang(lang: Language) {
	if (!browser) return;
	document.body.classList.toggle('ja', lang === 'ja');
	document.documentElement.lang = lang;
}

if (browser) {
	applyLang(initial);
}

export function toggleLanguage() {
	language.update((l) => {
		const next = l === 'en' ? 'ja' : 'en';
		setLocale(next); // sets PARAGLIDE_LOCALE cookie + reloads page with correct messages
		return next;
	});
}
