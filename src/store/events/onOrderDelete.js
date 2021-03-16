

export default  function (eventObj) {
  const { /* data,  foundation, */error } = eventObj
  if (error) {
    throw new Error(`Error deleting order: ${error}`)
  }
  this.commit('DELETE_ORDER', eventObj)
}
