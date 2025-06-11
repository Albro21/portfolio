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
        "images/timetracker/screenshot1.avif",
        "images/timetracker/screenshot2.avif",
        "images/timetracker/screenshot3.avif",
        "images/timetracker/screenshot4.avif",
        "images/timetracker/screenshot5.avif",
        "images/timetracker/screenshot6.avif"
    ],
    2: [
        "images/typing/screenshot1.avif",
        "images/typing/screenshot2.avif",
        "images/typing/screenshot3.avif",
        "images/typing/screenshot4.avif",
        "images/typing/screenshot5.avif"
    ],
    3: [
        "images/parsers/screenshot1.avif"
    ]
};

const indices = {
    1: 0,
    2: 0,
    3: 0
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