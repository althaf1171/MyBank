sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("mybank.controller.Main", {
            onInit: function () {
                debugger
                var appLang;
                if (navigator.language == 'hi') {
                    appLang = "i18n_he";

                } else if (navigator.language == 'en') {
                    appLang = "i18n";
                } else {
                    appLang = "i18n";

                }

                var i18nModel = this.getOwnerComponent().getModel(appLang);
                this.getOwnerComponent().setModel(i18nModel, "i18n");

            },

            onOpenBankDetails: function () {

                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(

                        { name: "mybank.view.Fragments.MoreDetails" }

                    );
                }

                this.moreBankDetails.then(

                    function (oDialog) {
                        oDialog.open();

                    });

            },

            onCloseBtn: function () {
                this.byId("idMoreDetails").close();
            }
        });
    });
