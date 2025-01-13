import { component$ } from '@builder.io/qwik';

export const BackgroundPage = component$(() => {
	return (
		<div class="
			absolute
			top-0 left-0
			w-full
			h-full
			z-[-1]
			pointer-events-none
			opacity-50
		"
		>
<img
	width={1920}
	height={1080}
	src="/imgs/test-1080p-2.jpg"
	class="
		w-full
		h-full
	"
/>
		</div>
	);
});
