const easterEggLink = document.getElementById("easter-egg");

easterEggLink.addEventListener("click", function (e) {
    e.preventDefault(); // 阻止默认的跳转行为
    const userInput = prompt("科创是__(2字): ", "");
    if (userInput == "sb") {
        alert("回答错误! 等着吃处分吧!🎁");
    } else {
        alert("我们已收到您的评价!😊");
    }
});
