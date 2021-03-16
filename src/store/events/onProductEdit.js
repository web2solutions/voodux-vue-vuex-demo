

export default  function (eventObj) {
  const { /* data, foundation, */ error } = eventObj
  if (error) {
    throw new Error(`Error editing product: ${error}`)
  }
  this.commit('EDIT_PRODUCT', eventObj)
}
