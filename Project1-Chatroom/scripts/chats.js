// getting chats and data together
class Chatroom{
// this constructor set inital property of the chatroom instance
constructor(room, username){
    this.room = room;
    this.username =username;
    // we picking up the specific collection'chats' from the db into this constractor chat varaible
    this.chats = db.collection('chats');
    this.unsub;
}
// message will be string
async addChat(message){
// when we send the strings to the DB we sent in JSOn formated that is javascript object
// so we will format a chat object
const now = new Date();
const chat = {
    message,
    username: this.username,
    room: this.room,
    created_at:firebase.firestore.Timestamp.fromDate(now)

};
// save the chat document
const response = await this.chats.add(chat);
// return response will be promise, we dont need that as we are only intersted to add the chat in the DB and we can still do the return if we want to 
//return response;
}
// getchats is a user define method
// calback will be returned onece the fucntiongetchats is processed
getchats(callback){
    this.unsub =
    // wherever we get the snapshort then do the below in the callback function
    this.chats
    // method where will collection document only if certain condition is true amd has tree arguments
    // the first room is the porperty in the firestore database
    .where('room','==', this.room )
    // get the result inorder of timestampo
    .orderBy('created_at')
    .onSnapshot(snapshot => {
        //docChanges() is a method and will give us all the changes in array and we can then cycle through
        snapshot.docChanges().forEach(change =>{
                if(change.type==='added'){
            // update the UI
                    callback(change.doc.data());

                }

        })

    })
}
updateName(username){

this.username=username;

}

updateRoom(room){
this.room= room;
console.log('room updated');
if(this.unsub){
this.unsub();
}
}

}



// setTimeout(()=>{
//     chatroom.updateRoom('gaming');
//     chatroom.updateName('gaming');

//     chatroom.getchats((data)=>
//     {
//     console.log(data);
    
//     });
//     chatroom.addChat('hello');
// },3000);


