
let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
   try {
       let fact = await getFact();
      //  console.log(fact);

       let h3 = document.querySelector("h3");
       h3.innerText = fact;
   } catch (e) {
       console.log("error-", e);
       h3.innerText = "Error: Unable to fetch cat fact";
   }
});

let url = 'https://catfact.ninja/fact';

async function getFact() {
   try {
       let res = await axios.get(url);
    //    console.log(res);
       return res.data.fact;
   } catch (e) {
       console.log("error-", e);
       h3.innerText = "Error: Unable to fetch cat fact";
   }
}





function btnClick() {
   let button = document.getElementById("new-cat-btn");
   button.addEventListener("click", fetchCatImage);
}



// ......


