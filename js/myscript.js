const arrayList = [
    'pane',
    'uva',
    'carne',
    'mele',
    'carro armato',
];


const lista = document.querySelector('.lista');

let i = 0;

while (i < arrayList.length) {
    
    lista.innerHTML += `<li>${arrayList[i]}</li>`;
    i++;
}

// parte in più 

const question = document.querySelector('#question');

const buttonDom = document.querySelector('#button');

const answer = document.querySelector('#answer');


buttonDom.addEventListener('click',
    function(){
        if(question.value == "carro armato"){
            answer.innerHTML = 'Complimenti, Hai indovinato!';
        }else{
            answer.innerHTML = 'Complimenti, Hai sbagliato!';
        }
    }
)
