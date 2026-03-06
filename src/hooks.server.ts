import type { Handle } from '@sveltejs/kit';
import { paraglideMiddleware } from '$lib/paraglide/server';

const getTextDirection = (locale: string) =>
    /^(ar|he|fa|ur)\b/i.test(locale) ? 'rtl' : 'ltr';

const handleParaglide: Handle = ({ event, resolve }) =>
    paraglideMiddleware(event.request, ({ request, locale }: { request: Request; locale: string }) => {
        event.request = request;

        return resolve(event, {
            transformPageChunk: ({ html }) =>
                html
                    .replace('%paraglide.lang%', locale)
                    .replace('%paraglide.dir%', getTextDirection(locale)),
        });
    });

export const handle: Handle = handleParaglide;
