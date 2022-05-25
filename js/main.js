//Complete the method that takes a boolean value 
//return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    //...
  let a = bool.toString();
    if(a=='true')
      return 'Yes';
    else
      return 'No';
  }