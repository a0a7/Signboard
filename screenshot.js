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
