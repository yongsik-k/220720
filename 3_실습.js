// 하기는 그냥 요소를 만든거야. 변수를 만든거지.
const btn = document.createElement("button");
// 하기는 클래스를 추가할 수 있다는 것.
btn.setAttribute("class", "sample-btn");

// console.log(btn);
// 글자를 만드는거야.
const txt = document.createTextNode("민코월드");
// console.log(txt);
// btn 안에 text를 밀어 넣을거야.
btn.append(txt);
console.log(btn);
document.querySelector("body").append(btn);
