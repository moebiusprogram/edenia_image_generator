
const generateBtn = document.getElementById("edenia-generate");
const eraseBtn = document.getElementById("edenia-erase");
const aboutBtn = document.getElementById("edenia-about");
const downloadBtn = document.getElementById("edenia-download");
const mintBtn = document.getElementById("edenia-mint");


const hat_value = document.getElementById("edenia-hat-value");
const sword_value = document.getElementById("edenia-sword-value");
const shoes_value = document.getElementById("edenia-shoes-value");
const body_value = document.getElementById("edenia-body-value");
const eyes_value = document.getElementById("edenia-eyes-value");
const mouth_value = document.getElementById("edenia-mouth-value");

const nftOutput = document.getElementById("edenia-nft");


const saveNFT = ()=>{

    fetch('/api/v1/nft/generate?hat='+ hat_value.value + 
        "&sword=" + sword_value.value + 
        "&shoes=" + shoes_value.value +
        "&body=" + body_value.value +
        "&eyes=" + eyes_value.value +
        "&mouth=" + mouth_value.value
        )
    .then( res => res.json() )
    .then(response => {
        console.log("response",response, typeof response)
        console.log("response",response.message, typeof response.message)

        nftOutput.src = response.result
        downloadBtn.href = response.result
    }) 
    .catch(error => console.error('Error:', error))

}

const generateNFT = () => {
    const hat = document.getElementById("edenia-hat");
    const sword = document.getElementById("edenia-sword");
    const shoes = document.getElementById("edenia-shoes");
    const body = document.getElementById("edenia-body");
    const eyes = document.getElementById("edenia-eyes");
    const mouth = document.getElementById("edenia-mouth");

    let variation = random(1,4)
    hat.src = "/images/art/sombrero" + variation + ".png"
    hat_value.value = variation

    variation = random(1,4)
    sword.src = "/images/art/espada" + variation + ".png"
    sword_value.value = variation

    variation = random(1,4)
    shoes.src = "/images/art/zapatos" + variation + ".png"
    shoes_value.value = variation

    variation = random(1,4)
    body.src = "/images/art/cuerpo" + variation + ".png"
    body_value.value = variation

    variation = random(1,4)
    eyes.src = "/images/art/ojos" + variation + ".png"
    eyes_value.value = variation

    variation = random(1,4)
    mouth.src = "/images/art/boca" + variation + ".png"
    mouth_value.value = variation

    aboutBtn.disabled = false
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

    hat_value.value = ""
    sword_value.value = ""
    shoes_value.value = ""
    body_value.value = ""
    eyes_value.value = ""
    mouth_value.value = ""

    downloadBtn.href = ""

    aboutBtn.disabled = true
}



generateBtn.addEventListener("click",function(e){
    generateNFT()
},false);


eraseBtn.addEventListener("click",function(e){
    eraseCanvas()
},false);

aboutBtn.addEventListener("click",function(e){
    saveNFT()
},false);

mintBtn.addEventListener("click",function(e){
    //saveNFT()
},false);

