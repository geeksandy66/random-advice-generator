const adviceMsg = document.querySelector('.advice');
const generateBtn = document.querySelector('#generate');
const adviceCount = document.querySelector('.advice-num');

const URL = "https://api.adviceslip.com/advice";

let count = 0;
randAdvice()

async function randAdvice(){
    try{
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.slip.advice);
        const result = data.slip.advice;
        adviceMsg.innerText = `❝ ${result} ❞`;
        adviceCountMsg();

    }catch(error){
        console.log(error)
    }

}

generateBtn.addEventListener('click',randAdvice);


function adviceCountMsg(){
    count++;
    adviceCount.innerHTML = `ADVICE #${count}`;
}

