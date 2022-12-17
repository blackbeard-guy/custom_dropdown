const dropdownBtn = document.querySelector('.dropdown-btn')
const dropdownListEl = document.querySelector('.dropdown-list')
const dropdownListItemEl = document.querySelector('.dropdown-list-item')
const dropdownEl = document.querySelector('.dropdown')
const bodyEl = document.querySelector('body')
const resultEl = document.querySelector('.result')
let values = [
    {  
        name: 'Interstellar',
        value: 'In-1'
    },

    {  
        name: 'Pulp fiction',
        value: 'Pf-2'
    },

    {  
        name: 'La-La Land',
        value: 'LLL-3'
    },

    {  
        name: 'The Last Duel',
        value: 'TLD-4'
    },

    {  
        name: '1917',
        value: '1917-5'
    },
]

dropdownBtn.addEventListener('click', () => {
    addValues()
    dropdownListEl.classList.toggle('none')
})

window.addEventListener('click', (e) => {
    if(!(e.target.closest('ul') == dropdownListEl) && !(e.target.closest('div') == dropdownEl)){
        dropdownListEl.classList.add('none')
    }

    if(e.target.closest('ul') == dropdownListEl) {
        dropdownBtn.innerHTML = e.target.innerText
        dropdownBtn.dataset.value = e.target.dataset.value
        dropdownListEl.classList.add('none')
        updateReduslt()
    }
})

function addValues(){
    dropdownListEl.replaceChildren() // удаление всех элементов в объекте
    let l = 1
    for (let i = 0; i < values.length; i++) {
        if(dropdownBtn.innerHTML !== values[i].name) {
            const option = `<li class="dropdown-list-item${l % 2 == 0 ? ' even' : ''}" data-value="${values[i].value}">${values[i].name}</li>` 
            dropdownListEl.insertAdjacentHTML('beforeend', option)
            l++
        }
    }
}

function updateReduslt() { 
    resultEl.innerText = `name: ${dropdownBtn.innerHTML}, value: ${dropdownBtn.dataset.value}`
}

updateReduslt()