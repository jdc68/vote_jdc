$(document).ready(function() {
    $btn = $('#vote-btn')
    $('#yes').click(() => {
        $btn.css({
            transform: 'translateX(-50%)',
            left: '50%',
            top: '66%'
        })
        $btn.attr('form', 'form1');
        $btn.prop('disabled', false)
    })
    $('#no').click(() => {
        $btn.attr('form', '');
        $btn.prop('disabled', false)
    })
    $btn.hover(function() {
        moveButton()
    }, function() {
        return
    })

    $btn.click(function() {
        moveButton()
    })

    function moveButton() {
        if ($('#no').is(':checked')) {
            const newLocationX = Math.floor(Math.random() * ($(document).width() - $btn.width()))
            const newLocationY = Math.floor(Math.random() * ($(document).height() - $btn.height()))

            $btn.css({
                transform: 'none',
                left: newLocationX,
                top: newLocationY
            })
        } else {

        }
    }

});