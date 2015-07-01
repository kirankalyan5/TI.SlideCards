//Instantiate slideCards
var slideCards = Alloy.createWidget("SlideCards", {
	cards : [ {
		parentView : Ti.UI.createView({
			left : 10,
			height : "450dp",
			width : "300dp",
			backgroundColor : "#C69E40",
			
			
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "#616B42",
			
		})
	},{
		parentView : Ti.UI.createView({
			left : 10,
			height : "450dp",
			width : "300dp",
			backgroundColor : "#BA6C41",
			
			
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "#616B42",
			
		})
	},{
		parentView : Ti.UI.createView({
			left : 10,
			height : "450dp",
			width : "300dp",
			backgroundColor : "#0D8F97",
			
			
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "#616B42",
			
		})
	},{
		parentView : Ti.UI.createView({
			left : 10,
			height : "450dp",
			width : "300dp",
			backgroundColor : "#FFFFFF",
			
			
		}),
		childView : Ti.UI.createView({
			right : 0,
			height : "450dp",
			width : "0dp",
			backgroundColor : "#616B42",
			
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
