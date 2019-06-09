$(window).on('load',function(){
    $('.check-form').validate({
        errorElement: `span`,
        errorClass: `text-danger`,
        submitHandler: function(form) {
            // find button 
            let button = $(form).find('button');
            button.prepend(`<i class="fa fa-spin fa-sync-alt"></i>`).attr("disabled","disabled").addClass('btn-secondary')
            setTimeout(() => {
                form.submit();
            }, 4000);
        }
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