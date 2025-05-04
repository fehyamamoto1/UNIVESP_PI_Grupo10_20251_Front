<template>
  <v-app>
    <v-container fluid class="d-flex pa-0">
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
        class="bg-black-lighten-4"
        width="240"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://images.vexels.com/media/users/3/129606/isolated/preview/74fb78d3222ba12833ea9275c53a4935-burger-logo.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">BurgerHouse</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <!-- Links de navegação -->
        <v-list nav dense>
          <v-list-item to="/" link>
            <v-list-item-title>Início</v-list-item-title>
          </v-list-item>

          <v-list-item to="/mesas" link>
            <v-list-item-title>Mesas</v-list-item-title>
          </v-list-item>

          <v-list-item to="/ingredientes" link>
            <v-list-item-title>Ingredientes</v-list-item-title>
          </v-list-item>

          <v-list-item to="/cardapio" link>
            <v-list-item-title>Cardápio</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid class="pa-6">
          <router-view />
        </v-container>
      </v-main>

      <v-footer app class="bg-red-lighten-3 justify-center">
        <span class="text-caption">
          Aviso: Este website representa o modelo em desenvolvimento. As primeiras requests após o servidor e o banco de dados entrarem em modo ocioso podem levar até 50 segundos para concluir.
        </span>
      </v-footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
