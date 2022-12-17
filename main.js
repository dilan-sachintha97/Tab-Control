
function showTab(tabNumber){
    console.log(tabNumber)
    //remove exiting show content-1
    document.getElementsByClassName("show")[0].classList.add("hide");
    document.getElementsByClassName("show")[0].classList.remove("show")

    //show clicked tab content
    document.getElementById("tab-content-"+tabNumber).classList.add("show")
    document.getElementById("tab-content-"+tabNumber).classList.remove("hide")

    //change color of tab number
    document.getElementsByClassName("active")[0].classList.remove("active")
    document.getElementById("tab-"+tabNumber).classList.add("active")



}