

//Digital Delivery service
var serDigital = '#ctl00_cphMainContent_ucDeliveryMethodSelection_ucMailingServiceSelection_radlstMailingServices_0';
//Pickup Delivery Method service
var serPickup = '#ctl00_cphMainContent_ucDeliveryMethodSelection_ucMailingServiceSelection_radlstMailingServices_1';
//Standard (marketing) mailing service
var serStandard = '#ctl00_cphMainContent_ucDeliveryMethodSelection_ucMailingServiceSelection_radlstMailingServices_2';
//1st Class mailing service
var ser1stClass = '#ctl00_cphMainContent_ucDeliveryMethodSelection_ucMailingServiceSelection_radlstMailingServices_3';

$(document).ready(function () {
    if (window.location.href.indexOf("OrderFinalStep.aspx") >= 0) {

        var useMailing = $('#use_mailing').parent().parent().parent().find("select").val();
        var currentEmail = xmp.sdk.storeFrontParams.currentUser.email.toLowerCase();


        //hide delivery properties
        $('#use_1stClMa').parent().parent().parent().parent().hide();
        $('#use_StdMa').parent().parent().parent().parent().hide();

        delPropControl();
        $("[id^=ctl00_cphMainContent_ucDeliveryMethodSelection_ucMailingServiceSelection_radlstMailingServices_]").on("click", function () {
            //hidden pricing option control
            delPropControl();
        });
        //reset prop if shipping
        $('#ctl00_cphMainContent_ucDeliveryMethodSelection_radDeliveryShipping').on("click", function () {
            delPropControl();
        });
        //reset prop if mail
        $('#ctl00_cphMainContent_ucDeliveryMethodSelection_radDeliveryMailing').on("click", function () {
            delPropControl();
        });

        if (useMailing == 'yes') {
            //all mailing employed, display all mailing options by default
            $("#ctl00_cphMainContent_ucDeliveryMethodSelection_trMailingServiceSelection").parent()
                .append(
                    '<p id="_medMail" style="display:none;color:red;">Standard Mail: 2-12 business days*</p><p id="_firMail" style="display:none;color:red;">First Class Mail: 1-5 business days*</p><p style="color:red;">*The USPS does not guarantee delivery times for any of these services.</p>'
                );
            $(serStandard).on("click", function () {
                //Standard (marketing) mailing
                $("#_medMail").show();
                $("#_firMail").hide();
            });
            $(ser1stClass).on("click", function () {
                //1st Class mailing
                $("#_firMail").show();
                $("#_medMail").hide();
            });

            if ($(serStandard).is(':checked') || $(ser1stClass).is(':checked')) {
                //leave as is 
            } else {
                $(serStandard).click();
            }

            $(serDigital).parent().parent().hide();
            $(serPickup).parent().parent().hide();

            $(serStandard).parent().parent().show();
            $(ser1stClass).parent().parent().show();

        } else if (useMailing == 'no') {
            //mailing isn't used by default in product, hide all besides possible option for pickup
            $(serStandard).parent().parent().hide();
            $(ser1stClass).parent().parent().hide();

        } else if (useMailing == 'download') {
            //digital mailing only
            $(serStandard).parent().parent().hide();
            $(ser1stClass).parent().parent().hide();
            $(serPickup).parent().parent().hide();

            $(serDigital).click();

        } else if (useMailing == 'standard') {
            //standard mailing only
            $(serDigital).parent().parent().hide();
            $(ser1stClass).parent().parent().hide();
            $(serPickup).parent().parent().hide();

            $(serStandard).click();

        } else if (useMailing == 'pickup') {
            //pickup mailing only
            $(serStandard).parent().parent().hide();
            $(ser1stClass).parent().parent().hide();
            $(serDigital).parent().parent().hide();

            $(serPickup).click();

            $('#ctl00_cphMainContent_ucDeliveryMethodSelection_trDeliveryMethodMailing label').html('Local Pickup');
            $('#ctl00_cphMainContent_ucDeliveryMethodSelection_trMailingServiceSelection').hide();

            if (
                currentEmail == "burley@realdeals.net".toLowerCase()
                || currentEmail == "twinfalls@realdeals.net".toLowerCase()
                || currentEmail == "idahofalls@realdeals.net".toLowerCase()
                || currentEmail == "Pocatello@realdeals.net".toLowerCase()
                || currentEmail == "rexburg@realdeals.net".toLowerCase()
                || currentEmail == "admin@uStoreDomain.com".toLowerCase()
            ) {
                //leave as is 
            } else {
                //hide Pickup Delivery Method
                $(serPickup).parent().parent().parent().hide();
                if ($(serPickup).is(':checked')) {
                    $(serStandard).click();
                }
                $('#ctl00_cphMainContent_ucDeliveryMethodSelection_trDeliveryMethodMailing').hide();
                $('#ctl00_cphMainContent_ucDeliveryMethodSelection_trMailingServiceSelection').hide();

            }

        } else {
            //neither yes or no in property - log it
            console.log('mailing use undefined');

        }


        if ($('#ctl00_cphMainContent_ucDeliveryMethodSelection_trDeliveryMethodShipping').css('display') == 'none') {
        } else {
            $('#ctl00_cphMainContent_trDeliveryMethod>td').append(
                '<br/><img style="background-color: lightgrey;width:800px;" src="http://us000.agstorefront.com/uStore/Images/host/pictures/shipping-map.gif">'
            );
        }
    }

    if (window.location.href.indexOf("CheckoutFinal.aspx") >= 0) {
        $('#ctl00_cphMainContent_divShippingItems').append('<br /><img style="background-color: lightgrey;width:800px;" src="http://us000.agstorefront.com/uStore/Images/host/pictures/shipping-map.gif">')
    }

});

function delPropControl() {
    var useMailing = $('#use_mailing').parent().parent().parent().find("select").val();

    //check and set what status of hidden delivery properties should be
    if ($('#ctl00_cphMainContent_ucDeliveryMethodSelection_radDeliveryMailing').is(':checked') && $(serStandard).is(':checked')) {
        $('#use_1stClMa').parent().parent().parent().find("select").val("no");
        $('#use_StdMa').parent().parent().parent().find("select").val("yes");
    } else if ($('#ctl00_cphMainContent_ucDeliveryMethodSelection_radDeliveryMailing').is(':checked') && $(ser1stClass).is(':checked')) {
        $('#use_1stClMa').parent().parent().parent().find("select").val("yes");
        $('#use_StdMa').parent().parent().parent().find("select").val("no");
    } else if (useMailing == 'pickup') {
        $('#ctl00_cphMainContent_ucDeliveryMethodSelection_trMailingServiceSelection').hide();
    } else {
        $('#use_1stClMa').parent().parent().parent().find("select").val("no");
        $('#use_StdMa').parent().parent().parent().find("select").val("no");
    }
}