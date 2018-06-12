/// Scroll-to-element 
/* 
Uses: Easyscroll - https://github.com/tarun-dugar/easy-scroll 
Source: <script src="https://unpkg.com/easy-scroll"></script> 
*/ 
let bodyRect = document.body.getBoundingClientRect(); 

// Projects  Div Position 
let projectsElement = document.querySelector(".projects").getBoundingClientRect(); 
let projectsOffset = projectsElement.top - bodyRect.top; 

// Contact Div Position 
let contactElement = document.querySelector(".contact").getBoundingClientRect(); 
let contactOffset = contactElement.top - bodyRect.top; 

document.querySelector("#up-icon").addEventListener("click", e => { 
    easyScroll({ 
        'scrollableDomEle': window,
        'direction': 'top', 
        'duration': 2000, 
        'easingPreset': 'easeInQuad',
        'scrollAmount': 0 
    }); 
}); 

document.querySelector("#projects-link").addEventListener("click", e => { 
    easyScroll({ 
        'scrollableDomEle': window,
        'direction': 'up', 
        'duration': 2000, 
        'easingPreset': 'easeInQuad',
        'scrollAmount': projectsOffset
    }); 
}); 

document.querySelector("#projects-link").addEventListener("click", e => { 
    easyScroll({ 
        'scrollableDomEle': window,
        'direction': 'bottom', 
        'duration': 2000, 
        'easingPreset': 'easeInQuad',
        'scrollAmount': projectsOffset 
    }); 
}); 

document.querySelector("#contact-link").addEventListener("click", e => { 
    easyScroll({ 
        'scrollableDomEle': window,
        'direction': 'bottom', 
        'duration': 2000, 
        'easingPreset': 'easeInQuad',
        'scrollAmount': contactOffset 
    }); 
}); 

