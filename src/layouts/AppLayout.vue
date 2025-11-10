<template>
  <v-app class="app-background">
    <v-container fluid class="d-flex">
      <v-navigation-drawer
        permanent
        expand-on-hover
        app
        width="240"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://img.freepik.com/vetores-gratis/laranja-fundo-gostoso-hamburguer-liso-desenho_23-2147624237.jpg?semt=ais_hybrid&w=740&q=80"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">Burgers house</v-list-item-title>
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

          <v-list-item to="/estoque" link>
            <v-list-item-title>Estoque</v-list-item-title>
          </v-list-item>

          <v-list-item to="/cardapio" link>
            <v-list-item-title>Cardápio</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container fluid class="app-background">
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

<style scoped>
  .app-background {
    margin: 0;
    padding: 0;
    background: linear-gradient(to bottom, #000000 50%, #ff8c00 100%);
  }
</style>
