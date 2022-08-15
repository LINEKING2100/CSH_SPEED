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

mode=3
mode_position = 50

function startdown() {
    cc = new Audio('right2.wav')
    cc.play();
    setTimeout(function() { 
        if (mode == 3) {
            location.href='크시방정식.html'
        }
        else if (mode == 4) {
            alert("준비중")
        }
        else if (mode == 5) {
            alert("준비중")
        }
        else if (mode == 6) {
            alert("준비중")
        }
        else if (mode == 1) {
            window.open('https://discord.gg/qbBAkjsyD8')
        }
        else if (mode == 2) {
            location.href='information.html'
        }
    }, 300)
}

function right() {
    if (mode <= 5) {
        mode += 1
        document.getElementById("score1").innerHTML = 'RECORD : ' + Number(localStorage.getItem("recode" + String(mode-2)))
        box = document.getElementById("n1")
        box.style.left = String( mode_position - 25 ) + "%"
        box = document.getElementById("n2")
        box.style.left = String( mode_position ) + "%"
        box = document.getElementById("n3")
        box.style.left = String( mode_position + 25) + "%"
        box = document.getElementById("n4")
        box.style.left = String( mode_position + 50 ) + "%"
        box = document.getElementById("n5")
        box.style.left = String( mode_position + -50 ) + "%"
        box = document.getElementById("n6")
        box.style.left = String( mode_position + -75 ) + "%"
        mode_position -= 25
    }
    cc = new Audio('click.wav')
    cc.play();
}

function left() {
    if (mode >= 2) {
        mode -= 1
        document.getElementById("score1").innerHTML = 'RECORD : ' + Number(localStorage.getItem("recode" + String(mode-2)))
        box = document.getElementById("n1")
        box.style.left = String( mode_position  + 25) + "%"
        box = document.getElementById("n2")
        box.style.left = String( mode_position + 50 ) + "%"
        box = document.getElementById("n3")
        box.style.left = String( mode_position + 75) + "%"
        box = document.getElementById("n4")
        box.style.left = String( mode_position + 100 ) + "%"
        box = document.getElementById("n5")
        box.style.left = String( mode_position  ) + "%"
        box = document.getElementById("n6")
        box.style.left = String( mode_position  - 25) + "%"
        mode_position += 25
    }
    cc = new Audio('click.wav')
    cc.play();
}

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
    document.getElementById("score1").innerHTML = 'RECORD : ' + recode1
}

function roundup() {
    round += 1
    document.getElementById("past").innerHTML = 'past : ' + input
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
    lifebar = document.getElementById("life2")
    lifebar.style.top = '0%'
}

function start() {
    setInterval(function() {
        bar = document.getElementById("timer2")
        bar.style.left = String(position_bar) + '%'
        position_bar -= 1/3
        if (position_bar <= -100) {
            gameover()
        }
    }, 100);
}

function gameover() {
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
        lifebar = document.getElementById("life2")
        lifebar.style.top = String(position_life + ((3 - life) * 100/3)) + '%'
    }
    else {
        lifebar = document.getElementById("life2")
        lifebar.style.top = '100%'
        setInterval(function() {
            gameover()
        }, 100);
    }
}

function down_key() {
    document.getElementById("print").innerHTML = input
    if (input == String(2**round)) {
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
    input += '0'
    down_key()
}

document.onkeydown = function(event) {
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