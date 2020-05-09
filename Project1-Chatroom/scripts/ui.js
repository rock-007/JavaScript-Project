// responsible for all UI user interface
//render chat template to the DOM
// clear the list of chats (when the room changes)

class ChatUI{
    // list is where we outputting templat to
constructor(list){
this.list = list;

}
render(data){ 

    const when = dateFns.distanceInWordsToNow(
        // fuirst is date object
        data.created_at.toDate(),
        // the below will put ago in the end
{addSuffix: true}
    )
    // we generating html template for each item(data) we take in
 const html= `
 <li class="list-group-item">
  <span class="username"> ${data.username}</span>
  <span class="message"> ${data.message}</span>
// to new line then
<div class="time">${when}</div>

 </li>
 `;

//adding to html
 
this.list.innerHTML += html;
}

}