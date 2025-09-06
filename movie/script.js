  const title = document.querySelector('#title');
const date = document.querySelector('#date');
const img = document.querySelector('#img');
const exp = document.querySelector('#exp');
    const input = document.querySelector('#input');
    
const fullbox = document.querySelector('#fullbox');


function movie(){

    let tarikh = (input.value);
console.log(tarikh);
fetch(`https://api.nasa.gov/planetary/apod?api_key=TDpYCWQ7mBUqrVfAhtYDWhUFoIHZgJNxhQOHU6sJ&date=${tarikh}`)
.then((rev)=> {return rev.json()})
.then((data)=>{
    title.innerText = data.title ;
    date.innerText = "Date :" + data.date ;
 const photo = document.createElement("img");
    photo.src = data.url;
    date.appendChild(photo);
       exp.innerText = data.explanation ;
  }
)

}

movie();
btn.addEventListener("click",movie)
        