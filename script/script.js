// 풀다운 내비게이션 메뉴 시작
$("#mainMenu>li").mouseover(function (){
    $(this).children("ul").stop().fadeIn(1000);
});


$("#mainMenu>li").mouseout(function (){
    $(this).children("ul").stop().fadeOut(1000);
});
// 풀다운 내비게이션 메뉴 끝

// 레이어 팝업 시작
var layerBg = document.getElementById("layerPopupBg");

function fnLayerPopup() {
    layerBg.style.display = "block";
}

function fnClose() {
    layerBg.style.display = "none";
}

document.getElementById("closeBtn").onclick = fnClose;
// 레이어 팝업 끝
