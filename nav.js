const QuarzoButtonMobile = document.getElementById("QuarzoButtonMobile");
const searchButton = document.getElementById("searchButton");
const addQuestionButtonMobile = document.getElementById("addQuestionButtonMobile");

//It reloads the page
QuarzoButtonMobile.addEventListener("click", function()
{
    location.reload();//Reload page
});

//1.-It hides QuarzoButtonMobile, searchButton and addQuestionButtonMobile
searchButton.addEventListener("click", function()
{
    QuarzoButtonMobile.style.display = "none";
    searchButton.style.display = "none";
    addQuestionButtonMobile.style.display = "none";
});