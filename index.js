import Main from './src/components/Main'
// import _Vue from 'vue'

// Main.install = Vue => {
//   if (!Vue) {
//     window.Vue = Vue = _Vue
//   }
//   Vue.component(Main.name, Main)
// }
// export default Main;

const components = {
  install (Vue) {
    Vue.component(
      'Main', Main
    )
  }
}

if(typeof windwo !== 'undefined' && window.Vue) {
  window.Vue.use(comment)
}


export default components
