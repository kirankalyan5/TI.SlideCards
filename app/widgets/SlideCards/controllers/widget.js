var args = arguments[0];
var scrollView = $.heroContainer;
var cards = args.cards;
var style = args.style;

(function() {
	/***************************************************************************
	 * @method _style
	 * @desc contains style for each elements
	 */
	var _style = {
		heroContainer : $.createStyle({
			classes : [ 'heroContainer' ]
		})
	};

	// Apply Configured Styles
	var _applyConfigStyles = function(options) {
		var style = {
			height : options.height || Ti.UI.SIZE,
			width : options.width || Ti.UI.FILL
		};

		scrollView.setHeight(style.height);
		scrollView.setWidth(style.width);
	};

	// Create _buildCards
	var _buildCards = function(cards, style) {
		var cardStyle = {
			height : style.child ? style.child.height : undefined,
			width : style.child ? style.child.width : undefined
		};
		var spacing = style.spacing || [ "10dp", "10dp" ];
		var offsetHeight = parseInt(spacing[0].replace(/\D/g, ''));
		var offsetWidth = parseInt(spacing[1].replace(/\D/g, ''));
		var height = cardStyle.height ? cardStyle.height
				: parseInt(style.height.replace(/\D/g, ''))
						- (offsetHeight * 2);
		var width = cardStyle.width ? cardStyle.width : parseInt(style.width
				.replace(/\D/g, ''))
				- (offsetWidth * 2);

		// Iterate and build the card block
		_.each(cards, function(card) {
			var panel = Ti.UI.createView({
				height : height + "dp" || Ti.UI.SIZE,
				width : width + "dp" || Ti.UI.SIZE,
				top : "10dp",
				left : "10dp",
				right : "10dp",
				bottom : "10dp",
				backgroundColor : "#9AAC6A"
			});
			var closeLabel = Ti.UI.createLabel({
				text : "X",
				right : "15dp",
				top : "5dp"

			});
		
			
			card.childView.add(closeLabel);
			panel.add(card.parentView);
			panel.add(card.childView);
			scrollView.add(panel);
			card.parentView.addEventListener('click', function() {
				var animation = Ti.UI.createAnimation({
					left : 300,
					visible : true,
					duration : "5000",
					delay : 5000
					
					
					
					
				});
				card.childView.animate(animation);
                panel.width = "700dp";

			});
			closeLabel.addEventListener('click', function() {
				card.childView.visible = false;
                panel.width = "300dp";
			});

		});

	};

	// Initialize Method
	var init = function() {
		_applyConfigStyles(style);
		_buildCards(cards, style);
	};

	// initialize the widget
	init();

}());