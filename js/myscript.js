const arrayList = [
    'pane',
    'uva',
    'carne',
    'mele',
    'mandarini',
]


const lista = document.querySelector('.lista');

let i = 0

while (i < arrayList.length) {
    
    lista.innerHTML += `<li>${arrayList[i]}</li>`;
    i++;
}


