const formEl = document.forms.feedbackform;

/*
const typeEl = formEl.elements.type;
console.log(typeEl);

const category = [...typeEl];
const inputtype = document.querySelector("#input-cat");
// const allCat = [...inputtype];
console.log(inputtype);
console.log(category);

inputtype.addEventListener("change",(event)=>
{
    console.log(event.target.value);
}) */


/* accessing checkbox

const chkEl = formEl.elements.validation;
console.dir(chkEl);
chkEl.checked = true;
chkEl.addEventListener("change",(event)=>
{

    console.log(event);
})
*/


//accessing select tag
const SelEl = formEl.elements.selectTag;
// SelEl[3].innerText = "Thai";
console.dir(SelEl);
// SelEl.value = "USA";
SelEl.addEventListener("change",(event)=>
{
    console.log(event.target.options[event.target.selectedIndex].text); // valid method
   console.log(event.target.inerText);
})

// adding options 
// Method .1
const opel =  document.createElement("option");
opel.value = "TN";
opel.text = "Tamilan";

SelEl.add(opel);

//Method-2

const opEl2 = new Option("Ilangai","LANKA");
SelEl.add(opEl2, 3);

SelEl.remove(4);