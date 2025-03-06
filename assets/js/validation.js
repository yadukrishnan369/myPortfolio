$(document).ready(function () {
    $("#contact-form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            }, email: {
                required: true,
                email: true
            }, comment: {
                required: true,
                minlength: 2
            }
        },
        messages:{
            name:{
                required:"Enter your name",
                minlength:"Enter atleast 2 characters"
            }, email:{
                required:"Enter your Email",
                email:"Enter valid Email"
            }, comment:"Enter your Message",
                minlength:"Enter atleast 2 characters"
        },
        submitHandler: function (form) {
            alert("Contact Form is Submitting...");
            form.submit();
        }

    })
})