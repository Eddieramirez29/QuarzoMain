const QuarzoButtonMobile = document.getElementById("QuarzoButtonMobile");
const searchButton = document.getElementById("searchButton");
const addQuestionButtonMobile = document.getElementById("addQuestionButtonMobile");

const arrayButtons = [
    {buttonMobile: "HomeButtonMobile"},
    {buttonMobile: "ListButtonMobile"},
    {buttonMobile: "createQuestionButtonMobile"},
    {buttonMobile: "SpacesButtonMobile"},
    {buttonMobile: "NotificationsButtonsMobile"},
    {buttonMobile: "ProfileButtonMobile"},
    {buttonMobile: "LanguagesButtonMobile"}
];



//It reloads the page
QuarzoButtonMobile.addEventListener("click", function()
{
    location.reload();//Reload page
});

//1.-It hides all mobile buttons
searchButton.addEventListener("click", function()
{
    QuarzoButtonMobile.style.display = "none";
    searchButton.style.display = "none";
    addQuestionButtonMobile.style.display = "none";

    arrayButtons.forEach(function(element)
    {
        const buttonId = element.buttonMobile;
        const button = document.getElementById(buttonId);

        if (button)
        {
            button.style.display = "none";
        } 
        else
        {
            console.warn(`Botón con ID "${buttonId}" no encontrado.`);
        }
    });
});