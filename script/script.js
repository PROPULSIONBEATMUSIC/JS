let todo_list = [];
const input_elem = document.getElementById('input');
const btn_elem = document.getElementById('btn');
const output_elem = document.getElementById('output');

const up_elem = document.getElementById('sort_up');
const down_elem = document.getElementById('sort_down');

function render(){
    output_elem.innerText = '';
    todo_list.forEach(elem=>{
        const li_elem = document.createElement('li');
        li_elem.innerText = elem;
        output_elem.appendChild(li_elem);
    })
}

up_elem.addEventListener('click', ()=>{
    todo_list = todo_list.sort();
    render();
})

down_elem.addEventListener('click', ()=>{
    todo_list = todo_list.sort().reverse();
    render();
})

btn_elem.addEventListener('click', ()=>{
    const value = input_elem.value;
    input_elem.value = '';
    todo_list.push(value);
    render();
})