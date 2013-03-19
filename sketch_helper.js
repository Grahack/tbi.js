function sketch_switch() {
    if ($('#sketch').hasClass('sketch-off')) {
        $('#sketch').removeClass('sketch-off').addClass('sketch-on');
    } else {
        $('#sketch').removeClass('sketch-on').addClass('sketch-off');
    }
}
