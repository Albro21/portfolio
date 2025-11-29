const galleries = {
    1: [
        "assets/images/akrohr/screenshot1.png",
        "assets/images/akrohr/screenshot2.png",
        "assets/images/akrohr/screenshot3.png",
        "assets/images/akrohr/screenshot4.png",
        "assets/images/akrohr/screenshot5.png",
        "assets/images/akrohr/screenshot6.png",
        "assets/images/akrohr/screenshot7.png"
    ],
    2: [
        "assets/images/typing/screenshot1.avif",
        "assets/images/typing/screenshot2.avif",
        "assets/images/typing/screenshot3.avif",
        "assets/images/typing/screenshot4.avif",
        "assets/images/typing/screenshot5.avif"
    ]
};

const indices = {
    1: 0,
    2: 0
};

const animating = {
    1: false,
    2: false,
    drivingMastery: false
};

// Driving Mastery gallery
const drivingMasteryImages = [
    "assets/images/drivingmastery/learners1.png",
    "assets/images/drivingmastery/learners2.png",
    "assets/images/drivingmastery/learners3.png",
    "assets/images/drivingmastery/instructors1.png",
    "assets/images/drivingmastery/instructors2.png",
    "assets/images/drivingmastery/instructors3.png"
];
let drivingMasteryIndex = 0;

function updateGallery(id, direction) {
    if (animating[id]) return;
    animating[id] = true;
    
    const img = document.getElementById(`gallery${id}`);
    
    // Slide out
    img.style.transform = direction === 1 ? 'translateX(-30%)' : 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = galleries[id][indices[id]];
        
        // Position for slide in
        img.style.transition = 'none';
        img.style.transform = direction === 1 ? 'translateX(30%)' : 'translateX(-30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                animating[id] = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById(`counter${id}`).textContent = `${indices[id] + 1} / ${galleries[id].length}`;
}

function prevDrivingMasteryImage() {
    if (animating.drivingMastery) return;
    animating.drivingMastery = true;
    
    drivingMasteryIndex = (drivingMasteryIndex - 1 + drivingMasteryImages.length) % drivingMasteryImages.length;
    
    const img = document.getElementById('drivingMasteryGallery');
    
    // Slide out right
    img.style.transform = 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = drivingMasteryImages[drivingMasteryIndex];
        
        // Position for slide in from left
        img.style.transition = 'none';
        img.style.transform = 'translateX(-30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                animating.drivingMastery = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('drivingMasteryCounter').textContent = `${drivingMasteryIndex + 1} / ${drivingMasteryImages.length}`;
}

function nextDrivingMasteryImage() {
    if (animating.drivingMastery) return;
    animating.drivingMastery = true;
    
    drivingMasteryIndex = (drivingMasteryIndex + 1) % drivingMasteryImages.length;
    
    const img = document.getElementById('drivingMasteryGallery');
    
    // Slide out left
    img.style.transform = 'translateX(-30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = drivingMasteryImages[drivingMasteryIndex];
        
        // Position for slide in from right
        img.style.transition = 'none';
        img.style.transform = 'translateX(30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                animating.drivingMastery = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('drivingMasteryCounter').textContent = `${drivingMasteryIndex + 1} / ${drivingMasteryImages.length}`;
}

function prevImage(id) {
    if (animating[id]) return;
    indices[id] = (indices[id] - 1 + galleries[id].length) % galleries[id].length;
    updateGallery(id, -1);
}

function nextImage(id) {
    if (animating[id]) return;
    indices[id] = (indices[id] + 1) % galleries[id].length;
    updateGallery(id, 1);
}

// Driving Mastery Detail Page Gallery Navigation
let learnerIndex = 1;
const learnerTotal = 5;
let isLearnerAnimating = false;

function prevLearnerImage() {
    if (isLearnerAnimating) return;
    learnerIndex = learnerIndex === 1 ? learnerTotal : learnerIndex - 1;
    updateLearnerGallery(-1);
}

function nextLearnerImage() {
    if (isLearnerAnimating) return;
    learnerIndex = learnerIndex === learnerTotal ? 1 : learnerIndex + 1;
    updateLearnerGallery(1);
}

function updateLearnerGallery(direction) {
    isLearnerAnimating = true;
    const img = document.getElementById('learnerGallery');
    
    // Slide out
    img.style.transform = direction === 1 ? 'translateX(-30%)' : 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = `assets/images/drivingmastery/learners${learnerIndex}.png`;
        
        // Position for slide in
        img.style.transition = 'none';
        img.style.transform = direction === 1 ? 'translateX(30%)' : 'translateX(-30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                isLearnerAnimating = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('learnerCounter').textContent = `${learnerIndex} / ${learnerTotal}`;
}

// Instructor Gallery Navigation
let instructorIndex = 1;
const instructorTotal = 9;
let isInstructorAnimating = false;

