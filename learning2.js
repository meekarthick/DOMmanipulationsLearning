// const formEl=document.querySelector("form");
// const divEl=document.querySelector("form div");
// const pEl=document.querySelector("form div p");

// formEl.addEventListener("click",(event) =>{
//     alert("This form element");
   
// })

// divEl.addEventListener("click",(event) =>{
//     alert("This div element");
//     event.stopImmediatePropagation();
//  prevents an object to move from its current obj that is it wont go to parentEle

// })

// pEl.addEventListener("click",(e) =>{
//     alert("This p element");
//     console.log(event);
// })


// divEl.addEventListener("click",(event) =>{
//     alert("This is another div element");

// })


// for(let elm of document.querySelectorAll("form,form *"))
// {
//     capturing event
//     elm.addEventListener("click",() =>
//     {
//        console.log(`Capturing event ${elm.tagName}`);
//     }, {capture:true})

    

//     elm.addEventListener("click", () =>
//     {
//         console.log(`Bubbling event ${elm.tagName}`);
//     })
// }

// preventing event default
 

// const formEl=document.querySelector("form");
// const inpEl=document.querySelector("form input");
// const chkEl=document.querySelector("form #terms");
// const button=document.querySelector("form button");
//  button.addEventListener("click",(event) =>
//  {

//   if(!chkEl.checked)
//   {
//     alert("Check the conditions");
//     return;
//   }


//     console.log(inpEl.value,chkEl.checked);
//     event.preventDefault();
//     console.log(event.defaultPrevented);
//  })

