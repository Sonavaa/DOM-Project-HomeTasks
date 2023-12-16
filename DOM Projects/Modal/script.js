"use strict";
const open_btn = document.querySelector(".open-btn");
const close_btn = document.querySelector(".close-btn");
const modal_el = document.querySelector(".modal");
const overlay_el = document.querySelector(".overlay");

open_btn.addEventListener("click", () => {
  overlay_el.classList.remove("hidden");
  modal_el.classList.remove("hidden");
  open_btn.classList.add("hidden");
});

const closeModal = () => {
    modal_el.classList.add("hidden");
    overlay_el.classList.add  ("hidden");
    open_btn.classList.remove("hidden");
}

close_btn.addEventListener("click", closeModal);
overlay_el.addEventListener("click", closeModal);