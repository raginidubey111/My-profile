console.log("hii");
      
const card = document.querySelector('#box');

       
        fetch(`http://192.168.1.3:8000/movieapi/?format=json`)
        .then((data)=>{ return data.json()})
        .then((info)=>{
       
       for(let i =0;i<= info.length;i++){
       
        const badadiv = document.createElement("div");					
        card.appendChild(badadiv);
        badadiv.classList.add("main");


       	const photo = document.createElement("img");
       	 photo.src = info[i].image;
       	 badadiv.appendChild(photo);
          photo.classList.add("pho");

       	const name = document.createElement("h2");
       	badadiv.appendChild(name);
       	name.innerText = " 🎬 NAME :" + info[i].name;


       	const rate = document.createElement("h3");
       	badadiv.appendChild(rate);
       	rate.innerText = "⭐ RATE :" + info[i].rating ;


       	const dis = document.createElement("h3");
       	badadiv.appendChild(dis);
       	dis.innerText = "📓 DESCRIPTION :" + info[i].description;




}

     
       
        });