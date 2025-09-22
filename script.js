function mouseover(name) {
    document.getElementById("Info").innerHTML = name;
    
    // Show highlight for specific area
    hideAllHighlights();
    
    if (name === 'bridge') {
        showHighlight('bridge-highlight', [160,192,156,119,176,84,272,35,292,53,353,53,516,136,311,236,232,189,192,213]);
    } else if (name === 'Front Beta Turret') {
        showHighlight('beta-highlight', [228,194,312,237,256,268,269,318,236,394,160,345,140,233]);
    } else if (name === 'Front Alpha Turret') {
        showHighlight('alpha-highlight', [516,132,610,90,551,62,521,46,492,54,439,38,471,64,435,86]);
    }
}

function mouseout() {
    hideAllHighlights();
}

function showHighlight(elementId, coords) {
    const highlight = document.getElementById(elementId);
    const image = document.querySelector('.responsive-image');
    
    if (!highlight || !image) return;
    
    // Calculate bounding box from polygon coordinates
    const minX = Math.min(...coords.filter((_, i) => i % 2 === 0));
    const maxX = Math.max(...coords.filter((_, i) => i % 2 === 0));
    const minY = Math.min(...coords.filter((_, i) => i % 2 === 1));
    const maxY = Math.max(...coords.filter((_, i) => i % 2 === 1));
    
    // Scale coordinates based on current image size
    const originalWidth = 1000; // Your original image width
    const currentWidth = image.offsetWidth;
    const scale = currentWidth / originalWidth;
    
    highlight.style.left = (minX * scale) + 'px';
    highlight.style.top = (minY * scale) + 'px';
    highlight.style.width = ((maxX - minX) * scale) + 'px';
    highlight.style.height = ((maxY - minY) * scale) + 'px';
    highlight.classList.add('active');
}

function hideAllHighlights() {
    const highlights = document.querySelectorAll('.area-highlight');
    highlights.forEach(highlight => {
        highlight.classList.remove('active');
    });
}

// Scale highlights on window resize
window.addEventListener('resize', () => {
    hideAllHighlights();
});