function prevInstructorImage() {
    if (isInstructorAnimating) return;
    instructorIndex = instructorIndex === 1 ? instructorTotal : instructorIndex - 1;
    updateInstructorGallery(-1);
}

function nextInstructorImage() {
    if (isInstructorAnimating) return;
    instructorIndex = instructorIndex === instructorTotal ? 1 : instructorIndex + 1;
    updateInstructorGallery(1);
}

function updateInstructorGallery(direction) {
    isInstructorAnimating = true;
    const img = document.getElementById('instructorGallery');
    
    // Slide out
    img.style.transform = direction === 1 ? 'translateX(-30%)' : 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = `assets/images/drivingmastery/instructors${instructorIndex}.png`;
        
        // Position for slide in
        img.style.transition = 'none';
        img.style.transform = direction === 1 ? 'translateX(30%)' : 'translateX(-30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                isInstructorAnimating = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('instructorCounter').textContent = `${instructorIndex} / ${instructorTotal}`;
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Fade-in animation observer
    const fadeEls = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                el.style.animationDelay = `${i * 100}ms`;
                el.classList.add('fade-in-visible');
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.1,
    });

    fadeEls.forEach(el => observer.observe(el));

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        let current = '';
        const navbarHeight = 64; // Height of fixed navbar (h-16 = 4rem = 64px)
        const scrollPosition = window.scrollY + navbarHeight + 20;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('gradient-text');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('gradient-text');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7
    );
}

function checkSlideIn() {
    const elements = document.querySelectorAll('.about-paragraph');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('slide-in');
        }
    });
}

window.addEventListener('scroll', checkSlideIn);
window.addEventListener('load', checkSlideIn);

// AKRO HR detail page gallery
let akroHRIndex = 0;
let isAkroHRAnimating = false;

function prevAkroHRImage() {
    if (isAkroHRAnimating) return;
    isAkroHRAnimating = true;
    
    akroHRIndex = (akroHRIndex - 1 + 6) % 6;
    
    const img = document.getElementById('akrohrGallery');
    
    // Slide out right
    img.style.transform = 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = `assets/images/akrohr/screenshot${akroHRIndex + 1}.png`;
        
        // Position for slide in from left
        img.style.transition = 'none';
        img.style.transform = 'translateX(-30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                isAkroHRAnimating = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('akrohr-counter').textContent = `${akroHRIndex + 1} / 6`;
}

function nextAkroHRImage() {
    if (isAkroHRAnimating) return;
    isAkroHRAnimating = true;
    
    akroHRIndex = (akroHRIndex + 1) % 6;
    
    const img = document.getElementById('akrohrGallery');
    
    // Slide out left
    img.style.transform = 'translateX(-30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = `assets/images/akrohr/screenshot${akroHRIndex + 1}.png`;
        
        // Position for slide in from right
        img.style.transition = 'none';
        img.style.transform = 'translateX(30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                isAkroHRAnimating = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('akrohr-counter').textContent = `${akroHRIndex + 1} / 6`;
}


// SpeedTyping gallery for detail page
const speedTypingImages = [
    "assets/images/typing/screenshot1.avif",
    "assets/images/typing/screenshot2.avif",
    "assets/images/typing/screenshot3.avif",
    "assets/images/typing/screenshot4.avif",
    "assets/images/typing/screenshot5.avif"
];
let speedTypingIndex = 0;
let isSpeedTypingAnimating = false;

function prevSpeedTypingImage() {
    if (isSpeedTypingAnimating) return;
    isSpeedTypingAnimating = true;
    
    speedTypingIndex = (speedTypingIndex - 1 + speedTypingImages.length) % speedTypingImages.length;
    
    const img = document.getElementById('speedTypingGallery');
    
    // Slide out right
    img.style.transform = 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = speedTypingImages[speedTypingIndex];
        
        // Position for slide in from left
        img.style.transition = 'none';
        img.style.transform = 'translateX(-30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                isSpeedTypingAnimating = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('speedTypingCounter').textContent = `${speedTypingIndex + 1} / ${speedTypingImages.length}`;
}

function nextSpeedTypingImage() {
    if (isSpeedTypingAnimating) return;
    isSpeedTypingAnimating = true;
    
    speedTypingIndex = (speedTypingIndex + 1) % speedTypingImages.length;
    
    const img = document.getElementById('speedTypingGallery');
    
    // Slide out left
    img.style.transform = 'translateX(-30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image
        img.src = speedTypingImages[speedTypingIndex];
        
        // Position for slide in from right
        img.style.transition = 'none';
        img.style.transform = 'translateX(30%)';
        
        setTimeout(() => {
            // Slide in
            img.style.transition = 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out';
            img.style.transform = 'translateX(0)';
            img.style.opacity = '1';
            
            setTimeout(() => {
                isSpeedTypingAnimating = false;
            }, 500);
        }, 50);
    }, 500);
    
    document.getElementById('speedTypingCounter').textContent = `${speedTypingIndex + 1} / ${speedTypingImages.length}`;
}
