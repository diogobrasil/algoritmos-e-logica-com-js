//Callback function

function executeCallback (callback) {
  console.log('Antes da callback')
  callback()
  console.log('Depois da callback')
}
executeCallback(
  () => {
    console.log('Estou em uma callback')
  }
)
