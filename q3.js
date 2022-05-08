function outside(x) {
    function inside(y) {
      return x * y;
    }
    return inside;
  }
  let x = 10;
  let y = 20;

  result = fn_inside(y); 
  
  result1 = outside(x)(y); 
  
  console.log(result);
  console.log(result1);