
import moment from 'moment'
const formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

export default {
  name: 'TotalDeposits',
  data: () => ({
    // documents: [],
    total: 0,
  }),
  computed: {
    documents () {
      return this.$store.state.orders
    }
  },
  watch: {
    documents: function (d) {
      this.total = formatter.format(d.map(doc => (doc.amount)).reduce((p, v) => {
        return (p + v)
      }, 0))
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
