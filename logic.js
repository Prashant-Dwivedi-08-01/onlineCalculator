console.log("Welcome");
let exp = "";

let keys = document.getElementsByClassName('key');
let display = document.getElementById('display');
for (key of keys) {
    key.addEventListener('click', (e) => {
        exp += e.target.value;
        display.innerHTML = `<b>${(exp)}</b>`
    })
}

//Root
document.getElementById('key_root').addEventListener('click',()=>{
    display.innerHTML = `<b>${Math.sqrt(eval(exp))}</b>`
})

//1/x 
document.getElementById('key_1/x').addEventListener('click',()=>{
    display.innerHTML = `<b>${1/(eval(exp))}</b>`

})
//All Clear
document.getElementById('keyC').addEventListener('click', () => {
    // exp = exp.slice(0,exp.length-2);
    exp = ""
    display.innerHTML = `<b>0</b>`
})

//Back Key
document.getElementById('key--').addEventListener('click',()=>{
    exp = exp.slice(0,exp.length-1)
    display.innerHTML = `<b>${(exp)}</b>`
})

//Calculate Key
document.getElementById('key=').addEventListener('click', () => {
    // exp = exp.slice(0,exp.length-1)
    display.innerHTML = `<b>${eval(exp)}</b>`
})