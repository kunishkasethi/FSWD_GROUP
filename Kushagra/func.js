// Get all necessary elements
const colorButtons = document.querySelectorAll('.color-btn');
const body = document.querySelector('.body');
const backpack = document.querySelector('.backpack');
const legs = document.querySelectorAll('.leg');

// Add click event listener to each color button
colorButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all buttons
        colorButtons.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get colors from data attributes
        const mainColor = this.getAttribute('data-color');
        const darkColor = this.getAttribute('data-dark');
        
        // Apply main color to body
        body.style.background = mainColor;
        
        // Apply darker shade to backpack
        backpack.style.background = darkColor;
        
        // Apply main color to legs
        legs.forEach(leg => {
            leg.style.background = mainColor;
        });
        
        // Update leg pseudo-element colors dynamically
        updateLegFootColor(mainColor);
    });
});

// Function to update the ::after pseudo-element color of legs
function updateLegFootColor(color) {
    // Remove existing dynamic style if present
    const existingStyle = document.getElementById('dynamic-leg-style');
    if (existingStyle) {
        existingStyle.remove();
    }
    
    // Create new style element
    const style = document.createElement('style');
    style.id = 'dynamic-leg-style';
    style.textContent = `.leg::after { background: ${color} !important; }`;
    
    // Append to head
    document.head.appendChild(style);
}