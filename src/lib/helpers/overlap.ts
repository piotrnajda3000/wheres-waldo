export const overlap = (a: DOMRect, b: DOMRect) => {
	return !(a.right < b.left || a.left > b.right || a.bottom < b.top || a.top > b.bottom);
};
