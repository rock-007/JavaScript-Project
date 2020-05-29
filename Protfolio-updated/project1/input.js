
export default class Inputhandle{

    constructor(paddle1, game1) {
        // keydown =event, (event)... is the function that fasses the event
        document.addEventListener('keydown', (event)=>
        {

          //  alert(event.keyCode);
            switch(event.keyCode){
                case 37:

              //  alert('move left');
              paddle1.moveLeft();
                break;

                case 39:
              //  alert('move right');
                paddle1.moveRight();

                break;

            }
        })
        document.addEventListener('keyup', (event)=>
        {

          //  alert(event.keyCode);
            switch(event.keyCode){
                case 37:
                  // this if is to make sure that if we release one key and press the other key it will not keep stop for few mili second as it will think not only new direction but also alst relase and it will get a jerk complete stop for few millisecond
              if(paddle1.speed < 0)
              //  alert('move left');
              paddle1.stop();
                break;

                case 39:
                  if(paddle1.speed > 0)
              //  alert('move right');
                paddle1.stop();

                break;
                //27 is escape key
              case 27:
                game1.togglePause();
                break;
                case 32:
                game1.start();
                break;
            }
        })
    }




}