
(() => {
    // …

const btn = document.querySelector(".parkBtn")
const liforyellow = document.querySelectorAll("ul")



btn.addEventListener("click", () => {
   liforyellow.forEach((ul) =>{
       const Lastli = ul.querySelector("li:last-child");
       if (Lastli) {
           Lastli.style.backgroundColor = "yellow";
       }
   })
})


    const h3click = document.querySelector("h3")
h3click.addEventListener("click", (e) =>{
    const firstLi = document.querySelector("ul li:first-child");
    if (firstLi) {
        firstLi.style.fontWeight = "700"
    }
})

    const liall = document.querySelectorAll("li")
    liall.forEach((li) =>{

        li.addEventListener("click", () =>{

            const firstli = document.querySelector("ul li:first-child")
            firstli.style.color = "blue"
        })

    })

    const picchanger = document.querySelectorAll(".btn2")

    picchanger.forEach(btnn)
    btnn.addEventListener("click", () =>{

    })





})();