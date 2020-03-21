<template>
  <div>
    <p @click="change">count: {{count}}</p>
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const count = computed(() => store.state.count)
    // const change = () => store.commit('increment')
    const change = () => store.dispatch('increment')

    return { count, change }
  }
}
</script>