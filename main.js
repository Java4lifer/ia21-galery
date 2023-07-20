//if number == 0 || number > 7 {A, vai te caga}
//div = document.queryselector(".div.galery> :nth-child(number)")
const galery = document.querySelector("div.galery");
const but = document.getElementById("bt1");
const linkin = document.getElementById("in1");
const numin = document.getElementById("in2");

but.addEventListener("click", (ev) => {
    const link = linkin.value;
    const num = numin.value;
    ev.preventDefault();
    if(num == 0 || num > 7){
        alert("Coloque um numero entre 1 e 7.")
        return 
    }
    else if(link == " " || num == " ") {
        alert("Um dos valores está em branco.")
        return 
    }
    const div = galery.querySelector(`div.galery> :nth-child(${num})`)
    const img = div.querySelector("img")
    img.src = link
})