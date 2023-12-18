"use strict"

const input_el=document.getElementById("input")
const add_btn=document.getElementById("add")
const ul_el=document.querySelector("ul")

const tasks=[]
add_btn.addEventListener("click",(event)=>{
    event.preventDefault()

    const givenValue=input_el.value.trim()

    if (givenValue.length===0) {
        return
    }

    tasks.unshift(givenValue)
    displayTasks()

    input_el.value=""
})

const displayTasks=()=>{
    ul_el.innerHTML=""

    tasks.forEach((task,index,array)=>{
        const li_el=document.createElement("li")
        const span_el=document.createElement("span")
        const button_el=document.createElement("button")

        span_el.textContent=task
        button_el.textContent="Delete Task"
        button_el.className="btn"

        button_el.addEventListener("click",()=>{
            deleteTask(index)

        })
        li_el.insertAdjacentElement("afterbegin",span_el)
        li_el.insertAdjacentElement("beforeend",button_el)

        ul_el.insertAdjacentElement("afterbegin",li_el)

    })
}

const deleteTask=(index)=>{
    tasks.splice(index,1)
    displayTasks()
}