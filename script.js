function perform() {
    const color = '#' + Math.random().toString(16).substring(9);
    document.getElementById('flipper').style.color = color;
}