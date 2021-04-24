var score = 0;
var notesHit = 0;
var potential = 100;
var hitPoints = 1000000 / potential;

function createNote(_row) {

    this.row = _row;

    var y = 50;

    var key = 0;

    notesHit++;

    var Note = document.createElement("canvas");
    Note.innerHTML = "Button";

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(Note);

    if (row == 1) {
        Note.style = "background-color: #d3d3d3;position:absolute; transform: translate(50px,50px); width:50px; height:50px;";
    }
    if (row == 2) {
        Note.style = "background-color: #d3d3d3;position:absolute; transform: translate(120px,50px); width:50px; height:50px;";
    }
    if (row == 3) {
        Note.style = "background-color: #d3d3d3;position:absolute; transform: translate(190px,50px); width:50px; height:50px;";
    }
    if (row == 4) {
        Note.style = "background-color: #d3d3d3;position:absolute; transform: translate(260px,50px); width:50px; height:50px;";
    }

    var x = (50 * row) + ((row - 1) * 20);
    var y = 6;
    var death = 600;

    function update() {
        y += 10;
        Note.style = `background-color: #d3d3d3;position:absolute; transform: translate(${x + 'px'},${y + 'px'}); width:50px; height:50px;`;
        if (y >= death) {
            Note.remove();
            //miss();
        }
        if (y >= 490 && y <= 510) {
            if (buttonPressed == row) {
                Note.remove();
                //Perfect
            }
        } else if (y >= 470 && y <= 530) {
            if (buttonPressed == row) {
                Note.remove();
                //Good
            }
        } else if (y >= 450 && y <= 550) {
            if (buttonPressed == row) {
                Note.remove();
                //Bad
            }
        } else if (y >= 400 && y <= 600) {
            if (buttonPressed == row) {
                Note.remove();
                //Miss
            }
        } else {
            //nothing happens
        }
    }
    var mainloop = function() {
        update();
    };
    setInterval(mainloop, 16);
}