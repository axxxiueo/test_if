const weather = ["晴れ","曇り","雨"];
for (let i = 0; i < weather.length; i++){
    let li = document.createElement("li");
    li.textContent = weather[i];
    document.getElementsByTagName("number").appendeChild(li);
}