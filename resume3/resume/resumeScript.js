"use strict";
window.addEventListener('load', () => {
    // Define a function to set textContent if both element and value exist
    const setText = (elementId, value) => {
        const element = document.getElementById(elementId);
        if (element && value) {
            element.textContent = value;
        }
    };
    const setImageSrc = (elementId, value) => {
        const element = document.getElementById(elementId);
        if (element && value) {
            element.src = value; // Set the src attribute for the image element
            element.alt = 'Profile Picture'; // Optional: Set alt text for the image
        }
    };
    // In your window load event, load the image:
    setImageSrc('profile_pic', localStorage.getItem('profile_pic'));
    // Personal Information
    setText('resName', localStorage.getItem('name'));
    setText('resDesig', localStorage.getItem('desig'));
    setText('resPhone', localStorage.getItem('phone'));
    setText('resEmail', localStorage.getItem('email'));
    setText('resAdd', localStorage.getItem('add'));
    setImageSrc('resImg', localStorage.getItem('picture'));
    setText('resPass', localStorage.getItem('pass'));
    // Education
    setText('resDeg', localStorage.getItem('deg'));
    setText('resinsti', localStorage.getItem('uni'));
    setText('respass2', localStorage.getItem('pass1'));
    setText('resdeg2', localStorage.getItem('deg1'));
    setText('resInsti2', localStorage.getItem('uni2'));
    // Skills
    setText('reSskill1', localStorage.getItem('skill1'));
    setText('resSkill2', localStorage.getItem('skill2'));
    setText('resSkill3', localStorage.getItem('skill3'));
    // Languages
    setText('reslang', localStorage.getItem('lang'));
    setText('reslang2', localStorage.getItem('lang2'));
    // Work Experience
    setText('resStartYear', localStorage.getItem('stYear'));
    setText('resEndYear', localStorage.getItem('endYear'));
    setText('resCompany', localStorage.getItem('company'));
    setText('rescompLocation', localStorage.getItem('comlocation'));
    setText('resjobTitle', localStorage.getItem('jobtitle'));
    setText('resachv1', localStorage.getItem('achv1'));
    setText('resachv2', localStorage.getItem('achv2'));
    setText('resachv3', localStorage.getItem('achv3'));
    // Log data to confirm
    console.log('Name from localStorage:', localStorage.getItem('name'));
    console.log('Element resName:', document.getElementById('resName'));
});
// Print Button Functionality
let print_btn = document.getElementById('print_btn');
print_btn?.addEventListener('click', () => {
    window.print();
});
