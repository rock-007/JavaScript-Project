// bring together chat.js and ui.js to work together

const chatList = document.querySelector('.chat-list');
const newChatform = document.querySelector('.new-chat');


// add a new chat
newChatform.addEventListener('submit',e=>
{

e.preventDefault();
const message= newChatform.message.value.trim();
chatroom.addChat(message)
// when complete reset the from in th ecallbacvk function below
.then(()=> newChatform.reset())
.catch(err => console.log(err));
})

const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('gaming','shaun');
console.log(chatroom);
//addChat('hello everyone') this will return a promise so can use then method
// chatroom.addChat('hello everyone')
// .then(() => console.log('chat added'))
// .catch(err => console.log(err));
// get chats and render
chatroom.getchats((datea) =>{
//console.log(datea);
chatUI.render(datea);
})


