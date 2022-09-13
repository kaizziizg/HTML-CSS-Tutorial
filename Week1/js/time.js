let TimeElement = document.getElementById("Time");
// 時間
function TimeSetter() {
	let timestamp = Date.now();
	let date = new Date(timestamp).toString().toLocaleString();
	TimeElement.innerText = date;
}
TimeSetter();
setInterval(TimeSetter, 1000);
// 波浪文字
let content = document.getElementById("Hello");
let size = 1;
let msg = "";
let color = [
	"linear-gradient(to top, black, gray, black, gray)",
	"linear-gradient(to top, gray, black, gray, black)",
];
let aa = ["red", "blue", "green"];
async function sleep(ms = 0) {
	return new Promise((r) => setTimeout(r, ms));
}
async function TextColor() {
	while (1) {
		content.style["background"] = color[size % 3];
		content.style["-webkit-background-clip"] = "text";
		content.style["-webkit-text-fill-color"] = "transparent";
		size += 1;
		await sleep(500);
	}
}

function TextWave(obj, n) {
	var theText = "Hello, HTML & CSS & JavaScript!";
	var output = "";
	for (var i = 0; i < theText.length; i++) {
		var size =
			60 * Math.abs(Math.sin(((i + n) * 3.14) / theText.length)) + 10;
		output +=
			"<span style='font-size:" +
			size +
			"px;color:green'>" +
			theText.substring(i, i + 1) +
			"</span>";
	}
	obj.innerHTML = output;
	if (n > theText.length) {
		n = 0;
	} else {
		n++;
	}

	setTimeout(function () {
		TextWave(obj, n);
	}, 100);
}

TextColor();
TextWave(content, 0);
