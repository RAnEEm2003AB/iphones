async function iphone(){
const Response= await fetch("https://dummyjson.com/products");
const posts= await Response .json();
const products= posts.products;

const result = products.map(function(ele){
    
    return `
    <p>======================================================</p>
     <h2>${ele.title}</h2>
     <h4> Price : ${ele.price}</h4>
     <h5> Brand : ${ele.brand}</h6>
     <img  src="${ele.thumbnail}"/>
      `;
} ).join("");

document.querySelector(".products").innerHTML=result;
}
iphone();