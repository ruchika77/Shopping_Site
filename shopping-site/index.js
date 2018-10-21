varTest();
letTest();

function varTest() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x); // 2
    console.log(y); // undefined
    y = 3;
    var y;
    console.log(y); // 3
  }
  console.log(x); // 2
}

function letTest() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x); // 2
  }
  console.log(x); // 1
}
