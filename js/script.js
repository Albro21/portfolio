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
    ]
};

const indices = {
    1: 0,
    2: 0
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