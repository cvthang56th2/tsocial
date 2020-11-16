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
        },
        successNotify (options = {}) {
          const { title = 'Successfull', message = '', duration = 10000, speed = 1000 } = options
          this.$notify({
            group: 'sysNoti',
            type: 'success',
            title,
            text: message,
            duration,
            speed
          })
        },
        warningNotify (options = {}) {
          const { title = 'Warning!', message = '', duration = 10000, speed = 1000 } = options
          this.$notify({
            group: 'sysNoti',
            type: 'warn',
            title,
            text: message,
            duration,
            speed
          })
        },
        errorNotify (options = {}) {
          const { title = 'Error', message = '', duration = 10000, speed = 1000 } = options
          this.$notify({
            group: 'sysNoti',
            type: 'error ',
            title,
            text: message,
            duration,
            speed
          })
        }
      }
    })
  }
}