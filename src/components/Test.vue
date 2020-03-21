<template>
  <p>in test: {{props.info.count}}</p>
</template>
<script>
import { watchEffect } from 'vue'
export default {
  setup(props) {
    watchEffect(() => console.log('999'))
    return { props }
  }
}
</script>