//Instantiate slideCards
var slideCards = Alloy.createWidget("SlideCards", {
	cards : [ {
		parentView : Ti.UI.createView({
			left : 0,
			height : "450dp",
			width : "300dp",
			backgroundColor : "red"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "yellow"
		})
	}, {
		parentView : Ti.UI.createView({
			left : 0,
			height : "450dp",
			width : "300dp",
			backgroundColor : "red"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "yellow"
		})
	},{
		parentView : Ti.UI.createView({
			left : 0,
			height : "450dp",
			width : "300dp",
			backgroundColor : "red"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "yellow"
		})
	}],
	style : {
		height : "500dp",
		width : "800dp",
		child : {
			//height : "200dp",
			width : "300dp"
		},
		spacing : [ "10dp", "10dp" ] // top/bottom, left/right
	}
});

$.container.add(slideCards.getView());
$.container.open();
