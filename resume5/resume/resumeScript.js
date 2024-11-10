"use strict";
// Declare uniqueUrl outside the event listener to make it accessible in the whole script
let uniqueUrl = null;
window.addEventListener('DOMContentLoaded', () => {
    // Ensure the elements exist before attaching event listeners
    const share_btn = document.getElementById('share_btn');
    const anc = document.getElementById('anc');
    const print_btn = document.getElementById('print_btn');
    const edit_btn = document.getElementById('edit_btn');
    // Set up the profile image and personal information from localStorage
    const setText = (elementId, value) => {
        const element = document.getElementById(elementId);
        if (element && value) {
            element.textContent = value;
        }
    };
    const setImageSrc = (elementId, value) => {
        const element = document.getElementById(elementId); // Cast to HTMLImageElement
        if (element && value) {
            element.src = value;
            element.alt = 'Profile Picture';
        }
    };
    // Populate content from localStorage
    setImageSrc('profile_pic', localStorage.getItem('profile_pic'));
    setText('resName', localStorage.getItem('name'));
    setText('resDesig', localStorage.getItem('desig'));
    setText('resPhone', localStorage.getItem('phone'));
    setText('resEmail', localStorage.getItem('email'));
    setText('resAdd', localStorage.getItem('add'));
    setText('resPass', localStorage.getItem('pass'));
    setText('resDeg', localStorage.getItem('deg'));
    setText('resinsti', localStorage.getItem('uni'));
    setText('respass2', localStorage.getItem('pass1'));
    setText('resdeg2', localStorage.getItem('deg1'));
    setText('resInsti2', localStorage.getItem('uni2'));
    setText('reSskill1', localStorage.getItem('skill1'));
    setText('resSkill2', localStorage.getItem('skill2'));
    setText('resSkill3', localStorage.getItem('skill3'));
    setText('reslang', localStorage.getItem('lang'));
    setText('reslang2', localStorage.getItem('lang2'));
    setText('resStartYear', localStorage.getItem('stYear'));
    setText('resEndYear', localStorage.getItem('endYear'));
    setText('resCompany', localStorage.getItem('company'));
    setText('rescompLocation', localStorage.getItem('comlocation'));
    setText('resjobTitle', localStorage.getItem('jobtitle'));
    setText('resachv1', localStorage.getItem('achv1'));
    setText('resachv2', localStorage.getItem('achv2'));
    setText('resachv3', localStorage.getItem('achv3'));
    // Print button functionality
    if (print_btn) {
        print_btn.addEventListener('click', () => {
            window.print();
        });
    }
    // Edit button functionality (this may be redirected to another form or page for editing)
    if (edit_btn) {
        edit_btn.addEventListener('click', () => {
            window.history.back(); // Go back to the previous page (or you can redirect to an edit page)
        });
    }
    // Share button functionality to create a unique link
    if (share_btn && anc) {
        let name = localStorage.getItem('name');
        let userName = name ? name.toLowerCase().replace(/\s+/g, '-') : "user";
        let baseUrl = "http://127.0.0.1:5501/resume/resume.html";
        uniqueUrl = `${baseUrl}?username=${userName}`;
        share_btn.addEventListener('click', () => {
            if (uniqueUrl) {
                anc.setAttribute("href", uniqueUrl);
                console.log("Generated URL:", uniqueUrl); // Log the URL for debugging
            }
        });
    }
});
// Copy button functionality to copy the URL to clipboard
let copy_btn = document.getElementById("copy_btn");
copy_btn?.addEventListener("click", () => {
    if (uniqueUrl) {
        navigator.clipboard.writeText(uniqueUrl).then(() => {
            alert("URL copied to clipboard!");
        }).catch((error) => {
            console.error("Error copying URL: ", error);
        });
    }
});
