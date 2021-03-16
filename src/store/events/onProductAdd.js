

export default  function (eventObj) {
  const { /* data, foundation,  */ error } = eventObj
  if (error) {
    throw new Error(`Error adding product: ${error}`)
  }
  this.commit('ADD_PRODUCT', eventObj)
}
