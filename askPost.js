const askButton = document.getElementById("askButton");
const inputAskPost = document.getElementById("inputAskPost");
const cancelQuestionButtonPost = document.getElementById("cancelQuestionButtonPost");
const floatingLabelAsk = document.getElementById("floatingLabelAsk");
const postButton = document.getElementById("postButton");
const floatingLabelPost = document.getElementById("floatingLabelPost");
const fieldEditPost = document.getElementById("fieldEditPost");
const addQuestionButtonPost = document.getElementById("addQuestionButtonPost");
const overlay = document.getElementById("overlay");//Overlay tag(a div)




const correctText = (textArea) =>
{
    fetch('https://api.languagetool.org/v2/check',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ text: textArea, language: 'en-US' })
    })
    .then(response => response.json())
    .then(data => console.log(data.matches[0].replacements[0].value));//Gets the corrected word
}
//When fieldEditPost has at least a single character, it will enable addQuestionButtonPost
fieldEditPost.addEventListener('input', () =>
{
    let textArea;
    if (fieldEditPost.value.length > 0)
    {
        addQuestionButtonPost.style.backgroundColor = "#B92B27";
        textArea = fieldEditPost.value;
        // correctText(textArea);
    }
    else
    {
        addQuestionButtonPost.style.backgroundColor = "#e55b56";
    }
});

cancelQuestionButtonPost.addEventListener("click", function()
{
    hideOverlay();
});

overlay.addEventListener("click", function()
{
    hideOverlay();
});


askButton.addEventListener("click", function()
{
    showOverlay();
});

inputAskPost.addEventListener("click", function()
{
    showOverlay();
});

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

postButton.addEventListener("click", function()
{
    showOverlay();
});

postButton.addEventListener("mouseout", function()
{
    floatingLabelPost.style.display = "none";
});


function showOverlay()
{
    document.getElementById('overlay').style.display = 'block';
    document.getElementById("modal").style.display = "block";
}

function hideOverlay()
{
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("modal").style.display = "none";
}
