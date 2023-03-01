const load =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data=> showData(data))
    .catch(error => console.log(error))
}
// console.log(90);

const showData = (data)=>{
    // console.log(data.slice(0,5));
    for(const d of data.slice(0,5)){
        // console.log(d);
        const conatainer = document.getElementById('post-info')
        const div=document.createElement('div')
        div.innerHTML=`
        
        <h1 class="text-3xl text-center" > title: ${d.title} </h1>

        `
        conatainer.appendChild(div)
    }
}

load()

