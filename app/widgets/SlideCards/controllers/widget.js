var args = arguments[0];
var cards = args.cards;

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
	
	//Create _buildCards
	var _buildCards = function (cards) {
		console.log(cards);
	};
	
	//Initialize Method
	var init = function () {
		_buildCards(cards);
	};
	
	//initialize the widget
	init();

}());