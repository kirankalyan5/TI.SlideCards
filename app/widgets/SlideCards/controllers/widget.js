var args = arguments[0];
var scrollView = $.heroContainer;
var cards = args.cards;
var style = args.style;

(function() {
	/***************************************************************************
	 * @method _applyConfigStyles
	 * @desc applies style for globals elements
	 */

	// Apply Configured Styles
	var _applyConfigStyles = function(options) {
		var style = {
			height : options.height || Ti.UI.SIZE,
			width : options.width || Ti.UI.FILL
		};

		scrollView.setHeight(style.height);
		scrollView.setWidth(style.width);
	};
	/***************************************************************************
	 * @method _buildCard
	 * @desc Builds the parent and the child cards.
	 */
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

			var panelWidth = parseInt(card.parentView.getWidth().replace(/\D/g,
					''))
					+ parseInt(card.childView.getWidth().replace(/\D/g, ''));
			var childCardLeft = parseInt(card.parentView.getWidth().replace(
					/\D/g, ''))
					- parseInt(card.childView.getWidth().replace(/\D/g, ''));
			card.childView.setVisible(false);
			card.childView.setLeft(childCardLeft);
			card.parentView.setLeft(0);
			card.childView.setZIndex(0);
			card.parentView.setZIndex(1);

			panel.setWidth(parseInt(card.parentView.getWidth().replace(/\D/g,
					'')));
			console.log(panel.getWidth());
			// animate the child view to slide left: open
			var animateChildOpen = Ti.UI.createAnimation({
				left : card.parentView.getWidth(),
				duration : 800
			});
			// animate the child view to slide right: close
			var animateChildClose = Ti.UI.createAnimation({
				left : childCardLeft + "dp",
				duration : 800
			});
			// animate panel width
			var animatePanelExpand = Ti.UI.createAnimation({
				width : panelWidth,
				duration : 800
			});
			card.childView.add(closeLabel);
			panel.add(card.parentView);
			panel.add(card.childView);
			scrollView.add(panel);

			card.parentView.addEventListener('click', function() {
				card.childView.setVisible(true);
				card.childView.animate(animateChildOpen);
				panel.animate(animatePanelExpand, function() {
				});

			});
			closeLabel.addEventListener('click', function() {

				card.childView.animate(animateChildClose, function() {
					panel.setWidth(card.parentView.getWidth());
					card.childView.setVisible(false);
				});

			});

		});

	};

	/***************************************************************************
	 * @method init
	 * @desc initialize the sliderCards
	 */
	var init = function() {
		_applyConfigStyles(style);
		_buildCards(cards, style);
	};

	// initialize the widget
	init();

}());