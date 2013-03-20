function sketch_init() {
    // Detect doc size.
    var db = document.body;
    var dde = document.documentElement;
    var docWidth = Math.max(db.scrollWidth, dde.scrollWidth, db.offsetWidth, dde.offsetWidth, db.clientWidth, dde.clientWidth);
    var docHeight = Math.max(db.scrollHeight, dde.scrollHeight, db.offsetHeight, dde.offsetHeight, db.clientHeight, dde.clientHeight);
    // Set canvas size accordingly.
    var canvas = $('#sketch').get(0);
    canvas.width = docWidth;
    canvas.height = docHeight;
}

function sketch_switch() {
    var canvas = $('#sketch').get(0);
    if (canvas.width == 0) sketch_init();
    if ($('#sketch').hasClass('sketch-off')) {
        $('#sketch').removeClass('sketch-off').addClass('sketch-on');
        $('#sketch-switch').removeClass('sketch-switch-off').addClass('sketch-switch-on');
    } else {
        $('#sketch').removeClass('sketch-on').addClass('sketch-off');
        $('#sketch-switch').removeClass('sketch-switch-on').addClass('sketch-switch-off');
    }
}

function sketch_reset() {
    // https://github.com/intridea/sketch.js/issues/3
    var canvas = $('#sketch').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    $('#sketch').sketch('actions',[]);
}
