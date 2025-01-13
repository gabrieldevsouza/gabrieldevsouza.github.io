import { component$ } from '@builder.io/qwik';

export const BackgroundWindow = component$(() => {
	return <div class="
		fixed

		inset-0 /* ensures top-0, right-0, bottom-0, left-0 */
		w-full
		h-full

        z-[-1]

        bg-slate-600 
		
        pointer-events-none
		opacity-50
	">
		<img
			width={1920}
			height={1080}
			src="/imgs/test-1080p-1.png"
			class="w-full h-full"
		/>
	</div>
});