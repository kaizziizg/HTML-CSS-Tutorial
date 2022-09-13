const xinBaoSize = 10;
let currnetImg = 0;
let xinBaoElement = document.getElementById("xinbao");
let xinBaoTimesElement = document.getElementById("xinbaoTimes");
let xinbaoTimes = 0;
function changeImg() {
	if (currnetImg > 9) currnetImg = 0;
	let imgsrc = "./img/xinbao-000" + currnetImg + ".jpg";
	xinBaoElement.setAttribute("src", imgsrc);
	currnetImg++;
	xinbaoTimes++;
	xinBaoTimesElement.innerText = "十秒星爆了　" + xinbaoTimes + "　次";
}
