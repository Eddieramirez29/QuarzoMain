const containerUserPost = document.querySelector(".containerUserPost");
const modal = document.getElementById("modal");


//When clicking addQuestionButtonPost it will create the post card and its containing
addQuestionButtonPost.addEventListener("click", () =>
{
    const userPost = document.createElement("div");//Container of the post
    const headerPost = document.createElement("div");//First inner container
    const questionSection = document.createElement("div");//Second inner container

    createUserPostCard(userPost);//Creates only the card
    createContainerHeaderPost(userPost, headerPost);//Creates header of the post card(picture profile and other data user)
    createQuestionSection(userPost, questionSection);//Second inner container
    createQuestion(questionSection);//Create question
    /*This section must be answered by other users.
      So far, it only creates the container of the answer*/
    createAnswerContainer(userPost);
    hideEditPostCardAndItsOverlay();//Hides the editing post section
})

const createUserPostCard = (userPost) =>
{
    userPost.id = "userPost";
    userPost.style.backgroundColor = "white";
    containerUserPost.appendChild(userPost);
}

const createContainerHeaderPost = (userPost, headerPost) =>
{
    headerPost.id = "headerPost";
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