let blocks = document.getElementsByClassName('item');
let container = document.getElementsByClassName('container');
let hs = new HorizontalScroll.default({
	blocks : blocks,
	container: container,
    isAnimated: true,
    springEffect: .8,
    skwReducer: 30
});