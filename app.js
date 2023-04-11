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
    },
    handleEvent(e, data) {
      console.log(e, e.type)
      if (data) {
        console.log(data)
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount("#app")