let n = +document.getElementById("hscore").innerText
let hscoreEl = document.getElementById("hscore")

let m = +document.getElementById("ascore").innerText
let ascoreEl = document.getElementById("ascore")








function hfreethrow(){
    n += 1
    console.log(n)
    hscoreEl.innerText = n
}

function hmidrangelayup(){
    n += 2
    console.log(n)
    hscoreEl.innerText = n
}

function hlongrange(){
    n += 3
    console.log(n)
    hscoreEl.innerText = n
}



function afreethrow(){
    m += 1
    console.log(m)
    ascoreEl.innerText = m
}

function amidrangelayup(){
    m += 2
    console.log(m)
    ascoreEl.innerText = m
}

function alongrange(){
    m += 3
    console.log(m)
    ascoreEl.innerText = m
}