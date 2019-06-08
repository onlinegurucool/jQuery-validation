$(window).on('load',function(){
    $('.check-form').validate({
        errorElement: `span`
    })

    $('[required="required"]').each(function(){
        $(this).rules("add",{
            required : true,
            messages:  {
                required :function (param,input) {
                    return `${$(input).prev('label').text()} is required`
                }
            }
        })
    })

    $('[data-validate="email"]').each(function(){
        $(this).rules("add",{
            email: true,
            messages: {
                email: function (param,input) {
                    console.log(input)
                    return `${input.name} is required`
                }
            }
        })
    })


})