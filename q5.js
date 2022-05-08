let c = 0;
  function hello (){
    console.log('hello');
   console.log(c++);
   if(c==5)
   {
       id = 5;
       return id;
   }
   
  }
   
function customSetInterval (cb, interval) {
    return setTimeout( recTime(cb,interval,id), interval)
  }
  
 
 
  let id = customSetInterval(hello, 1000);
 function recTime(cb,interval,id)
 {if(id)
    {
        return;
    }
    if (typeof cb == 'function') {
        cb()
        // Recurse
        customSetInterval(cb, interval)
      } else {
        console.log("Expecting a function");
      }
 }
 