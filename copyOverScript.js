function sync() {
    console.log('Attempting Sync')
    var line1 = document.getElementById('line1'),
        line1Copy = document.getElementById('line1Copy'),
        line2 = document.getElementById('line2'),
        line2Copy = document.getElementById('line2Copy'),
        line3 = document.getElementById('line3'),
        line3Copy = document.getElementById('line3Copy');
    line1Copy.innerHTML = line1.value;
    line2Copy.innerHTML = line2.value;
    line3Copy.innerHTML = line3.value;
}       