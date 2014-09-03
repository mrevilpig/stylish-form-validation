$(document).ready(function () {

    // initialize tooltipster on text input elements
    $('#myform input[type="text"]').tooltipster({
        trigger: 'custom',
        onlyOne: false,
        position: 'top'
    });

    // initialize validate plugin on the form
    $('#myform').validate({
        errorPlacement: function (error, element) {

            var lastError = $(element).data('lastError'),
                newError = $(error).text();

            $(element).data('lastError', newError);

            if(newError !== '' && newError !== lastError){
                $(element).tooltipster('content', newError);
                $(element).tooltipster('show');
            }
        },
        success: function (label, element) {
            $(element).tooltipster('hide');
        },
        rules: {
            field1: {
                required: true,
                email: true
            },
            field2: {
                required: true,
                minlength: 5
            }
        },
        submitHandler: function (form) { // for demo
            alert('valid form');
            return false;
        }, highlight: function(element) {
            $(element).addClass('error');
            $(element.form).find("label[for=" + element.id + "]").addClass('errorLabel');
        }, unhighlight: function(element) {
            $(element).removeClass('error');
            $(element.form).find("label[for=" + element.id + "]").removeClass('errorLabel');
        }
    });
});
