const x = Math.PI;

function area(y) {
  return x * y * y;
}

document.getElementById("result").innerHTML = area();





const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
    const regex = /[^a-zA-Z_]/g
    const s = document.querySelector('#guest').value.replace(regex, '')
    const x = parseInt(document.querySelector('#firstNumber').value)
    const ans = `${s}, your answer is ${radius(x, x)}.`
    document.querySelector('#result').innerHTML = ans
}

document.addEventListener('focusout', event => {
  if ((event.target && event.target.id === 'firstNumber') ||
    (event.target && event.target.id === 'secondNumber')) {
    validate(event)
  }
})

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})




















