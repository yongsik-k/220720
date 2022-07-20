

for (let i = 0; i < 5; i++) {
  const btn = document.createElement("button");
  const txt = document.createTextNode("버튼" + (i + 1));
  btn.setAttribute("class", "Bt");
  btn.append(txt);
  btn.addEventListener("click", function () {
    alert("안녕 버튼"+(i+1));
  });
  document.querySelector("body").append(btn);

}
