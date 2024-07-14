// Add event listeners to the action divs
document.querySelectorAll('.action').forEach(action => {
    action.addEventListener('click', () => {
        alert('You clicked on an action!');
    });
});