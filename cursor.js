document.addEventListener('mousemove', (event) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
});
