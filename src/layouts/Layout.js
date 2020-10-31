import Vue from 'vue'
console.log('registering component')
export default {
  name: 'ZLayout',
  props: {
    name: {
      type: String,
      required: false,
      default: 'LayoutDefault'
    }
  },
  created () {
    // Check if layout component
    // has already been registered.
    console.log('creating layout', this.name)
    if (!Vue.options.components[this.name]) {
      Vue.component(
        this.name,
        () => import('../layouts/' + this.name + '.vue')
      )
      console.log('Registred layout component ', this.name)
    }
    console.log('Set layout to ', this.name)
    this.$parent.$emit('update:layout', this.name)
  },
  render () {
    console.log('render', this.$slots.default[0])
    return this.$slots.default[0]
  }
}
