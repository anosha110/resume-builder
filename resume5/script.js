"use strict";
let myName = document.getElementById('name');
let desig = document.getElementById('desig');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
let add = document.getElementById('add');
let pass = document.getElementById('pass');
let deg = document.getElementById('deg');
let uni = document.getElementById('uni');
let pass1 = document.getElementById('pass1');
let deg1 = document.getElementById('deg1');
let uni2 = document.getElementById('uni2');
let skill1 = document.getElementById('skill1');
let skill2 = document.getElementById('skill2');
let skill3 = document.getElementById('skill3');
let lang = document.getElementById('lang');
let lang2 = document.getElementById('lang2');
let styear = document.getElementById('styear');
let endyear = document.getElementById('endyear');
let company = document.getElementById('company');
let comlocation = document.getElementById('comlocation');
let jobtitle = document.getElementById('jobtitle');
let achv1 = document.getElementById('achv1');
let achv2 = document.getElementById('achv2');
let achv3 = document.getElementById('achv3');
let pic = document.getElementById('pic');
let submitbtn = document.getElementById('submitbtn');
let form = document.getElementById('form');
form?.addEventListener('submit', (e) => {
    e.preventDefault();
    // Store form data in localStorage
    localStorage.setItem('name', myName.value);
    localStorage.setItem('desig', desig.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('add', add.value);
    localStorage.setItem('pass', pass.value);
    localStorage.setItem('deg', deg.value);
    localStorage.setItem('uni', uni.value);
    localStorage.setItem('pass1', pass1.value);
    localStorage.setItem('deg1', deg1.value);
    localStorage.setItem('uni2', uni2.value);
    localStorage.setItem('skill1', skill1.value);
    localStorage.setItem('skill2', skill2.value);
    localStorage.setItem('skill3', skill3.value);
    localStorage.setItem('lang', lang.value);
    localStorage.setItem('lang2', lang2.value);
    localStorage.setItem('stYear', styear.value);
    localStorage.setItem('endYear', endyear.value);
    localStorage.setItem('company', company.value);
    localStorage.setItem('comlocation', comlocation.value);
    localStorage.setItem('jobtitle', jobtitle.value);
    localStorage.setItem('achv1', achv1.value);
    localStorage.setItem('achv2', achv2.value);
    localStorage.setItem('achv3', achv3.value);
    // Update this in the form page (where the image is being uploaded)
    const pic = document.getElementById('pic');
    if (pic.files && pic.files[0]) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let textImg = reader.result;
            localStorage.setItem("profile_pic", textImg); // Save image to localStorage
        });
        reader.readAsDataURL(pic.files[0]); // Read the file as a data URL (base64 encoded)
    }
    // Redirect to resume page
    window.location.href = "./resume/resume.html";
});
