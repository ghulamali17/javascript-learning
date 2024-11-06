const url='https://cat-fact.herokuapp.com/facts';
let pp=document.querySelector('p')
let btn=document.querySelector('button')
 async function GetData(){
    let response=await fetch(url);
  let data= await response.json();

  btn.addEventListener('click', ()=>{
    pp.innerText= data[0].text
  })
 }
 GetData();