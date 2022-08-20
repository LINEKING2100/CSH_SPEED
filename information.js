mode = 1

window.onload = function () {
    text_appear()
}

function right() {
    if (mode <= 4) {
        text_disappear()
        mode += 1
        setTimeout(function() { 
            text_appear()
            if (mode == 1) {
                document.getElementById("title").innerHTML = '게임 설명'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br>𝛑(pi)처럼 수학에 관련된 수를 재미있게 외울수 있는 게임입니다.<br><br>현재 모드는 2ⁿ, 𝛑(pi)가 있으며 앞으로 더 추가될 예정입니다.<br><br><a style="color: rgb(152, 255, 207);">키패트 혹은 마우스</a>를 이용해 수를 입력할 수 있고, <a style="color: rgb(152, 255, 207);">delete</a>로 지울 수 있습니다.<br><br>아래 링크를 눌러 <a style="color: rgb(152, 255, 207);">크시방정식에 가입해 더 재밌는 정보를 확인</a>하세요!<p style="color: rgb(152, 255, 207);" onclick="open()">→ 크시방정식 [CSH Equation]</p><br><br><br>"⟨" 버튼과 "⟩" 버튼을 눌러 더 많은 정보를 확인하세요!<br><br>( 이 상태에서 "⟨" 버튼을 누르면 홈화면으로 돌아갑니다. )</h5>'
            }
            else if (mode == 2) {
                document.getElementById("title").innerHTML = '2ⁿ'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">2의 거듭제곱을 맞추는 게임입니다.</a><br><br><br>2의 0제곱부터 시작하고, 맞출시 지수가 1씩 늘어납니다.<br><br><a style="color: rgb(152, 255, 207);">한번에 맞췄다면 2점</a>, 한번 이상 틀리고 맞췄다면 1점을 받습니다.<br><br><a style="color: rgb(152, 255, 207);">제한시간은 30초</a>이고, 제한시간이 끝나면 게임이 종료됩니다.<br><br>만약 정답을 맞췄다면, <a style="color: rgb(152, 255, 207);">제한시간이 3초 늘어납니다.</a><br><br>제한시간이 끝나지 않았더라도 <a style="color: rgb(152, 255, 207);">3번 틀렸다면 게임은 종료됩니다.</a></h5>'
            }
            else if (mode == 3) {
                document.getElementById("title").innerHTML = 'n²'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">제곱수를 맞추는 게임입니다.</a><br><br><br>그러나 아직 준비되지 않았어요...</h5>'
            }
            else if (mode == 4) {
                document.getElementById("title").innerHTML = '𝛑(pi)'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">𝛑(pi)를 외우는 게임입니다.</a><br><br><br>정수부분(3)부터 시작하고, 소수점 아래 수를 순서대로 입력하면 됩니다.<br><br><a style="color: rgb(152, 255, 207);">한번에 맞췄다면 2점</a>, 한번 이상 틀리고 맞췄다면 1점을 받습니다.<br><br><a style="color: rgb(152, 255, 207);">제한시간은 10초이고</a>, 제한시간이 끝나면 게임이 종료됩니다.<br><br>만약 한번에 정답을 맞췄다면, <a style="color: rgb(152, 255, 207);">제한시간이 3초 늘어납니다.</a><br><br>제한시간이 끝나지 않았더라도 <a style="color: rgb(152, 255, 207);">2번 틀렸다면 게임이 종료됩니다.</a><br><br><a style="color: rgb(152, 255, 207);">1번 틀렸을때 중앙에 입력해야할 수가 표시됩니다.</a><br><br>이 경우에는 제한시간이 늘어나지 않습니다.</h5>'
            }
            else if (mode == 5) {
                document.getElementById("title").innerHTML = 'random'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">랜덤한 수식을 계산하는 게임입니다.</a><br><br><br>그러나 아직 준비되지 않았어요...</h5>'
            }
        }, 400)
    }
    cc = new Audio('click.wav')
    cc.play();
}

