

export default  function (eventObj) {
  const { /* data, foundation, */ error } = eventObj
  if (error) {
    throw new Error(`Error editing order: ${error}`)
  }
  this.commit('EDIT_ORDER', eventObj)
}
