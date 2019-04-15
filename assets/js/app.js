'use strict';
{
// const btn= document.getElementById('btn');
// const results = [`大吉`,'吉','中吉','小吉','凶','大吉','大吉',];
  
  //  btn.addEventListener('click',() => {
  //   const n = math.random();
  //    if(n < 0.3) {
  //     btn.textContent= `大吉`;    
  //   }else 
  //    if(n < 0.45) {
  //      btn.textContent = `吉`;
  //   }else 
  //    if( n < 0.60) {
  //     btn.textContent = `中吉`;
  //   }else
  //    if (n < 0.85) {
  //     btn.textContent = `小吉`;
  //   }else{
  //     btn.textContent = `吉`;
  //   }

  // });
  // let btn = document.getElementById(`btn`);
   


 btn.addEventListener('click',() => {
   const results = [`大吉`,'吉','中吉','小吉','凶','大吉','大吉'];
    const n = Math.floor(Math.random() * results.length);
     result.textContent = results[n];
    //  document.getElementById(`results`)  でも可能
    // innerHTMLで出力のやり方もある
    
 });

   
   
   btn.addEventListener('mousedown',() => {
   btn.classList.add('pressed');
   });

   btn.addEventListener('mouseup',() => {
   btn.classList.remove('pressed');
 });
}
