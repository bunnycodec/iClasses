<template>
  <v-footer dark padless>
    <v-card flat tile color="#23313c" class="white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text
        class="white--text py-6"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maxime cum deserunt, earum hic aspernatur sequi molestias eveniet perferendis autem unde, aut velit itaque vero! Possimus culpa laudantium blanditiis eum asperiores nisi expedita ut quidem, at facilis explicabo maxime eos totam est illo necessitatibus minima provident ipsam soluta. Quam sint voluptate quia rem unde iste nostrum dolores et corporis iure. Pariatur ipsa error corrupti, necessitatibus, eum et quisquam itaque repellendus similique rem amet? Natus iste aperiam amet nulla asperiores, facere quidem sed ipsam molestiae, molestias unde temporibus doloribus? Vitae ut earum placeat expedita iste culpa repellendus laudantium. At, accusantium officia.</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} —
        <strong>iClasses</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram']
  })
}
</script>
