//Instantiate slideCards
var slideCards = Alloy.createWidget("SlideCards", {
	cards : [ {
		parentView: "",
		childView: ""
	} ],
	style : {
		height: "400dp",
		width: "300dp",
		spacing: ["10dp", "10dp"] //top/bottom, left/right
	}
});

$.container.add(slideCards.getView());
$.container.open();
