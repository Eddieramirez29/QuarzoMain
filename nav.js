const QuarzoButtonMobile = document.getElementById("QuarzoButtonMobile");
const searchButtonMobile = document.getElementById("searchButtonMobile");
const addQuestionButtonMobile = document.getElementById("addQuestionButtonMobile");

//It reloads the page
QuarzoButtonMobile.addEventListener("click", function()
{
    location.reload();//Reload page
});

//1.-It hides QuarzoButtonMobile and addQuestionButtonMobile
searchButtonMobile.addEventListener("click", function()
{
    QuarzoButtonMobile.style.display = "none";
    searchButtonMobile.style.display = "none";
    addQuestionButtonMobile.style.display = "none";
});