/// Scroll To Element 
/* Accomplished  using CSS + HTML (scroll-container & scroll-page) */ 

/// Affect Navigation + Show "Up" Icon  ["Projects" + "Contact"] 
let upIcon = document.querySelector("#up-icon"); 
let projectsLink = document.querySelector("#projects-link"); 
let contactLink = document.querySelector("#contact-link"); 

upIcon.style.cssText = "visibility:hidden;"; 

window.onscroll = () => { 
    // let scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop; 
    let scrollPosition = window.scrollY || document.documentElement.scrollTop; 
    if (scrollPosition >= 10) { 
        upIcon.style.cssText = "visibility:visible;"; 
    } else { 
        upIcon.style.cssText = "visibility:hidden;";         
    }

    if (scrollPosition >= 280) { // has only been tested on desktop using Opera browser so far  
        projectsLink.style.cssText = "font-size:1.3em; opacity:0.7;";  

        contactLink.style.cssText = "font-size:2em; opacity:1;";  
    } else { 
        projectsLink.style.cssText = "font-size:2em; opacity:1;";  
    } 

    if (scrollPosition >= 880) { // has only been tested on desktop using Opera browser so far  
        contactLink.style.cssText = "font-size:1.3em; opacity:0.7;";  

        projectsLink.style.cssText = "font-size:2em; opacity:1;";  
    } else { 
        contactLink.style.cssText = "font-size:2em; opacity:1;";  
    } 
} 

// Show Up Icon when "Projects" or "Contact" anchor tsgs are clicked 
document.querySelector("#projects-link").addEventListener("click", () => { 
    upIcon.style.cssText = "visibility:visible;"; 
}); 
document.querySelector("#contact-link").addEventListener("click", () => { 
    upIcon.style.cssText = "visibility:visible;"; 
}); 

/// Projects 
let projectOneImages, projectTwoImages, projectThreeImages, projectFourImages, projectFiveImages, projectSixImages; 
projectOneImages = ["images/drums-view.PNG",
"images/post-drum.PNG",
"images/drumtree-signin.PNG"]; 
projectTwoImages = ["images/restauranta-top.png", 
"images/restauranta-dishes.PNG",
"images/restauranta-contact.PNG"]; 
projectThreeImages = ["images/section1.PNG",
"images/section2.PNG",
"images/landing.PNG"]; 
projectFourImages = ["images/search.PNG",
"images/kits.PNG",
"images/kit-submission.PNG"]; 
projectFiveImages = ["images/editori2.png",
"images/editori2.png",
"images/editori1.png"]; 
projectSixImages = ["images/pokemon-to-catch.PNG",
"images/pokemon-to-catch.PNG", 
"images/pokemon-to-catch2.PNG"]; 

let imageNumber = 0; 
function changeImage() { 
    if (imageNumber < 3) { 
    projectOne.src = projectOneImages[imageNumber]; 
    projectTwo.src = projectTwoImages[imageNumber]; 
    projectThree.src = projectThreeImages[imageNumber]; 
    projectFour.src = projectFourImages[imageNumber]; 
    projectFive.src = projectFiveImages[imageNumber]; 
    projectSix.src = projectSixImages[imageNumber]; 
    } else { 
        imageNumber = -1; 
    }
    imageNumber += 1; 
} 

document.addEventListener("DOMContentLoaded", () => {
    projectOne = document.querySelector("#project-1").querySelector("img"); 
    projectTwo = document.querySelector("#project-2").querySelector("img"); 
    projectThree = document.querySelector("#project-3").querySelector("img"); 
    projectFour = document.querySelector("#project-4").querySelector("img"); 
    projectFive = document.querySelector("#project-5").querySelector("img"); 
    projectSix = document.querySelector("#project-6").querySelector("img"); 

    setInterval(changeImage, 1200); 
});  


/// Contact Form 
// Initialize Firebase
let config = {
apiKey: "AIzaSyAVMWjsSGuU3uYpzV8q7kzUp4FoSTJDgJw",
authDomain: "portfolio-website-7c83b.firebaseapp.com",
databaseURL: "https://portfolio-website-7c83b.firebaseio.com",
projectId: "portfolio-website-7c83b",
storageBucket: "",
messagingSenderId: "420237444821"
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref("emails"); 
let submit = document.querySelector("#submit"); 
let fullnameField = document.querySelector("#fullname"); 
let subjectField = documnet.querySelector("#subject"); 
let emailField = documnet.querySelector("#email"); 

submit.addEventListener("click", e => { 
    e.preventDefault(); 
    let email = { 
        name: fullnameField.value, 
        subect: subjectField.vale, 
        body: emailField.value // the email 
    } 
    let ref = firebaseRef.push(); 
    ref.set(email);      
}); 
