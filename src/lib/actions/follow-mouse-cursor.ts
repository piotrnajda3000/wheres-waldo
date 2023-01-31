export const followMouseCursor = (node: HTMLDivElement, container: HTMLElement) => {
	const handleMouseMove = (e: MouseEvent) => {
		node.dispatchEvent(new CustomEvent('mousemove_container', { detail: e }));
	};
	container.addEventListener('mousemove', handleMouseMove);
	return {
		destroy() {
			container.removeEventListener('mousemove', handleMouseMove);
		}
	};
};
