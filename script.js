var div = [];
var danger = [];
var level = 1;
var x = 0, y = 0;
document.getElementById('A').addEventListener('click', function () {
    var divId = this.innerHTML;
    incrase(divId);
});
document.getElementById('S').addEventListener('click', function () {
    var divId = this.innerHTML;
    incrase(divId);
});
document.getElementById('D').addEventListener('click', function () {
    var divId = this.innerHTML;
    incrase(divId);
});
document.getElementById('W').addEventListener('click', function () {
    var divId = this.innerHTML;
    incrase(divId);
});
document.addEventListener("keypress", function () {
    incrase(event.key);
});
function incrase(event) {
    
    var d = 0;
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            var c = 'div';
            c = c + i + j;
            div.push(c);
        }
    } 
    document.getElementById(div[99]).style.backgroundColor = 'green';
    var a = 'div' + x + y;
    for (var l = 0; l < 100; l++) {
        if (a == div[l]) {
            document.getElementById(div[l]).style.backgroundColor = 'rgb(231, 136, 20)';
        }
    }
    if ((event == 'A' || event == 'a') && y != 0) {
        y = (y - 1) % 10;
    }
    else if ((event == 'S' || event == 's') && x != 9) {
        x = (x + 1) % 10;
    }
    else if ((event == 'D' || event == 'd') && y != 9) {
        y = (y + 1) % 10;
    }
    else if ((event == 'W' || event == 'w') && x != 0) {
        x = (x - 1) % 10;
    }
    var s = 'div' + x + y;
    for (var i = 0; i < danger.length; i++) {
        if (s == danger[i]) {
            alert("Game Over");
            document.getElementById(danger[i]).style.backgroundColor = 'rgb(231, 136, 20)';
            while (danger.length > 0) {
                danger.pop();
            }
            for (var l = 0; l < 100; l++) {
                document.getElementById(div[l]).style.backgroundColor = 'rgb(231, 136, 20)';
            }
            x = 0;
            y = 0;
            console.log("Fail");
            console.log(danger);
            d = -1;
            level=1;
            document.getElementById("heading").innerHTML="Level "+level;
            document.getElementById("heading").style.color='green';
            document.getElementById(div[0]).style.backgroundColor = 'blue';
            document.getElementById(div[99]).style.backgroundColor = 'green';
            break;
        }
    }
    if (d == 0) {
        if (s == div[99]) {
            document.getElementById(div[99]).style.backgroundColor = 'blue';
            x = 0;
            y = 0;
            alert("You Won");
            while (danger.length > 0) {
                danger.pop();
            }
            for (var l = 0; l < 100; l++) {
                document.getElementById(div[l]).style.backgroundColor = 'rgb(231, 136, 20)';
            }
            x = 0;
            y = 0;
            document.getElementById(div[0]).style.backgroundColor = 'blue';
            document.getElementById(div[99]).style.backgroundColor = 'green';
            console.log(danger);
            level++;
            if(level%2==0){
                document.getElementById("heading").style.color='yellow';
            }
            else{
                document.getElementById("heading").style.color='green';
            }
            document.getElementById("heading").innerHTML="Level "+level;
        }
        else {
            for (var l = 0; l < 100; l++) {
                if (s == div[l]) {
                    document.getElementById(div[l]).style.backgroundColor = 'blue';
                }
            }
            var temp = level;
            while (temp--) {
                var m = Math.floor(Math.random() * 99);
                while(div[m]==s){
                    m = Math.floor(Math.random() * 99);
                }
                document.getElementById(div[m]).style.backgroundColor = 'red';
                danger.push(div[m]);
            }
        }
    }
}