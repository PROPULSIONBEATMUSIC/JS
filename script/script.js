let todo_list = [];
const input_elem = document.getElementById('input');
const btn_elem = document.getElementById('btn');
const output_elem = document.getElementById('output');
const form_elem = document.getElementById('form_data');


const up_elem = document.getElementById('sort_up');
const down_elem = document.getElementById('sort_down');


function render(){
    output_elem.innerText = '';
    todo_list.forEach(elem=>{
        const li_elem = document.createElement('li');
        li_elem.classList.add('elem');
        li_elem.innerText = elem;
        output_elem.appendChild(li_elem);
        li_elem.addEventListener('click', ()=>{
            const elems = Document.getElementsByClassName('elem');
            li_elems.classList.add('active');
            [...elems].forEach(item=>item.classList.remove('active'));
            li_elem.classList.add('active');
        })
    })
}

render()

up_elem.addEventListener('click', ()=>{
    todo_list = todo_list.sort();
    render();
    })


down_elem.addEventListener('click', ()=>{
    todo_list = todo_list.sort().reverse();
    render();
})


form_elem.addEventListener('submit', event=>{
    event.preventDefault();
    const value = input_elem.value;
    input_elem.value = '';
    todo_list.push(value);
    render();
})


form_elem.addEventListener('submit', event=> {
    event.preventDefault();
    const value = input_elem.value;
    input_elem.value = '';
    todo_list.push(value);
    render();
})