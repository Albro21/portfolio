const galleries = {
    1: [
        "assets/images/akrohr/screenshot1",
        "assets/images/akrohr/screenshot2",
        "assets/images/akrohr/screenshot3",
        "assets/images/akrohr/screenshot4",
        "assets/images/akrohr/screenshot5",
        "assets/images/akrohr/screenshot6",
        "assets/images/akrohr/screenshot7"
    ],
    2: [
        "assets/images/typing/screenshot1",
        "assets/images/typing/screenshot2",
        "assets/images/typing/screenshot3",
        "assets/images/typing/screenshot4",
        "assets/images/typing/screenshot5"
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
    "assets/images/drivingmastery/learners1",
    "assets/images/drivingmastery/learners2",
    "assets/images/drivingmastery/learners3",
    "assets/images/drivingmastery/learners4",
    "assets/images/drivingmastery/learners5",
    "assets/images/drivingmastery/instructors1"
];
let drivingMasteryIndex = 0;

function updateGallery(id, direction) {
    if (animating[id]) return;
    animating[id] = true;
    
    const picture = document.getElementById(`gallery${id}`).parentElement;
    const img = document.getElementById(`gallery${id}`);
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out
    img.style.transform = direction === 1 ? 'translateX(-30%)' : 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        const basePath = galleries[id][indices[id]];
        if (source) {
            source.srcset = `${basePath}.avif 2235w`;
        }
        img.src = `${basePath}.png`;
        img.srcset = `${basePath}.png 2235w`;
        
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
    
    const picture = document.getElementById('drivingMasteryGallery').parentElement;
    const img = document.getElementById('drivingMasteryGallery');
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out right
    img.style.transform = 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        const basePath = drivingMasteryImages[drivingMasteryIndex];
        if (source) {
            source.srcset = `${basePath}.avif 2235w`;
        }
        img.src = `${basePath}.png`;
        img.srcset = `${basePath}.png 2235w`;
        
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
    
    const picture = document.getElementById('drivingMasteryGallery').parentElement;
    const img = document.getElementById('drivingMasteryGallery');
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out left
    img.style.transform = 'translateX(-30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        const basePath = drivingMasteryImages[drivingMasteryIndex];
        if (source) {
            source.srcset = `${basePath}.avif 2235w`;
        }
        img.src = `${basePath}.png`;
        img.srcset = `${basePath}.png 2235w`;
        
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
    const picture = document.getElementById('learnerGallery').parentElement;
    const img = document.getElementById('learnerGallery');
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out
    img.style.transform = direction === 1 ? 'translateX(-30%)' : 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        if (source) {
            source.srcset = `assets/images/drivingmastery/learners${learnerIndex}.avif`;
        }
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
    const picture = document.getElementById('instructorGallery').parentElement;
    const img = document.getElementById('instructorGallery');
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out
    img.style.transform = direction === 1 ? 'translateX(-30%)' : 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        if (source) {
            source.srcset = `assets/images/drivingmastery/instructors${instructorIndex}.avif`;
        }
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
    
    akroHRIndex = (akroHRIndex - 1 + 7) % 7;
    
    const picture = document.getElementById('akrohrGallery').parentElement;
    const img = document.getElementById('akrohrGallery');
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out right
    img.style.transform = 'translateX(30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        if (source) {
            source.srcset = `assets/images/akrohr/screenshot${akroHRIndex + 1}.avif`;
        }
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
    
    document.getElementById('akrohr-counter').textContent = `${akroHRIndex + 1} / 7`;
}

function nextAkroHRImage() {
    if (isAkroHRAnimating) return;
    isAkroHRAnimating = true;
    
    akroHRIndex = (akroHRIndex + 1) % 7;
    
    const picture = document.getElementById('akrohrGallery').parentElement;
    const img = document.getElementById('akrohrGallery');
    const source = picture.querySelector('source[type="image/avif"]');
    
    // Slide out left
    img.style.transform = 'translateX(-30%)';
    img.style.opacity = '0';
    
    setTimeout(() => {
        // Change image with both formats
        if (source) {
            source.srcset = `assets/images/akrohr/screenshot${akroHRIndex + 1}.avif`;
        }
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
    
    document.getElementById('akrohr-counter').textContent = `${akroHRIndex + 1} / 7`;
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
