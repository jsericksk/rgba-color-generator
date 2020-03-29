function changeColors() {
    var currentColor = document.getElementById("currentColor");
    var currentColorHexValue = document.getElementById("currentColorHexValue");
    var redColorValue = document.getElementById("colorRed");
    var greenColorValue = document.getElementById("colorGreen");
    var blueColorValue = document.getElementById("colorBlue");
    var alphaColorValue = document.getElementById("colorAlpha");
	
    var red = document.getElementById("rangeRed").value;
    var green = document.getElementById("rangeGreen").value;
    var blue = document.getElementById("rangeBlue").value;
    var alpha = document.getElementById("rangeAlpha").value;
    if (alpha < 10) {
	alpha = "0." + alpha;
    } else {
	alpha = "1";
    }
	
    var generatedColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
    setTimeout("changeColors()", 100);
	
    currentColor.style.background = generatedColor;
    currentColorHexValue.innerHTML = convertRgbaToHex(red, green, blue, alpha);
    redColorValue.innerHTML = "R: " + red;
    greenColorValue.innerHTML = "G: " + green;
    blueColorValue.innerHTML = "B: " + blue;
    alphaColorValue.innerHTML = "A: " + alpha;
}

function convertRgbaToHex(red, green, blue, alpha) {
    alpha = Math.round(alpha * 255).toString(16);
    red = Number(red).toString(16);
    green = Number(green).toString(16);
    blue = Number(blue).toString(16);
	
    if (alpha.length < 2) {
	alpha = "0" + alpha;
    }
    if (red.length < 2) {
	red = "0" + red;
    }
    if (green.length < 2) {
	green = "0" + green;
    }
    if (blue.length < 2) {
	blue = "0" + blue;
    }
	
    var currentHexColor = alpha + red + blue + green;
    return "#" + currentHexColor.toUpperCase();
}
