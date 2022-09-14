const xinBaoSize = 10;
let currnetImg = 0;
let xinBaoElement = document.getElementById("xinbao");
let xinBaoTimesElement = document.getElementById("xinbaoTimes");
let xinbaoTimes = 0;

var images = [];

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//-- usage --//
preload(
    "./img/xinbao-0000.jpg",
    "./img/xinbao-0001.jpg",
	"./img/xinbao-0002.jpg",
	"./img/xinbao-0003.jpg",
	"./img/xinbao-0004.jpg",
	"./img/xinbao-0005.jpg",
	"./img/xinbao-0006.jpg",
	"./img/xinbao-0007.jpg",
	"./img/xinbao-0008.jpg",
	"./img/xinbao-0009.jpg",
)



function changeImg() {
	if (currnetImg > 9) currnetImg = 0;
	let imgsrc = "./img/xinbao-000" + currnetImg + ".jpg";
	xinBaoElement.setAttribute("src", imgsrc);
	currnetImg++;
	xinbaoTimes++;
	xinBaoTimesElement.innerText = "十秒星爆了　" + xinbaoTimes + "　次";
}
