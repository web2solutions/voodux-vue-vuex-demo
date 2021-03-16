

export default async function (eventObj) {
  const { /* data, foundation,  */ error } = eventObj
  if (error) {
    throw new Error(`Error adding customer: ${error}`)
  }
  this.commit('ADD_CUSTOMER', eventObj)
}
