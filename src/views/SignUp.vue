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
                v-model="alias"
                name="alias"
                color="#242423"
                outlined
                label="Username / Alias"
                append-icon="mdi-account-check"
                hint="Your Unique UserID can be Alphanumeric"
                counter="20"
              ></v-text-field>
              <v-text-field
                v-model="name"
                name="name"
                color="#242423"
                outlined
                label="Full Name"
                append-icon="mdi-account"
              ></v-text-field>
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
              <v-text-field
                v-model="confirmPassword"
                name="confirmPassword"
                color="#242423"
                outlined
                label="Confirm Password"
                :type="passwordShow ? 'text' : 'password'"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
              ></v-text-field>
              <v-sheet class="red--text mb-5" align="center" v-if="feedback">{{ feedback }}</v-sheet>
              <v-btn
                @click.prevent="submit"
                color="#5ccb91"
                elevation="5"
                large
                block
              >Create Account</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import slugify from 'slugify'
import db from '../firebase'
import firebase from 'firebase'

export default {
  data () {
    return {
      alias: null,
      name: null,
      email: null,
      password: null,
      confirmPassword: null,
      passwordShow: false,
      feedback: null,
      slug: null
    }
  },

  methods: {
    submit () {
      if (
        this.alias &&
        this.name &&
        this.email &&
        this.password &&
        this.confirmPassword &&
        this.password === this.confirmPassword
      ) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        const ref = db.collection('users').doc(this.slug)
        ref.get().then(snapshot => {
          if (snapshot.exists) this.feedback = 'This Alias is already taken'
          else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  name: this.name,
                  email: this.email,
                  password: this.password,
                  admin: false,
                  user_id: cred.user.uid
                })
              })
              .then(() => {
                alert('Your account created Successfully!')
                firebase
                  .auth()
                  .signOut()
                  .then(() => {
                    this.$router.push({ name: 'Login' })
                  })
              })
              .catch(err => {
                this.feedback = err.message
              })
          }
        })
      } else {
        if (
          this.alias &&
          this.name &&
          this.email &&
          this.password &&
          this.confirmPassword
        ) {
          this.feedback = 'Password Did not Match'
        } else this.feedback = 'Please Enter all Fields'
      }
    },

    reset () {
      this.alias = null
      this.name = null
      this.email = null
      this.password = null
      this.confirmPassword = null
      this.feedback = null
      this.slug = null
    }
  }
}
</script>
