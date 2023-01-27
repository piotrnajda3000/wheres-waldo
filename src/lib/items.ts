export const items = [
	{
		name: 'The Blue Dot',
		src: 'the-blue-dot.png',
		x: 376,
		y: 582,
		width: 22,
		height: 22
	},
	{
		name: 'A ball of paper',
		src: 'a-ball-of-paper.png'
	},
	{
		name: 'A scrap of paper',
		src: 'a-scrap-of-paper.png'
	},
	{
		name: '2nd ball of paper',
		src: 'a-ball-of-paper-2.png'
	}
];

export const calcItemRect = (item) => {
	const { x, y, width, height } = item;

	return {
		top: y,
		right: x + width,
		bottom: y + height,
		left: x
	};
};
