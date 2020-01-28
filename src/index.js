// import React from "react";
// import ReactDOM from "react-dom";
//
// const Example = () => <div id="example"></div>;
//
// ReactDOM.render(<Example />, document.getElementById("root"));


window.countRemainingChars = (function countRemainingChars() {
    var target = document.getElementById("corporate-gift-inquiry-msg");
    var charLength = target.value.length;
    var maxLength = 255;
    var countDiv = target.nextElementSibling;

    if (charLength > maxLength ) {
        event.preventDefault();
    } else {
        var newCount = maxLength - charLength;
        countDiv.innerHTML = newCount;
    }
});

Validation.defaultOptions.immediate = true;
var corporateOrdersForm = new VarienForm("corporate-gift-form", true);
var corporateOrdersFormDOMElement = document.getElementById("corporate-gift-form", true);
Validation.defaultOptions.immediate = true; // Set to false after binding to not disrupt validation for other forms on page

// Disable Safari's native validation popup
document.addEventListener('invalid', (function() {
    return function(e) {
        e.preventDefault();
    };
})(), true);

corporateOrdersFormDOMElement.addEventListener("submit", (function(event) {
    event.preventDefault();
}));

window.hideForm = (function hideForm() {
    corporateOrdersFormDOMElement.style.display = "none";
});

window.sendInquiryToKustomer = (function sendInquiryToKustomer() {
    event.preventDefault();

    if(corporateOrdersForm.validator.validate()) {
        var email = document.getElementById("corporate-email-contact").value;
        var numberOfUnits = Number.parseInt(document.getElementById("product-units").value);
        var products = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(function (check) {
                if (check.name !== "other-product") {
                    return check.value;
                } else {
                    return document.getElementById("product-text-input").value;
                }
            });
        var message = document.getElementById("corporate-gift-inquiry-msg").value;

        var corporateInquiryData = {
            email: email,
            numberOfUnits: numberOfUnits
        };

        if (products.length > 0) corporateInquiryData.products = products;
        if (message.length > 0) corporateInquiryData.message = message;

        var corporateInquiryDataJSON = JSON.stringify(corporateInquiryData);

        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                    hideForm();
                    document.querySelector(".success-alert").style.display = "block";
                } else {
                    hideForm();
                    document.querySelector(".error-alert").style.display = "block";
                }
            }
        };

        httpRequest.onerror = (function (request) {
            hideForm();
            document.querySelector(".error-alert").style.display = "block";
        });

        var kustomerHookURL = "https://api.kustomerapp.com/v1/hooks/form/58913f53edbcf61100e500bb/18efae7e8a03b83bf7239077293caf3abb8e1c928e6c46a8dea06500cd9a832b";
        httpRequest.open("POST", kustomerHookURL);
        httpRequest.setRequestHeader('Content-Type', 'application/json');
        httpRequest.send(corporateInquiryDataJSON);
    }
});
