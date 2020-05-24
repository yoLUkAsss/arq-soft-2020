<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                    <v-list-item-content>
                        <v-list-item-title> {{item.title}} </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider v-for="(item, index) in items" :key="`divider-${index}`"></v-divider>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            <v-btn class="hidden-sm-and-down">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn class="hidden-sm-and-down">SIGN IN</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down" @click="goRegister"> Register</v-btn>
        </v-app-bar>
    </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      appTitle: 'Insumos - App',
      drawer: false,
      items: [
        { title: 'Menu' },
        { title: 'Sign In' },
        { title: 'Register' }
      ]
    }
  },
  methods: {
    goRegister () {
      this.$router.push({ name: 'SignUp' })
    }
  }
}
</script>

<style scoped>

</style>
