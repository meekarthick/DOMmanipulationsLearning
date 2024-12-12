//event deligation
let selectedId;
const tbEl=document.querySelector("table");
//console.log(tbEl);
tbEl.addEventListener("click",(event) =>
{
    const target=event.target;
    const close=target.closest("tr");
  //  console.log(close);
    if(selectedId != undefined)
    {
        selectedId.classList.remove("active");
    }
    selectedId=close;
    close.classList.add("active");
    //console.log(target.parentNode.id);
    // if(target.tagName==="TH")
    // {
    //     return;
    // }
    // if(target.parentNode.id==="tr1")
    // {
    //     tr1.style.backgroundColor="red";
    //     //console.log("I am Tr 1");
    //     tr2.style.backgroundColor="unset";
    //     tr3.style.backgroundColor="unset";
    // }
    // else if(target.parentNode.id==="tr2")
    // {
    //     tr2.style.backgroundColor="blue";
    //     tr1.style.backgroundColor="unset";
    //     tr3.style.backgroundColor="unset";
    // }
    // else if(target.parentNode.id==="tr3")
    // {
    //     tr3.style.backgroundColor="yellow";
    //     tr1.style.backgroundColor="unset";
    //     tr2.style.backgroundColor="unset";
    // }
    // else
    // {
    //     console.log("nothing selected");
    // }
})
//     var child=target.parentNode.children[1];
//    console.log(child.innerText);
//     console.log("clicked",target.innerText);
// })

document.addEventListener("click",(event) =>
{
    const id=event.target.dataset.toggleId
     if(!id) return;

     const el=document.getElementById("form-data");
     el.hidden=!el.hidden;
})

// const formEl=document.querySelector("form");
// formEl.addEventListener("click",(event) =>
// {
//     event.preventDefault();
//     console.log(event.target);
// })
// document.addEventListener("click",(event) =>{
//     console.log(event.target);
// })