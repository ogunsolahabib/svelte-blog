// Container.d.ts

/// <reference types="svelte" />

export interface ContainerProps {
	// Define the props of your component here
	class?: string;
	$$restProps?: { [key: string]: any };
	// ...
}

export default class Container extends SvelteComponentTyped<ContainerProps, {}, {}> {}
