export const calcCoordinates = (e: MouseEvent, container: HTMLElement) => {
	return [
		e.clientX + window.scrollX - container.offsetLeft,
		e.clientY + window.scrollY - container.offsetTop
	];
};
