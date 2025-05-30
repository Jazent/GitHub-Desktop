let n = +document.getElementById("hscore").innerText
let hscoreEl = document.getElementById("hscore")

let m = +document.getElementById("gscore").innerText
let gscoreEl = document.getElementById("gscore")








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



function gfreethrow(){
    m += 1
    console.log(m)
    gscoreEl.innerText = m
}

function gmidrangelayup(){
    m += 2
    console.log(m)
    gscoreEl.innerText = m
}

function glongrange(){
    m += 3
    console.log(m)
    gscoreEl.innerText = m
}