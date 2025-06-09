function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? null : 'light';

    if (newTheme) {
        document.documentElement.setAttribute('data-theme', newTheme);
    } else {
        document.documentElement.removeAttribute('data-theme');
    }

    localStorage.setItem('theme', newTheme || 'dark');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
}


const galleries = {
    1: [
        "images/timetracker/screenshot1.png",
        "images/timetracker/screenshot2.png",
        "images/timetracker/screenshot3.png",
        "images/timetracker/screenshot4.png",
        "images/timetracker/screenshot5.png",
        "images/timetracker/screenshot6.png"
    ],
    2: [
        "images/typing/screenshot1.png",
        "images/typing/screenshot2.png"
    ],
    3: [
        "images/ads/screenshot1.png",
        "images/ads/screenshot2.png"
    ],
    4: [
        "images/parsers/screenshot1.png",
    ]
};

const indices = {
    1: 0,
    2: 0,
    3: 0,
    4: 0
};

function showImage(id) {
    document.getElementById(`gallery${id}`).src = galleries[id][indices[id]];
}

function prevImage(id) {
    indices[id] = (indices[id] - 1 + galleries[id].length) % galleries[id].length;
    showImage(id);
}

function nextImage(id) {
    indices[id] = (indices[id] + 1) % galleries[id].length;
    showImage(id);
}