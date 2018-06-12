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
projectOneImages = ["https://images.pexels.com/photos/6171/hairstyle-hair-wedding-bride.jpg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/279349/pexels-photo-279349.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/1152661/pexels-photo-1152661.jpeg?auto=compress&cs=tinysrgb&h=350"]; 
projectTwoImages = ["https://images.pexels.com/photos/243914/pexels-photo-243914.jpeg?auto=compress&cs=tinysrgb&h=350", 
"https://images.pexels.com/photos/604532/pexels-photo-604532.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350"]; 
projectThreeImages = ["https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/62321/kitten-cat-fluffy-cat-cute-62321.jpeg?auto=compress&cs=tinysrgb&h=350"]; 
projectFourImages = ["https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/33537/cat-animal-cat-portrait-mackerel.jpg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&h=350"]; 
projectFiveImages = ["https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/37337/cat-silhouette-cats-silhouette-cat-s-eyes.jpg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/978555/pexels-photo-978555.jpeg?auto=compress&cs=tinysrgb&h=350"]; 
projectSixImages = ["https://images.pexels.com/photos/137049/pexels-photo-137049.jpeg?auto=compress&cs=tinysrgb&h=350",
"https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&h=350", 
"https://images.pexels.com/photos/59945/strawberry-fruit-delicious-red-59945.jpeg?auto=compress&cs=tinysrgb&h=350"]; 

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

