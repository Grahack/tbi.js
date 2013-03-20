function sketch_reset() {
    // https://github.com/intridea/sketch.js/issues/3
    var canvas = $('#sketch').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    $('#sketch').sketch('actions',[]);
}

function sketch_switch() {
    if ($('#sketch').hasClass('sketch-off')) {
        $('#sketch').removeClass('sketch-off').addClass('sketch-on');
        $('#sketch-switch').removeClass('sketch-switch-off').addClass('sketch-switch-on');
    } else {
        $('#sketch').removeClass('sketch-on').addClass('sketch-off');
        $('#sketch-switch').removeClass('sketch-switch-on').addClass('sketch-switch-off');
    }
}
