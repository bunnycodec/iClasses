<template>
  <div class="container">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card class="mx-auto flat" elevation="10">
          <v-sheet class="text-center pa-2 pt-3" color="#bcbcbc">
            <p class="text-h4">iClasses</p>
            <p
              class="subtitle-2"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, mollitia?</p>
          </v-sheet>
          <div class="pa-10">
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="email"
                name="email"
                color="#242423"
                outlined
                label="Email ID"
                append-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                v-model="password"
                name="password"
                color="#242423"
                outlined
                label="Password"
                :type="passwordShow ? 'text' : 'password'"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
              ></v-text-field>
              <v-sheet class="red--text mb-5" align="center" v-if="feedback">{{ feedback }}</v-sheet>
              <v-btn @click.prevent="submit" color="#5ccb91" elevation="5" large block>Login</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data () {
    return {
      email: null,
      password: null,
      passwordShow: false,
      feedback: null
    }
  },

  methods: {
    submit () {
      if (this.email && this.password) {
        this.feedback = null
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert('Login Successfull !')
            this.$router.push({ name: 'Home' })
          })
          .catch(err => {
            this.feedback = err.message
          })
      } else this.feedback = 'You Must Enter all Fields'
    }
  }
}
</script>
