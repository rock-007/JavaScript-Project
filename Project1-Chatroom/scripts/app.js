// bring together chat.js and ui.js to work together

const chatList = document.querySelector('.chat-list');
const newChatform = document.querySelector('.new-chat');
const  newNameform = document.querySelector('.new-name');
const updateMessg = document.querySelector('.update-mssg');
const rooms = document.querySelector('.chatrooms');


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

// update username
// addEventListener(event,function,usecapture)
// submit is event, e is submit event-object as paramter is used in callback function
newNameform.addEventListener('submit', e=>{
   e.preventDefault();
// .name is the id of input fro mthe html and is under the form(.new-name) so we can use the .name to refer to it
   const NewName= newNameform.name.value.trim();
// then update the new name into the chat room
// it will update the username
    chatroom.updateName(NewName);
    // rest the form
    newNameform.reset();
    //show then hid the update message
    updateMessg.innerText = `Your name was updated to ${NewName} `;
    // set time out 
   setTimeout(() =>updateMessg.innerText='',3000)


})

// update chatroom

rooms.addEventListener('click', e=>{
// log the click event
    console.log(e);
    // BUTTON is the tagname, check the event e and target check the tag name and if it equal to button that means we clicked the button
 if(e.target.tagname ==='BUTTON'){
// first clear the current page 
chatUI.clear();
chatroom.updateRoom(e.target.getAttribute('id'));
chatroom.getchats(chat => chatUI.render(chat));
 }

})
// checj local storeagfe for name
// if this exist then localStorage.username then store to localStorage.username
// below is teranary operator, i.e if localStorage.username is true then save the value int username, if not then store anon
const username = localStorage.username ? localStorage.username : 'anon';

const chatUI = new ChatUI(chatList);
//const chatroom = new Chatroom('gaming','shaun');
const chatroom = new Chatroom('gaming',username);
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


