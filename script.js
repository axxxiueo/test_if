// 配列の数に対して自動で繰り返す

const weather = ["晴れ","曇り","雨","雷"]
for (let i = 0; i < weather.length ; i++){
    let li = document.createElement("li");
    li.textContent = weather[i];
    document.getElementById("number").appendChild(li);
}