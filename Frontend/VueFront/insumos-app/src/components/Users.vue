<template>
  <v-data-table
    :headers="headers" :items="users" :items-per-page="5" class="elevation-1">
  </v-data-table>
</template>

<script>
import Users from '@/services/users'

export default {
  data () {
    return {
      headers: [
        { text: 'Nombre Completo', value: 'fullname' },
        { text: 'Email', value: 'email' },
        { text: 'Telefono', value: 'phone' },
        { text: 'Entidad', value: 'entity' },
        { text: 'Cargo', value: 'position' },
        { text: 'Localidad', value: 'location' }
      ],
      users: []
    }
  },
  methods: {
    async list () {
      const response = await Users.getAll()
      this.users = response.data
    }
  },
  created () {
    this.list()
  }
}
</script>

<style>

</style>