function left() {
    if (mode >= 1) {
        text_disappear()
        mode -= 1
        setTimeout(function() { 
            text_appear()
            if (mode == 1) {
                document.getElementById("title").innerHTML = '게임 설명'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br>𝛑(pi)처럼 수학에 관련된 수를 재미있게 외울수 있는 게임입니다.<br><br>현재 모드는 2ⁿ, 𝛑(pi)가 있으며 앞으로 더 추가될 예정입니다.<br><br><a style="color: rgb(152, 255, 207);">키패트 혹은 마우스</a>를 이용해 수를 입력할 수 있고, <a style="color: rgb(152, 255, 207);">delete</a>로 지울 수 있습니다.<br><br>아래 링크를 눌러 <a style="color: rgb(152, 255, 207);">크시방정식에 가입해 더 재밌는 정보를 확인</a>하세요!<p style="color: rgb(152, 255, 207);" onclick="open()">→ 크시방정식 [CSH Equation]</p><br><br><br>"⟨" 버튼과 "⟩" 버튼을 눌러 더 많은 정보를 확인하세요!<br><br>( 이 상태에서 "⟨" 버튼을 누르면 홈화면으로 돌아갑니다. )</h5>'
            }
            else if (mode == 2) {
                document.getElementById("title").innerHTML = '2ⁿ'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">2의 거듭제곱을 맞추는 게임입니다.</a><br><br><br>2의 0제곱부터 시작하고, 맞출시 지수가 1씩 늘어납니다.<br><br><a style="color: rgb(152, 255, 207);">한번에 맞췄다면 2점</a>, 한번 이상 틀리고 맞췄다면 1점을 받습니다.<br><br><a style="color: rgb(152, 255, 207);">제한시간은 30초</a>이고, 제한시간이 끝나면 게임이 종료됩니다.<br><br>만약 정답을 맞췄다면, <a style="color: rgb(152, 255, 207);">제한시간이 3초 늘어납니다.</a><br><br>제한시간이 끝나지 않았더라도 <a style="color: rgb(152, 255, 207);">3번 틀렸다면 게임은 종료됩니다.</a></h5>'
            }
            else if (mode == 3) {
                document.getElementById("title").innerHTML = 'n²'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">제곱수를 맞추는 게임입니다.</a><br><br><br>그러나 아직 준비되지 않았어요...</h5>'
            }
            else if (mode == 4) {
                document.getElementById("title").innerHTML = '𝛑(pi)'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">𝛑(pi)를 외우는 게임입니다.</a><br><br><br>정수부분(3)부터 시작하고, 소수점 아래 수를 순서대로 입력하면 됩니다.<br><br><a style="color: rgb(152, 255, 207);">한번에 맞췄다면 2점</a>, 한번 이상 틀리고 맞췄다면 1점을 받습니다.<br><br><a style="color: rgb(152, 255, 207);">제한시간은 10초이고</a>, 제한시간이 끝나면 게임이 종료됩니다.<br><br>만약 한번에 정답을 맞췄다면, <a style="color: rgb(152, 255, 207);">제한시간이 3초 늘어납니다.</a><br><br>제한시간이 끝나지 않았더라도 <a style="color: rgb(152, 255, 207);">2번 틀렸다면 게임이 종료됩니다.</a><br><br><a style="color: rgb(152, 255, 207);">1번 틀렸을때 중앙에 입력해야할 수가 표시됩니다.</a><br><br>이 경우에는 제한시간이 늘어나지 않습니다.</h5>'
            }
            else if (mode == 5) {
                document.getElementById("title").innerHTML = 'random'
                document.getElementById("text2").innerHTML = '<h5 id="text2" style="font-size: 25;"><br><a style="color: rgb(152, 255, 207);">랜덤한 수식을 계산하는 게임입니다.</a><br><br><br>그러나 아직 준비되지 않았어요...</h5>'
            }
            else if (mode == 0) {
                location.href='index.html'
            }
        },400)
    }
    cc = new Audio('click.wav')
    cc.play();
}

function text_disappear() {
    document.getElementById("text").style.top = '55%'
    document.getElementById("text").style.opacity = '0'

}

function text_appear() {
    document.getElementById("text").style.top = '50%'
    document.getElementById("text").style.opacity = '1'
}

function open() {
    window.open('https://discord.gg/qbBAkjsyD8')
}