

export default async function (eventObj) {
  const { /* data, foundation,  */ error } = eventObj
  if (error) {
    throw new Error(`Error adding order: ${error}`)
  }
  this.commit('ADD_ORDER', eventObj)
}
