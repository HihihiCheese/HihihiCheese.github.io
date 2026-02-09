// 纯净版猫咪点击特效
document.addEventListener('click', function(e) {
    var list = ["🐱", "😽", "😼", "🙀", "😻", "😹"];
    var text = list[Math.floor(Math.random() * list.length)];

    var elem = document.createElement("span");
    elem.textContent = text;
    elem.style.position = "absolute";
    elem.style.color = "#98C1D9"; // 莫兰迪蓝
    elem.style.fontSize = "20px";
    elem.style.fontWeight = "bold";
    elem.style.zIndex = "99999";
    elem.style.pointerEvents = "none"; // 鼠标穿透，不影响点击其他元素
    elem.style.userSelect = "none";
    elem.style.left = (e.pageX - 10) + "px";
    elem.style.top = (e.pageY - 20) + "px";
    elem.style.transition = "all 1s ease-out"; // CSS动画过渡

    document.body.appendChild(elem);

    // 动画执行
    setTimeout(function() {
        elem.style.top = (e.pageY - 150) + "px"; // 向上飘动
        elem.style.opacity = 0; // 变透明
    }, 10);

    // 清理元素
    setTimeout(function() {
        elem.remove();
    }, 1000);
});
