/**
 * Vuex store backed by VooduX
 */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * Order Entity/Collection related events
 * Will be triggered by VooduX when any data change occurs
 * Used to commit changes to the storage
 */
import onOrderAdd from './events/onOrderAdd'
import onOrderEdit from './events/onOrderEdit'
import onOrderDelete from './events/onOrderDelete'

/**
 * Customer Entity/Collection related events
 * Will be triggered by VooduX when any data change occurs
 * Used to commit changes to the storage
 */
import onCustomerAdd from './events/onCustomerAdd'
import onCustomerEdit from './events/onCustomerEdit'
import onCustomerDelete from './events/onCustomerDelete'

/**
 * Product Entity/Collection related events
 * Will be triggered by VooduX when any data change occurs
 * Used to commit changes to the storage
 */
import onProductAdd from './events/onProductAdd'
import onProductEdit from './events/onProductEdit'
import onProductDelete from './events/onProductDelete'

/**
 * VooduX store factory function
 * @param  {object} foundation - VooduX application foundation
 * @return {object} store - Vuex store
 */
export default function vStore(foundation) {

  /**
   * Import desired entities accessors from VooduX application
  */
  const { Order, Customer, Product } = foundation.data

  /**
  * Create a classic Vuex store
  */
  const store = new Vuex.Store({
    state: {
      orders: [],
      customers: [],
      products: [],
      users: []
    },
    getters: {
      
    },
    /**
    * Mutations are not called by components and even actions.
    * They are called by decoupled event handlers set in the bottom of this file
    * Components shall to directly call actions. They shall not commit direct to store (call mutations)
    * 
    * Dataflow: 
    * 1. - Component call an action  -> 
    * 2. - the action performs a VooduX database operation ->
    * 3. - VooduX triggers the associated registered event handler ->
    * 4. - The event handler commits changes to storage (call mutations) ->
    * 5. - Component is updated!
    * 
    * @param  {array} payload - arrar of documents
    */
    mutations: {
      /**
       * Replace state with a entire new array
       * @param  {array} payload - arrar of documents
      */
      SET_ORDERS (state, payload) {
        Vue.set(state, 'orders', [...payload])
      },
      /**
       * Add new document to state
       * @param  {object} eventObj - VooduX Data Change event
      */
      ADD_ORDER(state, eventObj) {
        const { error, /* document, foundation, */data } = eventObj
        if (error) {
          return
        }
        state.orders.unshift(data)
      },
      /**
       * Replace a document inside the state
       * @param  {object} eventObj - VooduX Data Change event
      */
      EDIT_ORDER (state, eventObj) {
        const { /* error, document, foundation, */data } = eventObj
        state.orders.forEach((doc, index) => {
          if (doc.__id === data.__id){
            Vue.set(state.orders, index, data)
          }
        });
      },
      /**
       * Delete a document from the state
       * @param  {object} eventObj - VooduX Data Change event
      */
      DELETE_ORDER (state, eventObj) {
        const { /* error, document, foundation, */data } = eventObj
        state.orders.forEach((doc, index) => {
          if (doc.__id === data.__id){
            state.orders.splice(index, 1)
          }
        });
      },

      /**
       * Replace state with a entire new array
       * @param  {array} payload - arrar of documents
      */
      SET_CUSTOMERS (state, payload) {
        Vue.set(state, 'customers', [...payload])
      },
      /**
       * Add new document to state
       * @param  {object} eventObj - VooduX Data Change event
      */
      ADD_CUSTOMER(state, eventObj) {
        const { error, /* document, foundation, */data } = eventObj
        if (error) {
          return
        }
        state.customers.unshift(data)
      },
      /**
       * Replace a document inside the state
       * @param  {object} eventObj - VooduX Data Change event
      */
      EDIT_CUSTOMER (state, eventObj) {
        const { /* error, document, foundation,*/ data } = eventObj
        state.customers.forEach((doc, index) => {
          if (doc.__id === data.__id){
            Vue.set(state.customers, index, data)
          }
        });
      },
      /**
       * Delete a document from the state
       * @param  {object} eventObj - VooduX Data Change event
      */
      DELETE_CUSTOMER (state, eventObj) {
        const { /* error, document, foundation,*/ data } = eventObj
        state.customers.forEach((doc, index) => {
          if (doc.__id === data.__id){
            state.customers.splice(index, 1)
          }
        });
      },

      /**
       * Replace state with a entire new array
       * @param  {array} payload - arrar of documents
      */
      SET_PRODUCTS (state, payload) {
        Vue.set(state, 'products', [...payload])
      },
      /**
       * Add new document to state
       * @param  {object} eventObj - VooduX Data Change event
      */
      ADD_PRODUCT (state, eventObj) {
        const { error, /* document, foundation,*/ data } = eventObj
        if (error) {
          return
        }
        state.products.unshift(data)
      },
      /**
       * Replace a document inside the state
       * @param  {object} eventObj - VooduX Data Change event
      */
      EDIT_PRODUCT (state, eventObj) {
        const { /* error, document, foundation,*/ data } = eventObj
        state.products.forEach((doc, index) => {
          if (doc.__id === data.__id){
            Vue.set(state.products, index, data)
          }
        });
      },
      /**
       * Delete a document from the state
       * @param  {object} eventObj - VooduX Data Change event
      */
      DELETE_PRODUCT (state, eventObj) {
        const { /* error, document, foundation,*/ data } = eventObj
        state.products.forEach((doc, index) => {
          if (doc.__id === data.__id){
            state.products.splice(index, 1)
          }
        });
      }
    },
    actions: {
      async DELETE_DOCUMENT(context, { entity, __id }) {
        const { error, data } = await foundation.data[entity].delete(__id)
        return { error, data }
      },
      async ADD_DOCUMENT(context, { entity, doc }) {
        const { error, data } = await foundation.data[entity].add(doc)
        return { error, data }
      },
      async EDIT_DOCUMENT(context, { entity, __id, doc }) {
        const { error, data } = await foundation.data[entity].edit(__id, doc)
        return { error, data }
      }
    },
  })

  const eventHandlerOnOrderAdd = Order.on('add', onOrderAdd.bind(store))
  const eventHandlerOnOrderEdit = Order.on('edit', onOrderEdit.bind(store))
  const eventHandlerOnOrderDelete = Order.on('delete', onOrderDelete.bind(store))
    
  const eventHandlerOnCustomerAdd = Customer.on('add', onCustomerAdd.bind(store))
  const eventHandlerOnCustomerEdit = Customer.on('edit', onCustomerEdit.bind(store))
  const eventHandlerOnCustomerDelete = Customer.on('delete', onCustomerDelete.bind(store))
    
  const eventHandlerOnProductAdd = Product.on('add', onProductAdd.bind(store))
  const eventHandlerOnProductEdit = Product.on('edit', onProductEdit.bind(store))
  const eventHandlerOnProductDelete = Product.on('delete', onProductDelete.bind(store))

  window.addEventListener('unload', () => {
    Order.stopListenTo(eventHandlerOnOrderAdd)
    Order.stopListenTo(eventHandlerOnOrderEdit)
    Order.stopListenTo(eventHandlerOnOrderDelete)

    Customer.stopListenTo(eventHandlerOnCustomerAdd)
    Customer.stopListenTo(eventHandlerOnCustomerEdit)
    Customer.stopListenTo(eventHandlerOnCustomerDelete)

    Product.stopListenTo(eventHandlerOnProductAdd)
    Product.stopListenTo(eventHandlerOnProductEdit)
    Product.stopListenTo(eventHandlerOnProductDelete)
  })

  ;(async () => {
    // get orders and populate the store
    const findOrders = await Order.find({})
    if (!findOrders.error) {
      if (findOrders.data) {
        store.commit('SET_ORDERS', findOrders.data)
      }
    }

    const findCustomers = await Customer.findAll()
    if (!findCustomers.error) {
      if (findCustomers.data) {
        store.commit('SET_CUSTOMERS', findCustomers.data)
      }
    }

    const findProducts = await Product.findAll()
    if (!findProducts.error) {
      if (findProducts.data) {
        store.commit('SET_PRODUCTS', findProducts.data)
      }
    }
    
  })()

  return store
}

