// import React from "react";
// import ReactDOM from "react-dom";
//
// const Example = () => <div id="example"></div>;
//
// ReactDOM.render(<Example />, document.getElementById("root"));

// console.log(this);

window.countRemainingChars = (function countRemainingChars() {
    var target = event.target;
    var charLength = event.target.value.length;
    var maxLength = 255;
    var countDiv = target.nextElementSibling;

    if (charLength > maxLength ) {
        event.preventDefault();
    } else {
        var newCount = maxLength - charLength;
        countDiv.innerHTML = newCount;
    }
});

window.sendCorporateInquiryToKustomer = (function sendCorporateInquiryToKustomer() {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var numberOfUnits = Number.parseInt(document.getElementById("product-units").value);
    var products = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                        .map(function(check) {
                                            if (check.name !== "other-product") {
                                                debugger;
                                                return check.value;
                                            } else {
                                                debugger;
                                                return  document.getElementById("product-text-input").value;
                                            }
                                        });
    var message = document.getElementById("corporate-gift-inquiry-msg").value;

    var corporateInquiryData = {
        email: email,
        numberOfUnits: numberOfUnits
    };

    if (products.length > 0 ) corporateInquiryData.products = products;
    if (message.length > 0 ) corporateInquiryData.message = message;

    var corporateInquiryDataJSON = JSON.parse(JSON.stringify(corporateInquiryData));
    console.log(corporateInquiryDataJSON);
    debugger;

    var httpRequest = new XMLHttpRequest();

    // DELETE THIS BLOCK-->here to check response from kustomer
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                console.log(httpRequest.response);

                // hide form
                // show success message
            } else {
                // hide form
                // show error message
            }
        }
    };

    var kustomerHookURL = "https://api.kustomerapp.com/v1/hooks/form/58913f53edbcf61100e500bb/18efae7e8a03b83bf7239077293caf3abb8e1c928e6c46a8dea06500cd9a832b";
    httpRequest.open("POST", kustomerHookURL);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send(corporateInquiryDataJSON);

    // Show validation

    form.reset();
});

var corporateOrdersForm = new VarienForm("corporate-gift-form", true);

window.validateAndSubmitForm = (function validateAndSubmitForm() {
    if (corporateOrdersForm.validator.validate()) {
        alert("Validation worked!");
        // submit to kustomer
    } else {
        alert("Validation failed");
    }
});
