<template>
  <div>
    <v-app-bar style="background: #23313c;">
      <router-link style="text-decoration: none" :to="{ name: 'Home' }">
        <v-toolbar-title class="ml-5" style="color: #f5cb5c; pointer: cursor;">
          <span class="text-h5">iClasses</span>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div class="hidden-xs-only mr-12">
        <router-link v-if="user" style="text-decoration: none" :to="{ name: 'Home' }">
          <v-btn text color="#cfdbd5">Home</v-btn>
        </router-link>
        <v-btn v-if="user" @click.prevent="adminAccess" text color="#cfdbd5">New Article</v-btn>
        <router-link v-if="!user" style="text-decoration: none" :to="{ name: 'Login' }">
          <v-btn text color="#cfdbd5">Login</v-btn>
        </router-link>
        <router-link v-if="!user" style="text-decoration: none" :to="{ name: 'SignUp' }">
          <v-btn text color="#cfdbd5">Create Account</v-btn>
        </router-link>
        <v-btn v-if="user" @click.prevent="signOut" text color="#cfdbd5">Sign Out</v-btn>
      </div>

      <div class="hidden-sm-and-up mr-2">
        <v-menu left bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon color="#cfdbd5">mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <router-link v-if="user" style="text-decoration: none" :to="{ name: 'Home' }">
                <v-btn text color="#000">Home</v-btn>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link v-if="user" style="text-decoration: none" :to="{ name: 'NewArticle' }">
                <v-btn text color="#000">New Article</v-btn>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link v-if="!user" style="text-decoration: none" :to="{ name: 'Login' }">
                <v-btn text color="#000">Login</v-btn>
              </router-link>
            </v-list-item>
            <v-list-item>
              <router-link v-if="!user" style="text-decoration: none" :to="{ name: 'SignUp' }">
                <v-btn text color="#000">Create Account</v-btn>
              </router-link>
            </v-list-item>
            <v-list-item>
              <v-btn text @click.prevent="signOut" color="#000">Sign Out</v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebase'

export default {
  name: 'Header',

  data () {
    return {
      user: null
    }
  },

  created () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.user = user
      else this.user = ''
    })
  },

  methods: {
    signOut () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    },

    adminAccess () {
      const ref = db.collection('users')
      ref
        .where('user_id', '==', firebase.auth().currentUser.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if (doc.data().admin === true) { this.$router.push({ name: 'NewArticle' }) } else this.$router.push({ name: 'NoAccess' })
          })
        })
    }
  }
}
</script>
