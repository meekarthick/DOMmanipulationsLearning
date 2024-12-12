//accsessing form Elements

const formEl=document.forms.feedbackform;// access using name 
// console.log(formEl[0].placeholder);
const btEl=formEl.but;
const nameEl = formEl.elements.input;
console.dir(nameEl);






nameEl.addEventListener("focus",(event)=>
{
    console.log("focused");
})

nameEl.addEventListener("blur",(event)=>
{
    console.log("blur");
})










// transferring formdata to server

const handleSubmit= (event)=>
{
    // 1.using query string
    event.preventDefault();
    const formData = new FormData(formEl);
    console.log([...formData.entries()]);
    formData.delete("type");  // it should be given within double quotes
    const data = [...formData.entries()];
    const querystring = data.map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join("#");
    console.log(querystring);
 
     // 2.using search URLparams

     const urlparaEl = new URLSearchParams(formData).toString();
     console.log(typeof(urlparaEl)); 

    // 3.using JSON


    event.preventDefault();
    
    const jsonV = JSON.stringify(Object.fromEntries(formData))
   console.log( jsonV);

   // sending data to server

   let xhr = new XMLHttpRequest();
   xhr.open("GET","https://reqres.in/api/users/2",true);
   xhr.onload = function()
   {
    console.log(xhr.responseText);
   };
   xhr.send();

   //using fetch api

   fetch("https://reqres.in/api/users/2",{

    method: "POST",
    header:{
         "ContentType": "application/JSON"
    },

   body:jsonV,
});
}



//formdata event


const handleFormdata = (event) =>
{
    const data=event.formData;

    data.append("key","karthi");
    console.log([...data.entries()]);
    console.log([...data.values()]);
    console.log(data);
    console.log("formdata fired");
}
formEl.addEventListener("formdata",handleFormdata);


// formEl.addEventListener("submit",handleSubmit);




// const typeEl=formEl.elements.type;
// const emailEl=formEl.elements.mail;
// const textEl=formEl.elements.description;
// const butEl=formEl.elements.but;
// console.log(nameEl,textEl,typeEl,emailEl,butEl);

// //we can achive this using OBJET DESTRUCTURING
// const {input,type,mail,description,but}=formEl.elements;
// console.log(input.placeholder);