//Instantiate slideCards
var slideCards = Alloy.createWidget("SlideCards", {
	cards : [ {
		parentView: "",
		childView: ""
	} ]
});

$.container.add(slideCards.getView());
$.container.open();
