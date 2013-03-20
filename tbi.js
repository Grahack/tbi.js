function tbi_init() {
    // Detect doc size.
    var db = document.body;
    var dde = document.documentElement;
    var docWidth = Math.max(db.scrollWidth, dde.scrollWidth, db.offsetWidth, dde.offsetWidth, db.clientWidth, dde.clientWidth);
    var docHeight = Math.max(db.scrollHeight, dde.scrollHeight, db.offsetHeight, dde.offsetHeight, db.clientHeight, dde.clientHeight);
    // Set canvas size accordingly.
    var canvas = $('#tbi').get(0);
    canvas.width = docWidth;
    canvas.height = docHeight;
}

function tbi_switch() {
    var canvas = $('#tbi').get(0);
    if (canvas.width == 0) tbi_init();
    if ($('#tbi').hasClass('tbi-off')) {
        $('#tbi').removeClass('tbi-off').addClass('tbi-on');
        $('#tbi-switch').removeClass('tbi-switch-off').addClass('tbi-switch-on');
    } else {
        $('#tbi').removeClass('tbi-on').addClass('tbi-off');
        $('#tbi-switch').removeClass('tbi-switch-on').addClass('tbi-switch-off');
    }
}

function tbi_reset() {
    // https://github.com/intridea/tbi.js/issues/3
    var canvas = $('#tbi').get(0);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    $('#tbi').sketch('actions',[]);
}
