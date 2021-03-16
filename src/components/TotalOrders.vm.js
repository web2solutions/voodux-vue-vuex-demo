
import moment from 'moment'
const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export default {
  name: 'TotalOrders',
  data: () => ({
      // documents: [],
      // 
  }),
  computed: {
    documents () {
      return this.$store.state.orders
    }
  },
  
  methods: {
    moment () {
        return moment
    },
    formatter () {
        return formatter
    }
  }
}
