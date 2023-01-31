export const containerClick = (node: HTMLElement, container: HTMLElement) => {
	const handleContainerClick = (e: MouseEvent) => {
		node.dispatchEvent(new CustomEvent('click_container', { detail: e }));
	};
	container.addEventListener('click', handleContainerClick);
	return {
		destroy() {
			container.removeEventListener('click', handleContainerClick);
		}
	};
};
