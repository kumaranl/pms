sap.ui.define(	["sap/ui/core/mvc/Controller"], function(Controller) 
{
	"use strict";

	return Controller.extend("com.customdev.pms.controller.timecomparison", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.customdev.pms.view.view.timecomparison
		 */
		onInit: function() {
		var sUrl = "http://localhost:3000//timecomparisons";
		
//		var sUrlm = "model/mock1_data.json";
		
		jQuery.ajax({
			type    : "GET",
			dataType: "json",
			url     : sUrl,
			context : this,	
			error   : function(jqXHR, textStatus, errorThrown) {
				var sMessage = jqXHR.status + " " + jqXHR.statusText + " " + jqXHR.responseText;
				jQuery.sap.log.error("Data loading", sMessage, "index.html");
				sap.m.MessageToast.show(sMessage);
				},
		    success : function(oData_time, textStatus, jqXHR) {
				if (oData_time === null || oData_time === undefined) {
					var sMessage = "WARNING. Received a null or undefined response object.";
					 jQuery.sap.log.warning("Data loading", sMessage, "index.html");
					 sap.m.MessageToast.show(sMessage);
					 return;
				}			
				
		var oModel1 = new sap.ui.model.json.JSONModel(oData_time);
		oModel1.setSizeLimit(5000);
        var oTable1 = this.byId("timecomptable");
	     oTable1.setModel(oModel1);
    		}
	});
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.customdev.pms.view.view.timecomparison
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.customdev.pms.view.view.timecomparison
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.customdev.pms.view.view.timecomparison
		 */
		//	onExit: function() {
		//
		//	}

	});

});