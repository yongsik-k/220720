const hw = document.querySelectorAll("#NM_FAVORITE > div.group_nav");
console.log(hw[0].innerText)
const arr = [];

const temp = hw[0].innerText.split("\n");
// console.log(temp)

for (let i = 0; i<17; i++){
  arr.push(temp[i])
}

console.log(arr)