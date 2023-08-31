


$(document).ready(function () {
    if (window.location.href.indexOf("CheckoutFinal.aspx") >= 0) {
        $('#ctl00_cphMainContent_divShippingItems').append('<br /><img style="background-color: lightgrey;width:800px; display: flow;padding-top: 1em;" src="http://us000.agstorefront.com/uStore/Images/host/pictures/shipping-map.gif">')
    }
    if (window.location.href.indexOf("OrderFinalStep.aspx") >= 0) {
        $('#ctl00_cphMainContent_trDeliveryMethod').append('<br /><img style="background-color: lightgrey;width:800px; display: flow;padding-top: 1em;" src="http://us000.agstorefront.com/uStore/Images/host/pictures/shipping-map.gif">');
        $('#ctl00_cphMainContent_trDeliveryMethod').css('display', 'flex');
        $('#ctl00_cphMainContent_trDeliveryMethod').css('flex-direction', 'column');
    }
});
