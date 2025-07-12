const btn = document.querySelector("#btn");



function changecolor(){

	const red = Math.floor(Math.random() * 256);
    console.log(red);
	const green = Math.floor(Math.random() * 256);

	const blue = Math.floor(Math.random() * 256);

	document.body.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
}
 
 btn.addEventListener('click',changecolor);
