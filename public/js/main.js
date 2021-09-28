
const generateBtn = document.getElementById("edenia-generate");
const eraseBtn = document.getElementById("edenia-erase");
const aboutBtn = document.getElementById("edenia-about");

const generateNFT = () => {
    const hat = document.getElementById("edenia-hat");
    const sword = document.getElementById("edenia-sword");
    const shoes = document.getElementById("edenia-shoes");
    const body = document.getElementById("edenia-body");
    const eyes = document.getElementById("edenia-eyes");
    const mouth = document.getElementById("edenia-mouth");

    hat.src = "/images/art/sombrero" + random(1,4) + ".png"
    sword.src = "/images/art/espada" + random(1,4) + ".png"
    shoes.src = "/images/art/zapatos" + random(1,4) + ".png"
    body.src = "/images/art/cuerpo" + random(1,4) + ".png"
    eyes.src = "/images/art/ojos" + random(1,4) + ".png"
    mouth.src = "/images/art/boca" + random(1,4) + ".png"
}


const random = (min,max)=>{
    return Math.floor(Math.random()*(max - min + 1)) + min
}


const eraseCanvas = () => {
    const hat = document.getElementById("edenia-hat");
    const sword = document.getElementById("edenia-sword");
    const shoes = document.getElementById("edenia-shoes");
    const body = document.getElementById("edenia-body");
    const eyes = document.getElementById("edenia-eyes");
    const mouth = document.getElementById("edenia-mouth");

    hat.src = ""
    sword.src = ""
    shoes.src = ""
    body.src = ""
    eyes.src = ""
    mouth.src = ""

}



generateBtn.addEventListener("click",function(e){
    generateNFT()
},false);


eraseBtn.addEventListener("click",function(e){
    eraseCanvas()
},false);

aboutBtn.addEventListener("click",function(e){
    
},false);



