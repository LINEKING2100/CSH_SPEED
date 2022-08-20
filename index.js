mode=3
mode_position = 50

recode1 = 0
recode2 = 0
recode3 = 0
recode4 = 0

round = 0

window.onload = function () {
    recode1 = Number(localStorage.getItem("recode1"))
    recode2 = Number(localStorage.getItem("recode2"))
    recode3 = Number(localStorage.getItem("recode3"))
    recode4 = Number(localStorage.getItem("recode4"))
    document.getElementById("score1").innerHTML = 'RECORD : ' + recode1
    info = document.getElementById("info")
    info.style.left = '240px'
}

function startdown() {
    cc = new Audio('right2.wav')
    cc.play();
    setTimeout(function() { 
        if (mode == 3) {
            location.href='2ⁿ.html'
        }
        else if (mode == 4) {
            alert("준비중")
        }
        else if (mode == 5) {
            location.href='𝛑(pi).html'
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
        box.style.left = String( mode_position - 30 ) + "%"
        box = document.getElementById("n2")
        box.style.left = String( mode_position ) + "%"
        box = document.getElementById("n3")
        box.style.left = String( mode_position + 30) + "%"
        box = document.getElementById("n4")
        box.style.left = String( mode_position + 60 ) + "%"
        box = document.getElementById("n5")
        box.style.left = String( mode_position + -60 ) + "%"
        box = document.getElementById("n6")
        box.style.left = String( mode_position + -90 ) + "%"
        mode_position -= 30
    }
    cc = new Audio('click.wav')
    cc.play();
}

function left() {
    if (mode >= 2) {
        mode -= 1
        document.getElementById("score1").innerHTML = 'RECORD : ' + Number(localStorage.getItem("recode" + String(mode-2)))
        box = document.getElementById("n1")
        box.style.left = String( mode_position  + 30) + "%"
        box = document.getElementById("n2")
        box.style.left = String( mode_position + 60 ) + "%"
        box = document.getElementById("n3")
        box.style.left = String( mode_position + 90) + "%"
        box = document.getElementById("n4")
        box.style.left = String( mode_position + 120 ) + "%"
        box = document.getElementById("n5")
        box.style.left = String( mode_position  ) + "%"
        box = document.getElementById("n6")
        box.style.left = String( mode_position  - 30) + "%"
        mode_position += 30
    }
    cc = new Audio('click.wav')
    cc.play();
}