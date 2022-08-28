(function () {

    const formAlert = $('<div class="form-alert"></div>');

    $(".contact form").on('submit', function(e){
        e.preventDefault();

        $(".required", this).each(function(index, input){

            if($(input).val().trim() == "") {
                $(input).addClass("form-highlight");
                let msgFail = "Please complete form"
                formAlert.text(msgFail).removeClass("form-success").addClass("form-attention")
                $(".contact form").append(formAlert)
                $('.form-alert').show(100)
            } else {
                $(input).removeClass("form-highlight");
                let msgSucess = "Form sucessfully sent"
                formAlert.text(msgSucess).removeClass("form-attention").addClass("form-success")
                $(".contact form").append(formAlert)
                $('.form-alert').show()
                $(input).val('')
            }
        });
    })

    $("form").on('click', '.form-alert', function() {
        $('.form-alert').hide()
    }) 

    $("form").on('click','input, textarea', function() {
        $(this).removeClass("form-highlight");
    });

})();