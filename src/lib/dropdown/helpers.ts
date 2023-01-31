export const calcCoordinates = (e: CustomEvent, container: HTMLElement) => {
	return [
		e.detail.clientX + window.scrollX - container.offsetLeft,
		e.detail.clientY + window.scrollY - container.offsetTop
	];
};
