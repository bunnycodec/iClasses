<template>
  <div class="container">
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card class="mx-auto flat px-3" elevation="10">
          <v-row class="px-5 py-2 grey lighten-1 black--text">
            <v-col cols="12">
              <span class="text-h4">New Article</span>
            </v-col>
          </v-row>

          <div class="pa-10">
            <v-form>
              <v-text-field
                v-model="title"
                name="title"
                color="#242423"
                label="Title"
                prepend-icon="mdi-pound"
              ></v-text-field>
              <ckeditor class="mb-8" v-model="content" :config="editorConfig"></ckeditor>
              <v-btn color="#5ccb91" elevation="5" large block>Create Article</v-btn>
            </v-form>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      content: 'How do you plan to influence ? ',
      editorConfig: {
        toolbar: [
          ['Source'],
          ['Styles', 'Format', 'Font', 'FontSize'],
          ['Bold', 'Italic'],
          ['Undo', 'Redo']
        ]
      }
    }
  },

  methods: {}
}
</script>
