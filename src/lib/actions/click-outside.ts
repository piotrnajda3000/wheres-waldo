export const clickOutside = (node: HTMLDivElement, onClickOutside: () => void) => {
	const handleClick = (e: MouseEvent) => {
		if (node.contains(e.target as Node)) return;
		onClickOutside();
	};
	document.addEventListener('click', handleClick, true);
	return {
		destroy() {
			document.removeEventListener('click', handleClick);
		}
	};
};
