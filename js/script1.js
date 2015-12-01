function operation(operand) {

  var res = document.getElementById('result');
  var op1 = document.getElementById('op1').value;
  var op2 = document.getElementById('op2').value;

  // if (operand == "+") {
  //   res.innerHTML = Number(op1) + Number(op2)
  // } else if (operand == '-') {
  //   res.innerHTML = Number(op1) - Number(op2)
  // } else if (operand == '*') {
  //   res.innerHTML = Number(op1) * Number(op2)
  // } else if (operand == '/') {
  //   res.innerHTML = Number(op1) / Number(op2)
  // }

  //res.innerHTML = Number(op1) operand Number(op2)
  //res.innerHTML = Number(op1) Number(operand) Number(op2)


  switch (operand) {
    case '1':
      res.innerHTML = Number(op1) + Number(op2)
      break;
    case '2':
      res.innerHTML = Number(op1) - Number(op2)
      break;
    case '3':
      res.innerHTML = Number(op1) * Number(op2)
      break;
    case '4':
      res.innerHTML = Number(op1) / Number(op2)
      break;
    default:

  }
}
