const mem=()=>{
    fetch('https://meme-api.com/gimme/25')
    .then(res=>res.json())
    .then(data=>showAll(data.memes))
}
const showAll =(data)=>{
    // console.log(data.memes[4]);
    for(const d of data.slice(0,8)){
        console.log(d);

        const cobtainer = document.getElementById('section');
        const div = document.createElement('div')
        div.innerHTML=`
        
        <div class="card w-full glass shadow-2xl">
        <figure><img class="w-full h-64" src="${d.url}" alt="car!"/></figure>
        
          </div>
        `
        cobtainer.appendChild(div)
    }


}
mem()