const selectedButtons = [
    {button: "HomeButton"},//index 0 child selectedHomeButton
    {button: "ListButton"},//index 1 child selectedListButton
    {button: "AnswerButton"},//index 2 child selectedAnswerButton
    {button: "SpacesButton"},//index 3 child selectedSpacesButton
    {button: "NotificationsButtons"},//index 4 child selectedNotificationsButtons
    {button: "QuarzoButton"}//index 5 child QuarzoButton: To reload page
];

const selectedHomeButton = document.getElementById("selectedHomeButton");
const selectedListButton = document.getElementById("selectedListButton");
const selectedAnswerButton = document.getElementById("selectedAnswerButton");
const selectedSpacesButton = document.getElementById("selectedSpacesButton");
const selectedNotificationsButtons = document.getElementById("selectedNotificationsButtons");

const searchBar = document.getElementById("searchBar");
const ProfileButton = document.getElementById("ProfileButton");
const LanguagesButton = document.getElementById("LanguagesButton");
const body = document.body;

searchBar.addEventListener("click", function()
{
        ProfileButton.style.display = "none";
        LanguagesButton.style.display = "none";
        searchBar.style.width = "335px";
    // console.log(searchBar.offsetWidth); 223px
});
//When the cursor is not into the input, then show off the buttons and decrease width of the input
searchBar.addEventListener("blur", function()
{
        ProfileButton.style.display = "block";
        LanguagesButton.style.display = "block";
        searchBar.style.width = "223px";
});




selectedButtons.forEach(function(element, index)
{
    const buttonId = element.button;
    const button = document.getElementById(buttonId);

    if (button)
    {
        button.addEventListener("click", function()
        {
            // console.log(`Índice: ${index}, Elemento: ${JSON.stringify(element)}`);
            switch(index)
            {
                case 0:
                    selectedHomeButton.style.display = "block";
                    selectedListButton.style.display = "none";
                    selectedAnswerButton.style.display = "none";
                    selectedSpacesButton.style.display = "none";
                    selectedNotificationsButtons.style.display = "none";
                    break;
                case 1:
                    selectedHomeButton.style.display = "none";
                    selectedListButton.style.display = "block";
                    selectedAnswerButton.style.display = "none";
                    selectedSpacesButton.style.display = "none";
                    selectedNotificationsButtons.style.display = "none";
                        break;
                case 2:
                    selectedHomeButton.style.display = "none";
                    selectedListButton.style.display = "none";
                    selectedAnswerButton.style.display = "block";
                    selectedSpacesButton.style.display = "none";
                    selectedNotificationsButtons.style.display = "none";
                        break;
                case 3:
                    selectedHomeButton.style.display = "none";
                    selectedListButton.style.display = "none";
                    selectedAnswerButton.style.display = "none";
                    selectedSpacesButton.style.display = "block";
                    selectedNotificationsButtons.style.display = "none";
                        break;
                case 4:
                    selectedHomeButton.style.display = "none";
                    selectedListButton.style.display = "none";
                    selectedAnswerButton.style.display = "none";
                    selectedSpacesButton.style.display = "none";
                    selectedNotificationsButtons.style.display = "block";
                        break;
                case 5:
                    location.reload();//Reload page
                    break;
            }
        });
    }
    else
    {
        console.warn(`ID button "${buttonId}" not found.`);
    }
});
