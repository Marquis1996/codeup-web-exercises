

(() => {

    const imgChange = document.querySelector("img")
    setTimeout(()=>{
        imgChange.setAttribute("src", "/img/johnwayne.jpeg")
        imgChange.setAttribute("alt", "johnwaynepic")


    }, 2000);


    const profileName = document.querySelector("#profile-name")
    setTimeout(() =>{
        profileName.innerHTML = "JOHN WAYNE"

    }, 4000)

    const profiledes = document.querySelector("#profile-desc")

    setTimeout(() =>{
        profiledes.classList.add("New-Class")


    }, 6000)

    const backcolor = document.querySelector("#profile-card")

    setInterval(() =>{
        backcolor.classList.add("newcolor")
        if (backcolor.getAttribute("class") === "newcolor"){
            backcolor.classList.add("newercolor")
            backcolor.setAttribute("class", "newercolor")
        }else {
            backcolor.setAttribute("class", "newcolor")
        }
    }, 6000)


        const toggleme = document.querySelector("#toggle-btn")
    const bodycolor = document.querySelector("body")


    toggleme.addEventListener("click", () =>{
        bodycolor.classList.toggle("changeme")
    })




})();


