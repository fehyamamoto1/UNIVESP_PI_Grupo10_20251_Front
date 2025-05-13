<template>
  <v-container class="py-4">
    <h1 class="text-h4 mb-6">Menu</h1>

    <div v-if="menu.length === 0">Nenhum item do menu carregado</div>

    <v-row v-else dense>
      <v-col
        v-for="i in menu"
        :key="i._id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
      <v-card
        class="mx-auto d-flex flex-column"
        color="surface-variant"
        max-width="340"
        elevation="4"
        style="min-height: 400px"
      >
        <v-img
          :src="i.imageUrl"
          height="200"
          cover
        ></v-img>

        <v-card-title class="text-h6 text-white">
          {{ i.name }}
        </v-card-title>

        <v-card-subtitle
          class="text-body-2 text-white"
          style="white-space: normal; overflow: visible; text-overflow: unset;"
        >
          {{ i.description }}
        </v-card-subtitle>

        <v-spacer></v-spacer> <!-- empurra o botão para o fim -->

        <v-card-actions>
          <v-btn
            append-icon="mdi-chevron-right"
            color="red-darken-1"
            :text="`R$ ${i.value.toFixed(2)}`"
            variant="outlined"
            block
            class="text-black"
          ></v-btn>
        </v-card-actions>
      </v-card>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import menuService from '@/services/menuService'

export default {
  name: 'CardapioView',
  data() {
    return {
      menu: []
    }
  },
  async created() {
    try {
      const response = await menuService.buscarMenu()
      this.menu = response
    } catch (error) {
      console.error('Erro ao buscar menu:', error)
    }
  }
}
</script>
