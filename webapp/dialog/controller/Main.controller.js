sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.dialog.controller.Main", {

		onOpenDialog: function() {
			if (sap.training.dialog.Component.getMetadata().getConfig().displayDialog) {
				this.getOwnerComponent().helloDialog.open(this.getView());
			}
		}

	});

});