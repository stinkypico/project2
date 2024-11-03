const bttns = document.querySelectorAll(".bttn");
const textBox = document.querySelector("#textBox");
const specialShift = document.querySelectorAll(".special");
const bckspc = document.querySelector("#bckspc");
const space = document.querySelector("#space");
var allKeysId = [];
let letterCount = 0;
var letters = [];
var newKeys = [];
var alreadyKlicked;
space.addEventListener("mouseover", ()=>{
    space.style.width="435px";
    space.style.height = "45px";
});
space.addEventListener("mouseout", ()=>{
    space.style.width="440px";
    space.style.height = "50px";
});
space.addEventListener("click", ()=>{
    space.style.backgroundColor = "rgb(53, 53, 53)";
     
    setTimeout(() => {
        space.style.backgroundColor = "rgb(178, 169, 187)";
    }, 150);

    textBox.innerHTML += space.dataset.index;
    newKeys.push(space.dataset.index);
    allKeysId.push(space.dataset.includes);
});

bckspc.addEventListener("mouseover", ()=>{
    bckspc.style.width="85px";
    bckspc.style.height="45px";
});
bckspc.addEventListener("mouseout", ()=>{
    bckspc.style.width="90px";
    bckspc.style.height="50px";
});


bckspc.addEventListener("click", ()=>{
    newKeys.pop(alreadyKlicked);
    textBox.innerHTML = " ";
    for(let i = 0; i < newKeys.length; i++){
        textBox.innerHTML += newKeys[i];
    } 

    bckspc.style.backgroundColor = "rgb(53, 53, 53)";
        
    setTimeout(() => {
        bckspc.style.backgroundColor = "rgb(178, 169, 187)";
     }, 150);

});

for(let i= 0; i < bttns.length; i++ ){
    allKeysId.push(bttns[i].dataset.index);
    bttns[i].addEventListener("mouseover", ()=>{
        bttns[i].style.width = "45px";
        bttns[i].style.height = "45px";
    })

    bttns[i].addEventListener("mouseout", ()=>{
        bttns[i].style.width = "50px";
        bttns[i].style.height = "50px";
    })
    bttns[i].addEventListener("click", ()=>{
        textBox.innerHTML += bttns[i].dataset.index;
        letterCount++;
        alreadyKlicked = bttns[i].dataset.index;
        newKeys.push(bttns[i].dataset.index);
        if(letterCount > 515){
            textBox.style.height = "100%";
        }

        bttns[i].style.backgroundColor = "rgb(53, 53, 53)";
        
        setTimeout(() => {
            bttns[i].style.backgroundColor = "rgb(178, 169, 187)";
        }, 150);
    })
}

for(let i = 0; i < specialShift.length; i++){
    specialShift[i].addEventListener("mouseover", ()=>{
        specialShift[i].style.width = "65px";
        specialShift[i].style.height = "45px";
    })

    specialShift[i].addEventListener("mouseout", ()=>{
        specialShift[i].style.width = "70px";
        specialShift[i].style.height = "50px";
    }) 

    specialShift[i].addEventListener("click",()=>{
        for(let i = 0; i < bttns.length; i++){
            let backToNormal =  bttns[i].dataset.index;
            bttns[i].dataset.index = bttns[i].dataset.chng
            setInterval(()=>{
                bttns[i].dataset.index = backToNormal;
            },3000);
        }
        specialShift[i].style.backgroundColor = "rgb(53, 53, 53)";
        setTimeout(() => {
            specialShift[i].style.backgroundColor = "rgb(178, 169, 187)";
        }, 150);
    })
    
}
document.addEventListener('keydown', (pressedKey) =>{
    if(allKeysId.includes(pressedKey.key)){
        newKeys.push(pressedKey.key)
        alreadyKlicked = pressedKey.key;
        letterCount++;
        textBox.innerHTML += pressedKey.key;
    }
    if(pressedKey.key == "Backspace"){
        newKeys.pop(alreadyKlicked)
        textBox.innerHTML = " ";
        for(let i = 0; i < newKeys.length; i++){
            textBox.innerHTML += newKeys[i];
        }

        bckspc.style.width = "85px";
        bckspc.style.height = "45px";
        bckspc.style.backgroundColor = "rgb(53, 53, 53)";
    }
    if(pressedKey.code == "Space"){
        newKeys.push(pressedKey.key);
        textBox.innerHTML += space.dataset.index;
        space.style.width = "435px";
        space.style.height = "45px";
        space.style.backgroundColor = "rgb(53, 53, 53)";
    }

    if(pressedKey.key == "Shift"){
        for(let i = 0; i < bttns.length; i++){
            allKeysId.splice(0,0,bttns[i].dataset.chng)
            if(bttns[i].dataset.chng=="dtd"){
                allKeysId.splice(0,0,"\"");
            }
        }
    }
    if(letterCount > 515){
        textBox.style.height = "100%";
    }
  
    for(let i = 0; i < bttns.length; i++){
        if(pressedKey.key == bttns[i].dataset.index){
            bttns[i].style.width = "45px";
            bttns[i].style.height = "45px";
            bttns[i].style.backgroundColor = "rgb(53, 53, 53)";
        }
    }

    if(pressedKey.code == "ShiftLeft"){
        document.querySelector("#Shift1").style.width = "65px";
        document.querySelector("#Shift1").style.height = "45px";
        document.querySelector("#Shift1").style.backgroundColor = "rgb(53, 53, 53)";
    }

    if(pressedKey.code == "ShiftRight"){
        document.querySelector("#Shift2").style.width = "65px";
        document.querySelector("#Shift2").style.height = "45px";
        document.querySelector("#Shift2").style.backgroundColor = "rgb(53, 53, 53)";
    }
    
});

document.addEventListener('keyup', (pressedKey) =>{
    for(let i = 0; i < bttns.length; i++){
        if(pressedKey.key == bttns[i].dataset.index){
            bttns[i].style.width = "50px";
            bttns[i].style.height = "50px";
            bttns[i].style.backgroundColor = "rgb(178, 169, 187)";
        }  
    }
    
    if(pressedKey.code == "ShiftLeft"){
        document.querySelector("#Shift1").style.width = "70px";
        document.querySelector("#Shift1").style.height = "50px";
        document.querySelector("#Shift1").style.backgroundColor = "rgb(178, 169, 187)";
    }

    if(pressedKey.code == "ShiftRight"){
        document.querySelector("#Shift2").style.width = "70px";
        document.querySelector("#Shift2").style.height = "50px";
        document.querySelector("#Shift2").style.backgroundColor = "rgb(178, 169, 187)";
    }
    if(pressedKey.code == "Backspace"){
        bckspc.style.width = "90px";
        bckspc.style.height = "50px";
        bckspc.style.backgroundColor = "rgb(178, 169, 187)";
    }
    if(pressedKey.code == "Space"){
        space.style.width = "440px";
        space.style.height = "50px";
        space.style.backgroundColor = "rgb(178, 169, 187)";
    }
});