

export default  function (eventObj) {
  const { /* data, foundation, */ error } = eventObj
  if (error) {
    throw new Error(`Error editing customer: ${error}`)
  }
  this.commit('EDIT_CUSTOMER', eventObj)
}
