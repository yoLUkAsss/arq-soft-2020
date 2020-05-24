<template>
  <div class="home">
    <h3>Bienvenidos a Insumos App</h3>
    <users></users>
  </div>
</template>

<script>
import Users from '@/components/Users.vue'

export default {
  name: 'Home',
  components: {
    Users
  }
}
</script>
