 
// // console.dir(fragment);
// let inputText=document.getElementById('inputBox');
//  let inputBtn=document.getElementById('inputButton');
//  let inputList=document.getElementById('food-list');
//  inputBtn.addEventListener("click",()=>
//  {
//     const box=document.createElement("li");

//  })


// // const a=["Apple", "Mango", "Orange",];
// // const fragment=document.createDocumentFragment();
// // for(let i=0;i<a.length;i++)
// // {
// //     const element=document.createElement("li");
// //     element.className="food-items";
// //     element.innerText=a[i];
// //     fragment.append(element);
// // }
// // inputList.append(fragment);

// // const el=document.createElement("li");
// // el.textContent="Hello";
// // inputList.insertAdjacentHTML("beforebegin","food-items");
// // console.dir(inputList);


// //By default the cloneNode only clones the parent element and its default by false 
// // so we should  mention it as true

// const clonedData=inputList.cloneNode(true);
// console.dir(clonedData);





















// // console.time("normal method");
//  for(let i=0;i<=1000;i++)
// {
//    const element=document.createElement("li");
//    element.className="food-items";
//    element.textContent=`Item ${i}`;
//    //fragment.append(element);
//    inputList.append(element);
// }
// // console.timeEnd("normal method");


// // console.time("normalmethod");
// // const fragment=document.createDocumentFragment();
// // for(let i=0;i<=1000;i++)
// // {
// //    const element=document.createElement("li");
// //    element.className="food-items";
// //    element.textContent=`Item ${i}`;
// //    fragment.append(element);
// // }
// // inputList.append(fragment);
// // console.timeEnd("normalmethod");



document.addEventListener("mouseover",()=>
{
   console.log("hello");
})