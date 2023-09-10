// Copy over text from input to background element
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

// Take screenshot of element using HTML2canvas library
function takeShot() {
  // Enable display of background text elements
  document.getElementById('line1Copy').style.visibility = "visible";
  document.getElementById('line2Copy').style.visibility = "visible";
  document.getElementById('line3Copy').style.visibility = "visible";
  // Clear old output if present
  document.getElementById('output').innerHTML = "";
let div =
    document.getElementById('signboard');

// Take screenshot
html2canvas(div,{backgroundColor:null}).then(
    function (canvas) {
        document
        .getElementById('output')
        .appendChild(canvas);
    })
// Rehide background text elements
document.getElementById('line1Copy').style.visibility = "hidden";
document.getElementById('line2Copy').style.visibility = "hidden";
document.getElementById('line3Copy').style.visibility = "hidden";
}
