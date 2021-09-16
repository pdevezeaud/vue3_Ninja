// // const app = Vue.createApp({
// //     data(){
// //         return {
// //           title: 'The Finale Empire',
// //           author: 'Brandon Sanderson',
// //           age: 45 
// //         }
// //     }
    
// // })



// app.mount('#app')

// const app2 = Vue.createApp({
//   data(){
//       return {
//         showBooks: true,
//         title: 'The Finale Empire',
//         author: 'Brandon Sanderson',
//         age: 45 
//       }
//   },
//   methods: {
//     toggleShowBooks() {
//       this.showBooks = !this.showBooks
//     }
//   },
  
// })

// app2.mount('#app2')


const app3 = Vue.createApp({
  data(){
      return {
        showBooks: true,
        title: 'The Finale Empire',
        author: 'Brandon Sanderson',
        age: 45 
      }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    }
  },
  
})

app3.mount('#app3')





//1:51  https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3