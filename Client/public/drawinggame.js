const canvas = document.getElementById('drawingArea');

const pallet = [
	"001219",
	"005f73",
	"0a9396",
	"94d2bd",
	"e9d8a6",
	"ee9b00",
	"ca6702",
	"bb3e03",
	"ae2012",
	"9b2226",
];

function hexToRgb(hex) {
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    return r + "," + g + "," + b;
}

const mc1 = 155;
const mc2 = 133;
const d = [mc1, mc1,mc2,mc1,mc2,mc1,mc2,mc1,mc1, mc1,mc2,mc1];
const mockData = new Uint8ClampedArray(d);
const imageData = new ImageData(mockData, 3);
const ctx = canvas.getContext('2d');
ctx.putImageData(imageData, 0, 0);
