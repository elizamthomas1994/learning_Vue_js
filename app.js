const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', img: 'images/1.jpeg', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', img: 'images/2.jpeg', isFav: false },
        { title: 'the final empire', author: 'brandon sanderson', img: 'images/3.jpeg', isFav: true },
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
})

app.mount("#app")