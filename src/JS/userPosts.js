const containerUserPost = document.querySelector(".containerUserPost");
const modal = document.getElementById("modal");


//When clicking addQuestionButtonPost it will create the post card and its containing
addQuestionButtonPost.addEventListener("click", () =>
{
    const userPost = document.createElement("div");//Container of the post
    const headerPost = document.createElement("div");//First inner container
    const questionSection = document.createElement("div");//Second inner container

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let monthString = convertToMonth(month);
    let currentDate = monthString + "-" + day + "-" + year;

    createUserPostCard(userPost);//Creates only the card
    createContainerHeaderPost(userPost, headerPost, currentDate);//Creates header of the post card(picture profile and other data user)
    createQuestionSection(userPost, questionSection);//Second inner container
    createQuestion(questionSection);//Create question
    /*This section must be answered by other users.
    So far, it only creates the container of the answer*/
    createAnswerContainer(userPost);
    hideEditPostCardAndItsOverlay();//Hides the editing post section
})

const convertToMonth = (month) =>
{
    let monthABv;

    if(month === 1)
    {
        monthABv = "Jan";
    }
    else if(month === 2)
    {
        monthABv = "Feb";
    }
    else if(month === 3)
    {
        monthABv = "Mar";
    }
    else if(month === 4)
    {
        monthABv = "Apr";
    }
    else if(month === 5)
    {
        monthABv = "May";
    }
    else if(month === 6)
    {
        monthABv = "Jun";
    }
    else if(month === 7)
    {
        monthABv = "Jul";
    }
    else if(month === 8)
    {
        monthABv = "Aug";
    }
    else if(month === 9)
    {
        monthABv = "Sept";
    }
    else if(month === 10)
    {
        monthABv = "Oct";
    }
    else if(month === 11)
    {
        monthABv = "Nov";
    }
    else
    {
        monthABv = "Dec";
    }

    return monthABv;
}

const createUserPostCard = (userPost) =>
{
    userPost.id = "userPost";
    userPost.style.backgroundColor = "white";
    containerUserPost.appendChild(userPost);
}

const createContainerHeaderPost = (userPost, headerPost, currentDate) =>
{
    headerPost.id = "headerPost";
    headerPost.innerHTML = currentDate;
    userPost.appendChild(headerPost);
}

const createQuestionSection = (userPost, questionSection) =>
{
    questionSection.id = "questionSection";
    userPost.appendChild(questionSection);
}

const createQuestion = (questionSection) =>
{
    const question = document.createElement("p");

    question.id = "question";
    question.innerHTML = fieldEditPost.value;
    questionSection.appendChild(question);
}
/*This section must be answered by other users 
So far, it only creates the container of the answer
*/
const createAnswerContainer = (userPost) =>
{
    const answerContainer = document.createElement("div");

    answerContainer.id = "answerContainer";
    userPost.appendChild(answerContainer);
}



const hideEditPostCardAndItsOverlay = () =>
{
    modal.style.display = "none";//It hides post editing card
    overlay.style.display = "none";//It hides post editing card
}