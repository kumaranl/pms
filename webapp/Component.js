sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/Device",
	"com/customdev/pms/model/models"
], function(UIComponent, Device, models,ResourceModel) {
	"use strict";

	return UIComponent.extend("com.customdev.pms.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
	//		this.setModel(models.createDeviceModel(), "device");
						// create the views based on the url/hash
			this.getRouter().initialize();
			
//			var i18nModel = new ResourceModel({bundleName :com.customdev.pms.i18n.i18n });
//			this.setModel(i18nModel, "i18n");
			
		}
	});
});