

export default async function (eventObj) {
  const { /* data,  foundation, */error } = eventObj
  if (error) {
    throw new Error(`Error deleting product: ${error}`)
  }
  this.commit('DELETE_PRODUCT', eventObj)
}
