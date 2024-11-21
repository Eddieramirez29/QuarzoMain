const QuarzoButtonMobile = document.getElementById("QuarzoButtonMobile");
const searchButton = document.getElementById("searchButton");
const addQuestionButtonMobile = document.getElementById("addQuestionButtonMobile");

const buttonBack = document.getElementById("buttonBack");
const searchBarMobile = document.getElementById("searchBarMobile");
const searchBarContainerMobile = document.getElementsByClassName("searchBarContainerMobile");
const headerContainerOfElementsMobile = document.getElementsByClassName("headerContainerOfElementsMobile");
const headerContainerMobile = document.getElementsByClassName("headerContainerMobile");

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
//2.-Appears secondary searchBar on mobile version
searchButton.addEventListener("click", function()
{
    disappearButtons();
    appearSecondarySearchBarOnMobileVersion();
    headerContainerOfElementsMobile.style.display = "none";
    headerContainerMobile.style.display = "none";
});

const appearSecondarySearchBarOnMobileVersion = () =>
{
    buttonBack.style.display = "block";
    searchBarMobile.style.display = "block";
    searchBarContainerMobile.style.display = "block";
    searchBarContainerMobile.style.position = "fixed";
    searchBarContainerMobile.style.top = "0px";
}

const disappearButtons = () =>
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
            console.warn(`ID button "${buttonId}" not found.`);
        }
    });
}