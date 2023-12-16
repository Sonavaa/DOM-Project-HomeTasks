const insert_el = document.getElementsByClassName("insert");   
const hero_el = document.getElementsByClassName("hero");

window.addEventListener("keydown", (event) => {
    console.log(event);
    hero_el.classList.add("key")
    insert_el.innerHTML= `
    <div class="key">
    ${Event.key}
    <small>event.key</small>
</div>
<div class="key">
    ${Event.keyCode}
    <small>event.keyCode</small>
</div>
<div class="key">
    ${Event.code}
    <small>event.code</small>
</div>`;

});