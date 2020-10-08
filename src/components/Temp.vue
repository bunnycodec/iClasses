<template>
  <div class="container">
    <v-row>
      <v-col cols="12">
        <span class="text-h3">Heading</span>
        <br />
        <span class="subtitle-1">Sub Heading</span>
        <v-divider style="border: #242423 solid 1px;" class="mt-2"></v-divider>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="n in 5" :key="n" cols="12" lg="4" sm="6">
        <v-card class="mx-auto" dark>
          <v-sheet class="pa-3" color="#25A18E">
            <span class="text-h5">Why ML is important?</span>
          </v-sheet>

          <v-sheet class="px-4 pt-4 black--text" style="cursor: pointer;" color="#69DDCC">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptate nemo sed asperiores. Neque facere, odio voluptate ex ullam dignissimos!d Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam molestias ut porro, at blanditiis voluptatem nulla. Maxime eius architecto consequatur.</span>
            <v-row>
              <v-col cols="12" align="end">
                <v-dialog width="650px">
                  <template v-slot:activator="{ on }">
                    <v-btn
                      class="black--text teal lighten-2"
                      v-on="on"
                      text
                      tile
                      elevation="2"
                    >Read More ...</v-btn>
                  </template>
                  <v-card class="container grey lighten-1 black--text">
                    <v-row class="px-5 py-2">
                      <v-col cols="12">
                        <span class="text-h4">Why ML is important?</span>
                      </v-col>
                    </v-row>
                    <v-row class="px-5 py-2 grey lighten-5">
                      <v-col cols="12">
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum molestias et aperiam. Fugiat voluptates laborum libero, aut animi ratione aliquam minus perferendis reprehenderit exercitationem atque sapiente maxime dolor magnam unde pariatur sequi nisi commodi rem quos mollitia error aperiam. Minus quis aliquam nostrum rerum saepe ipsum veniam illum repellat voluptatibus inventore perferendis ducimus, omnis molestiae autem laboriosam ullam architecto libero error. Nisi repellat veniam nam doloribus, animi sunt vel ad blanditiis ut laboriosam, nemo consectetur iusto pariatur, minus quod facere voluptas excepturi! Natus, ullam exercitationem. Cumque omnis debitis nihil quam facere repellat exercitationem suscipit, aut placeat animi officia neque. Iste.</span>
                      </v-col>
                    </v-row>
                    <v-row class="px-5 grey lighten-2">
                      <v-col cols="6">
                        <v-avatar color="#242423">
                          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                        </v-avatar>
                        <span class="ml-2 body-1 font-weight-bold">Ankan Dutta</span>
                      </v-col>
                      <v-col cols="6" class="my-auto pl-4">
                        <div class="float-right">
                          <v-btn class="ma-1" text icon @click="colorChange()">
                            <v-icon :color="redColor">mdi-heart</v-icon>
                          </v-btn>
                          <span class="subtitle-2 mr-1">256</span>
                          <span class="mx-1"></span>
                          <v-btn class="ma-1" text icon>
                            <v-icon>mdi-message-text</v-icon>
                          </v-btn>
                          <span class="subtitle-2">45</span>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row class="px-5 black--text">
                      <v-col cols="12">
                        <span class="text-h4 mt-3">Comments</span>
                      </v-col>
                      <v-col cols="12">
                        <v-list>
                          <v-card class="mb-2" v-for="m in 5" :key="m">
                            <v-list-item>
                              <v-list-item-avatar>
                                <img src="https://cdn.vuetifyjs.com/images/lists/2.jpg" />
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title>Ankan Dutta</v-list-item-title>
                                <v-list-item-subtitle class="text-wrap">
                                  <span class="font-weight-bold">13-06-2020 14:06</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime magnam sapiente aperiam praesentium, amet id iusto hic labore atque consequuntur!
                                </v-list-item-subtitle>
                              </v-list-item-content>
                            </v-list-item>
                          </v-card>
                        </v-list>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-textarea
                          class="px-5"
                          v-model="comment"
                          name="comment"
                          color="#242423"
                          outlined
                          label="Your Comment"
                          auto-grow
                          clearable
                        ></v-textarea>
                        <v-btn
                          @click.prevent
                          class="px-5"
                          color="#5ccb91"
                          elevation="5"
                          large
                        >Submit</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-sheet>

          <v-sheet class="pa-3 black--text" color="#25A18E">
            <v-row no-gutters>
              <v-col cols="6">
                <v-avatar color="#242423">
                  <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
                </v-avatar>
                <span class="ml-2 body-1 font-weight-bold">Ankan Dutta</span>
              </v-col>
              <v-col cols="6" class="my-auto pl-4">
                <v-btn class="ma-1" text icon @click="colorChange()">
                  <v-icon :color="redColor">mdi-heart</v-icon>
                </v-btn>
                <span class="subtitle-2 mr-1">256</span>
                <span class="mx-1"></span>
                <v-btn class="ma-1" text icon>
                  <v-icon>mdi-message-text</v-icon>
                </v-btn>
                <span class="subtitle-2">45</span>
              </v-col>
            </v-row>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import db from 'firebase'

export default {
  create () {
    db.collection('articles').get(snapshot => {
      snapshot
        .forEach(doc => {
          this.articles = doc.data()
        })
        .then(() => {
          console.log(this.articles)
        })
    })
  },

  data () {
    return {
      articles: [],
      comment: null,
      redColor: ''
    }
  },

  methods: {
    colorChange () {
      if (this.redColor === '') this.redColor = 'red'
      else this.redColor = ''
    }
  }
}
</script>

<style lang="scss">
.custom {
  background-color: red;
}
</style>
