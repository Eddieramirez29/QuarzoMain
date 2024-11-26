const askButton = document.getElementById("askButton");
const floatingLabelAsk = document.getElementById("floatingLabelAsk");
const postButton = document.getElementById("postButton");
const floatingLabelPost = document.getElementById("floatingLabelPost");

askButton.addEventListener("mouseover", function()
{
    floatingLabelAsk.style.display = "flex";
    floatingLabelAsk.style.justifyContent = "center";
    floatingLabelAsk.style.alignContent = "center";
});

askButton.addEventListener("mouseout", function()
{
    floatingLabelAsk.style.display = "none";
});

postButton.addEventListener("mouseover", function()
{
    floatingLabelPost.style.display = "flex";
    floatingLabelPost.style.justifyContent = "center";
    floatingLabelPost.style.alignContent = "center";
});

postButton.addEventListener("mouseout", function()
{
    floatingLabelPost.style.display = "none";
});
