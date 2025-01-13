import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { BackgroundWindow } from "~/components/background-window/background-window";
import { BackgroundPage } from "~/components/background-page/background-page";

export const onGet: RequestHandler = async ({ cacheControl }) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.dev/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	});
};

export default component$(() => {
	return (<div id="site-content">
		<header id="site-header"></header>
		<main id="site-main" class="relative">
			<BackgroundWindow />
			<BackgroundPage /> 
			<Slot />
		</main>
		<footer id="site-footer"></footer>
	</div>);
});
