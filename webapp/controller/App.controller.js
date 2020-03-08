sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";
	
    //var linktourl = this.getView().getModel("i18n").getResourceBundle().getText("urlemp");

	
	return Controller.extend("com.customdev.pms.controller.App", {

	onInit: function() {

	//	var sUrl = "model/mock_data.json";
		var sUrl1 = "http://localhost:3000/employees/";
		
		jQuery.ajax({
			type    : "GET",
			dataType: "json",
			url     : sUrl1,
			context : this,	
			error   : function(jqXHR, textStatus, errorThrown) {
				var sMessage = jqXHR.status + " " + jqXHR.statusText + " " + jqXHR.responseText;
				jQuery.sap.log.error("Data loading", sMessage, "index.html");
				sap.m.MessageToast.show(sMessage);
				},
		    success : function(oData, textStatus, jqXHR) {
				if (oData === null || oData === undefined) {
					var sMessage = "WARNING. Received a null or undefined response object.";
					 jQuery.sap.log.warning("Data loading", sMessage, "index.html");
					 sap.m.MessageToast.show(sMessage);
					 return;
				}			
				
		var oModel = new sap.ui.model.json.JSONModel(oData);
        var oTable = this.byId("emptable");
	     oTable.setModel(oModel);
    		}
	});
	},
	onNavToHome: function () {
			//this.getRouter().navTo("Home");
			this.getRouter().navTo("home");
		},
	onNavToTimeComp: function () {
			//this.getRouter().navTo("Home");
			this.getRouter().navTo("timecomp");
		},	
	getRouter: function () {
			return this.getOwnerComponent().getRouter();
		}
	});
});