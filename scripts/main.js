$(window).on("load", function() {
    $(".check-form").validate({
        errorElement: `span`
    });

    $('[required="required"]').each(function() {
        $(this).rules("add", {
            required: true,
            messages: {
                required: function(param, input) {
                    return `${$(input)
                        .prev("label")
                        .text()} is required`;
                }
            }
        });
    });

    $('[data-validate="email"]').each(function() {
        $(this).rules("add", {
            email: true,
            messages: {
                email: function(param, input) {
                    console.log(input);
                    return `${input.name} is required`;
                }
            }
        });
    });

    $('[data-validate="mobileNumber"]').each(function() {
        // custom rules for checking mobile

        jQuery.validator.addMethod("mobileLengthValidation", function(
            value,
            element
        ) {
            let length = value.length;
            if (!value) {
                return true;
            } else {
                if (length == 10) {
                    // validating for length 10
                    return true;
                } else if (length == 11 && value[0] == 0) {
                    // validating 11 number and first digit 0
                    return true;
                }
            }
        });

        jQuery.validator.addMethod("addressType", function(value, element) {
            var addressValue = $('[name="address_type"]').val();
            if (!addressValue) {
                return false;
            } else {
                switch (addressValue) {
                    case "home":
                        if (!value) {
                            return false;
                        } else {
                            return true;
                        }
                        break;
                    case "office":
                        return true;
                        break;
                    default:
                        return false;
                        break;
                }
            }
        });

        $(this).rules("add", {
            addressType: true,
            mobileLengthValidation: true,
            messages: {
                mobileLengthValidation: function(param, element) {
                    var value = $(element).val();
                    var length = value.length;
                    if (length < 10) {
                        return `Mobile number should be min 10 numbers`;
                    } else if (length == 11 && value[0] != 0) {
                        return `Invalid Mobile! You might missing first number 0`;
                    } else if (length > 11) {
                        return `Mobile length is too long`;
                    } else {
                        return `Mobile number is required`;
                    }
                },
                addressType: function(param, element) {
                    var value = $(element).val();
                    var addressValue = $('[name="address_type"]').val();
                    if (!addressValue) {
                        return `Please select address type to continue`;
                    } else {
                        switch (addressValue) {
                            case "home":
                                if (!value) {
                                    return `This field is required`;
                                }
                                break;
                            default:
                                return `Something went wrong`;
                                break;
                        }
                    }
                }
            }
        });
    });
});

let learn = (code) => repeat;
