TotalNotes = 10;
var time = 0;

function update() {
    if (time >= 0) {
        time += 1;
    }
    if (time == 50) {
        createNote(1);
        createNote(4);
    }
    if (time == 60) {
        createNote(2);
    }
    if (time == 70) {
        createNote(3);
    }
    if (time == 80) {
        createNote(1);
        createNote(4);
    }
    if (time == 90) {
        createNote(3);
    }
    if (time == 100) {
        createNote(2);
    }
    if (time == 110) {
        createNote(1);
        createNote(4);
    }
    if (time >= 120) {

    }
}

var mainloop = function() {
    update();
};
setInterval(mainloop, 16);
