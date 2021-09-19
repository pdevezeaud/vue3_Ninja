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


// const app3 = Vue.createApp({
//   data(){
//       return {
//         showBooks: true,
//         title: 'The Finale Empire',
//         author: 'Brandon Sanderson',
//         age: 45,
//         x:0,
//         y:0
//       }
//   },
//   methods: {
//     toggleShowBooks() {
//       this.showBooks = !this.showBooks
//     },
//     handleEvent(e, data){
//       console.log(e, e.type)
//       if(data){
//         console.log(data)
//       }
//     },
//     handleMousemove(e){
//       this.x = e.offsetX
//       this.y = e.offsetY
//     }
//   }
  
// })





// const app4 = Vue.createApp({
//     data(){
//         return {
//           showBooks: true,
//           books: [
//             {title: 'name of the wind', author: 'Patrick Rothfuss'},
//             {title: 'The way of kings', author: 'Brandon Sanderson'},
//             {title: 'The final empire', author: 'Brandon Sanderson'}
//           ] 
//         }
//     },
//     methods: {
//       toggleShowBooks() {
//         this.showBooks = !this.showBooks
//       }
//     },
    
//   })
  
//   app4.mount('#app4')






  // const app5 = Vue.createApp({
  //   data(){
  //       return {
  //         url:'http://www.thenetninja.co.uk',
  //         showBooks: true,
  //         books: [
  //           {title: 'name of the wind', author: 'Patrick Rothfuss', img:'assets/1.jpg'},
  //           {title: 'The way of kings', author: 'Brandon Sanderson', img:'assets/2.jpg'},
  //           {title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg'}
  //         ] 
  //       }
  //   },
  //   methods: {
  //     toggleShowBooks() {
  //       this.showBooks = !this.showBooks
  //     }
  //   },
    
  // })
  
  // app5.mount('#app5')





  const app6 = Vue.createApp({
    data(){
        return {
          url:'http://www.thenetninja.co.uk',
          showBooks: true,
          books: [
            {title: 'name of the wind', author: 'Patrick Rothfuss', img:'assets/1.jpg', isFav:true},
            {title: 'The way of kings', author: 'Brandon Sanderson', img:'assets/2.jpg', isFav:false},
            {title: 'The final empire', author: 'Brandon Sanderson', img: 'assets/3.jpg', isFav: true},
          ] 
        }
    },
    methods: {
      toggleShowBooks() {
        this.showBooks = !this.showBooks
      }
    },
    
  })
  
  app6.mount('#app6')









//18:30  https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=5