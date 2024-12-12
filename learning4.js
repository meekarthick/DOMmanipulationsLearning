// document.addEventListener("mouseenter",(event) =>
// {
//     //console.log("clicked at",event);
// })

// document.addEventListener("keypress",(event) =>
// {
//     console.log(event);
// })





//handling key events

const inputBox = document.getElementById("inputBox");
const inpBtn = document.getElementById("inputButton");
const ulEl=document.getElementById("food-list");


function handlekey()
{
    const liEl = document.createElement("li");
    const division = document.createElement("div");
    liEl.className="food-items";
    division.textContent=inputBox.value ;
    liEl.append(division);
    ulEl.append(liEl);
}

inpBtn.addEventListener("click", handlekey);
inputBox.addEventListener("keyup",(event) =>
{
    
    if(event.key==="Enter")
    {
        handlekey();
    }
});