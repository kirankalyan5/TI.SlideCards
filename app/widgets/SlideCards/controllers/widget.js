var args = arguments[0];
var scrollView = $.heroContainer;
var cards = args.cards;
var style = args.style;

(function() {
	/***
	 * @method _style
	 * @desc contains style for each elements
	 */
	var _style = {
		heroContainer : $.createStyle({
			classes : [ 'heroContainer' ]
		})
	};
	
	//Apply Configured Styles
	var _applyConfigStyles = function (options) {
		var style = {
			height: options.height || Ti.UI.SIZE,
			width: options.width || Ti.UI.FILL
		};
		
		scrollView.setHeight(style.height);
		scrollView.setWidth(style.width);
	};
	
	//Create _buildCards
	var _buildCards = function (cards) {
		console.log(cards);
	};
	
	//Initialize Method
	var init = function () {
		_applyConfigStyles(style);
		_buildCards(cards);
	};
	
	//initialize the widget
	init();

}());