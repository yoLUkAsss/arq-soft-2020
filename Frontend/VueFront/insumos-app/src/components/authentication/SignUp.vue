<template>
  <v-container>
      <v-form ref="form" v-model="valid" lazy-validation >

        <v-row>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.username" :rules="validationForm.username" label="Usuario" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.password" :rules="validationForm.password" :type="'password'" label="Contrasenia" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12"  md="6">
            <v-text-field v-model="form.fullname" :rules="validationForm.fullname" label="Nombre" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.email" :rules="validationForm.email" label="Email" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12"  md="6">
            <v-text-field v-model="form.phone" :rules="validationForm.phone" label="Telefono" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.cargo" :rules="validationForm.position" label="Cargo" required></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12"  md="6">
            <v-text-field v-model="form.localidad" :rules="validationForm.location" label="Localidad" required></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field v-model="form.entity" :rules="validationForm.entity" label="Entidad" required></v-text-field>
          </v-col>
        </v-row>

        <v-btn :disabled="!valid" color="warning" class="mr-4" @click="validate" > Validar  </v-btn>
        <v-btn color="error" class="mr-4" @click="reset" > Limpiar Formulario </v-btn>
        <v-btn color="success" @click="register"> Registrar </v-btn>
      </v-form>
  </v-container>
</template>

<script>
import Users from '../../services/users'

export default {
  data: () => ({
    form: {
      username: '',
      password: '',
      fullname: '',
      email: '',
      phone: '',
      entity: '',
      position: '',
      location: ''
    },
    validationForm: {
      username: [
        v => !!v || 'Username es requerido'
      ],
      password: [
        v => !!v || 'Contrasenia es requerido',
        v => (v || '').length <= 20 || '20 caracteres maximo'
      ],
      fullname: [
        v => !!v || 'Nombre es requerido'
      ],
      email: [
        v => !!v || 'Email es requerido',
        v => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(v) || 'Email invalido.'
        }
      ],
      phone: [
        v => !!v || 'Telefono es requerido'
      ],
      entity: [
        v => !!v || 'Entidad es requerido'
      ],
      position: [
        v => !!v || 'Cargo es requerido'
      ],
      location: [
        v => !!v || 'Localidad es requerido'
      ]
    },
    valid: true
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },

    async register () {
      const response = await Users.create(this.form)
      if (response !== 'undefined') {
        this.$store.commit('login', response.username)
      }
    }
  }
}
</script>

<style>

</style>
