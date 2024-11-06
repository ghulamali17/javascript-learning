function colorGen(){
    let color="0123456789ABCDEF"
    let hashh="#"
    for(let i=0; i<6;i++){
        hashh+=Math.floor(Math.random()*10)
    }
    return hashh;
}

let start=document.getElementById("start");
let intervalId;
start.addEventListener('click', ()=>{
 intervalId= setInterval(changBgColor,1000)
   function changBgColor(){
    document.body.style.backgroundColor =colorGen();
   }
   
})

let stop=document.getElementById("stop");
stop.addEventListener('click', ()=>{
   clearInterval(intervalId);
   
});