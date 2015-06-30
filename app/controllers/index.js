//Instantiate slideCards
var slideCards = Alloy.createWidget("SlideCards", {
	cards : [ {
		parentView : Ti.UI.createView({
			left : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "red"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "yellow"
		})
	}, {
		parentView : Ti.UI.createView({
			left : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "red"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "yellow"
		})
	}, {
		parentView : Ti.UI.createView({
			left : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "pink"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "yellow"
		})
	},
	{
		parentView : Ti.UI.createView({
			left : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "pink"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "yellow"
		})
	},
	{
		parentView : Ti.UI.createView({
			left : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "pink"
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "30dp",
			width : "30dp",
			backgroundColor : "yellow"
		})
	}],
	style : {
		height : "400dp",
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
