$(window).on('load',function(){
    $('.check-form').validate({
        errorElement: `span`,
        rules: {
            first_name: {
                required: true,
                number: true,
            },
            last_name: {
                required: true,
                number: true,
            },
            mobile: {
                required: true,
                number: true,
            },
            email: {
                required: true,
                email: true,
            }
        }
    })
})