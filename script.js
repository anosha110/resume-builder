"use strict";
let cer_Section = document.getElementById('cer');
let cer_btn = document.getElementById('cer_btn');
cer_btn?.addEventListener('click', () => {
    cer_Section?.classList.toggle('hide');
});
const langSection = document.querySelector('.language');
const langButton = document.getElementById('lang_btn');
langButton?.addEventListener('click', () => {
    langSection?.classList.toggle('hide');
});
let contact_section = document.querySelector('.contact');
let contact_btn = document.querySelector('.btn:nth-child(1)');
contact_btn?.addEventListener('click', () => {
    contact_section?.classList.toggle('hide');
});
let skill_section = document.querySelector('.skill');
let skill_btn = document.querySelector('.btn:nth-child(2)');
skill_btn?.addEventListener('click', () => {
    skill_section?.classList.toggle('hide');
});
let education_section = document.querySelector('.Education');
let education_btn = document.querySelector('.btn:nth-child(3)');
education_btn?.addEventListener('click', () => {
    education_section?.classList.toggle('hide');
});
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
