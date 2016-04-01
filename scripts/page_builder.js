jQuery.fn.extend({
	buildBAse: function() {
		$(".base").append($("<div/>", {
			"class" : "base-layout"
		})
			.append($("<div/>", {
				"class" : "layout"
			})
				.append($("<div/>", {
					"class" : "header",
					"id"    : "header"
				}))
				.append($("<div/>", {
					"class" : "nav",
					"id"    : "nav"
				}))
				.append($("<div/>", {
					"class" : "section",
					"id"    : "section"
				}))
				.append($("<div/>", {
					"class" : "footer",
					"id"    : "footer"
				}))
			)
		);
	},
    bindClick: function(elementId, functionToExecute) {
    	$("#"+elementId).click(function() {
    		functionToExecute;
    	});
    },
    bindHover: function(elementId, functionToExecute) {
    	$("#"+elementId).hover(function() {
    		functionToExecute;
    	});
    },
    bindKeyPress: function(elementId, functionToExecute) {
    	$("#"+elementId).keypress(function() {
    		functionToExecute;
    	});
    },
    bindKeyUp: function(elementId, functionToExecute) {
    	$("#"+elementId).keyup(function() {
    		functionToExecute;
    	});
    },
    bindKeyDown: function(elementId, functionToExecute) {
    	$("#"+elementId).keydown(function() {
    		functionToExecute;
    	});
    },
});

$(function() {
	jQuery.fn.buildBAse();
});