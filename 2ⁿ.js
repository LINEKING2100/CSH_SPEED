round = 0
input = ''
score = 0
count = 3
recode1 = 0
recode2 = 0
recode3 = 0
recode4 = 0
position_bar = 0
position_life = 0
life = 3
game = 0


window.onload = function () {
    recode1 = Number(localStorage.getItem("recode1"))
    recode2 = Number(localStorage.getItem("recode2"))
    recode3 = Number(localStorage.getItem("recode3"))
    recode4 = Number(localStorage.getItem("recode4"))
    setTimeout(function() { 
        document.getElementById("count").innerHTML = '2'
        setTimeout(function() { 
            document.getElementById("count").innerHTML = '1'
            setTimeout(function() { 
                document.getElementById("countbackground").innerHTML = ''
                setTimeout(function() { 
                    start()
                }, 1);
            }, 1000);
        }, 1000);
    }, 1000);
}

function roundup() {
    round += 1
    document.getElementById("prev").innerHTML = 'prev : ' +input
    document.getElementById("core").innerHTML = '2^' + String(round)
    score += 1
    result = 1
    input = ''
    document.getElementById("print").innerHTML = ''
    if (position_bar <= -10) {
        position_bar += 10
    }
    else {
        position_bar = 0
    }
    if ( life == 3) {
        score += 1
    }
    cc = new Audio('right2.wav')
    cc.play();
    document.getElementById("score").innerHTML = 'SCORE : ' + String(score)
    life = 3
    lifebar = document.getElementById("life1")
    lifebar.style.backgroundColor = 'rgb(226, 71, 71)'
    lifebar = document.getElementById("life2")
    lifebar.style.backgroundColor = 'rgb(226, 71, 71)'
    lifebar = document.getElementById("life3")
    lifebar.style.backgroundColor = 'rgb(226, 71, 71)'
}

function start() {
    setInterval(function() {
        bar = document.getElementById("timer2")
        bar.style.left = String(position_bar) + '%'
        position_bar -= 1/3
        if (position_bar <= -100) {
            gameover()
        }
        else if (position_bar <= -75) {
            bar.style.backgroundColor = 'rgb(226, 71, 71)'
        } 
        game = 1
    }, 100);
}

function gameover() {
    lifebar = document.getElementById("life3")
    lifebar.style.backgroundColor = 'rgb(90, 90, 90)'
    if ( recode1 < score) {
        localStorage.setItem("recode1", score)
    }
    location.href='index.html'
}

function reset() {
    localStorage.setItem("recode", 0)
}

function nope() {
    cc = new Audio('wrong2.wav')
    cc.play();
    if (life != 1) {
        life -= 1
        lifebar = document.getElementById("life" + String(life + 1))
        lifebar.style.backgroundColor = 'rgb(90, 90, 90)'
    }
    else {
        gameover()
    }
}

function down_key() {
    document.getElementById("print").innerHTML = input
    if (input == String(BigInt(2 ** round))) {
        roundup()
    }
    else if (input.length == String(2**round).length) {
        input = ''
        document.getElementById("print").innerHTML = ''
        nope()
    }
    cc = new Audio('click.wav')
    cc.play();
}


function down_1 () {
    input += '1'
    down_key()
}

function down_2 () {
    input += '2'
    down_key()
}

function down_3 () {
    input += '3'
    down_key()
}

function down_4 () {
    input += '4'
    down_key()
}

function down_5 () {
    input += '5'
    down_key()
}

function down_6 () {
    input += '6'
    down_key()
}

function down_7 () {
    input += '7'
    down_key()
}

function down_8 () {
    input += '8'
    down_key()
}

function down_9 () {
    input += '9'    
    down_key()
}

function down_0 () {
    if (input != "") {
        input += '0'
        down_key()
    }
}

document.onkeydown = function(event) {
    if (game == 1) {
        if (event.key =='1') {
            down_1()
        }
        if (event.key =='2') {
            down_2()
        }
        if (event.key =='3') {
            down_3()
        }
        if (event.key =='4') {
            down_4()
        }
        if (event.key =='5') {
            down_5()
        }
        if (event.key =='6') {
            down_6()
        }
        if (event.key =='7') {
            down_7()
        }
        if (event.key =='8') {
            down_8()
        }
        if (event.key =='9') {
            down_9()
        }
        if (event.key =='0') {
            down_0()
        }
        if (event.key == 'Delete') {
            input = ''
            document.getElementById("print").innerHTML = ''
            cc = new Audio('click.wav')
            cc.play();
        }
    }
}