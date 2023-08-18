let inputbox = document.getElementById('input')
let list = document.getElementById('List')
let button = document.getElementById('btn')


button.addEventListener('click',()=>{
    addTask()
})
inputbox.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        addTask()
    }
})

function addTask(){
    if(inputbox.value===''){
        alert("Please write something")
    }else{
    let li = document.createElement('li')
    li.innerHTML = inputbox.value
    list.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    }
    inputbox.value=''
    savedata()
}
list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked')
        savedata()
    }else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove()
        savedata()

    }
})

function savedata(){
    localStorage.setItem('task',list.innerHTML)
}
function showdata(){
    list.innerHTML = localStorage.getItem('task')
}
showdata()