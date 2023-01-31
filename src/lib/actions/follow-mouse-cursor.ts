type Deps = { container: HTMLElement; destroyOn: boolean };

export const followMouseCursor = (node: HTMLDivElement, deps: Deps) => {
	const handleMouseMove = (e: MouseEvent) => {
		node.dispatchEvent(new CustomEvent('mousemove_container', { detail: e }));
	};
	return {
		update(deps: Deps) {
			if (!deps.destroyOn) {
				deps.container.addEventListener('mousemove', handleMouseMove);
			}
			if (deps.destroyOn) {
				deps.container.removeEventListener('mousemove', handleMouseMove);
			}
		}
	};
};
