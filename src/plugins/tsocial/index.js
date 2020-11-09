export default {
  install(Vue) {
    Vue.mixin({
      data: () => ({}),
      methods: {
        goTo(route, newTab) {
          if (route.name === this.$route.name) {
            this.$router.go(this.$router.currentRoute)
          } else {
            if (newTab === true || (newTab instanceof MouseEvent && newTab.ctrlKey) || (newTab instanceof MouseEvent && newTab.type === 'mouseup' && newTab.which === 2)) {
              const routeData = this.$router.resolve(route)
              return window.open(routeData.href, '_blank')
            }
            this.$router.push(route)
          }
        }
      }
    })
  }
}