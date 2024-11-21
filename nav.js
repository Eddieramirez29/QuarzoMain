const QuarzoButtonMobile = document.getElementById("QuarzoButtonMobile");
const searchButton = document.getElementById("searchButton");
const addQuestionButtonMobile = document.getElementById("addQuestionButtonMobile");

const buttonBack = document.getElementById("buttonBack");
const searchBarMobile = document.getElementById("searchBarMobile");
const searchBarContainerMobile = document.getElementsByClassName("searchBarContainerMobile");

const arrayButtons = [
    {buttonMobile: "HomeButtonMobile"},
    {buttonMobile: "ListButtonMobile"},
    {buttonMobile: "createQuestionButtonMobile"},
    {buttonMobile: "SpacesButtonMobile"},
    {buttonMobile: "NotificationsButtonsMobile"},
    {buttonMobile: "ProfileButtonMobile"},
    {buttonMobile: "LanguagesButtonMobile"}
];

let display1;
let display2;

//It reloads the page
QuarzoButtonMobile.addEventListener("click", function()
{
    location.reload();//Reload page
});

//1.-It hides all mobile buttons
//2.-Appears secondary searchBar on mobile version
searchButton.addEventListener("click", function()
{
    display1 = "none";
    display2 = "block"
    disappearButtons();
    appearSecondarySearchBarOnMobileVersion();
});

buttonBack.addEventListener("click", function()
{
    display1 = "block";
    display2 = "none";
    disappearButtons();
    appearSecondarySearchBarOnMobileVersion();
});

const appearSecondarySearchBarOnMobileVersion = () =>
{
    buttonBack.style.display = display2;
    searchBarMobile.style.display = display2;
    searchBarContainerMobile.style.display = display2;
}

const disappearButtons = () =>
{
    QuarzoButtonMobile.style.display = display1;
    searchButton.style.display = display1;
    addQuestionButtonMobile.style.display = display1;

    arrayButtons.forEach(function(element)
    {
        const buttonId = element.buttonMobile;
        const button = document.getElementById(buttonId);

        if (button)
        {
            button.style.display = display1;
        }
        else
        {
            console.warn(`ID button "${buttonId}" not found.`);
        }
    });
}