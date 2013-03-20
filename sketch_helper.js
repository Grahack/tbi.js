function sketch_switch() {
    if ($('#sketch').hasClass('sketch-off')) {
        $('#sketch').removeClass('sketch-off').addClass('sketch-on');
        $('#sketch-switch').removeClass('sketch-switch-off').addClass('sketch-switch-on');
    } else {
        $('#sketch').removeClass('sketch-on').addClass('sketch-off');
        $('#sketch-switch').removeClass('sketch-switch-on').addClass('sketch-switch-off');
    }
}
