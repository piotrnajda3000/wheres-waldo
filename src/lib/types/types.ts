export type ClickEvent<Element extends HTMLElement> = MouseEvent & {
	currentTarget: EventTarget & Element;
};
