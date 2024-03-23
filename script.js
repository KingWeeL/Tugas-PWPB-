document.getElementById('font-select').addEventListener('change', function() {
    var font = this.value;
    document.getElementById('text').style.fontFamily = font;
});

document.getElementById('color-select').addEventListener('change', function() {
    var color = this.value;
    document.getElementById('text').style.color = color;
});

document.getElementById('text-input').addEventListener('input', function() {
    var newText = this.value;
    document.getElementById('text').innerText = newText;
});
