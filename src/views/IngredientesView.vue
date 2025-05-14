<template>
  <v-container class="py-4">
    <h1 class="text-white mb-4">Estoque</h1>
    <div v-if="ingredientes.length === 0" class="text-white">
      Nenhum ingrediente carregado
    </div>
    <v-row v-else dense>
      <v-col
        v-for="i in ingredientes"
        :key="i._id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card
          :class="[
            'd-flex flex-column justify-space-between pa-4',
            i.quantity <= i.alertLevel ? 'border-red text-red' : 'border-grey text-white'
          ]"
          outlined
          color="grey-darken-4"
          style="min-height: 200px; border-width: 2px;"
        >
          <v-card-title
            :class="i.quantity <= i.alertLevel ? 'text-red' : 'text-white'"
            class="text-h6"
          >
            {{ i.name }}
          </v-card-title>

          <div class="d-flex justify-space-between my-2">
            <span>Quantidade atual:</span>
            <span>{{ i.quantity }} {{ i.measurementUnit }} ({{ i.quantity / 1000 }} kg)</span>
          </div>

          <div class="d-flex justify-space-between mb-4">
            <span>Alerta em:</span>
            <span>{{ i.alertLevel }} {{ i.measurementUnit }} ({{ i.alertLevel / 1000 }} kg)</span>
          </div>

          <v-progress-linear
          :model-value="(i.quantity / (i.max || 100)) * 100"
          height="10"
          :color="i.quantity <= i.alertLevel ? 'red' : 'green'"
          rounded
          striped
          :bg-color="i.quantity <= i.alertLevel ? 'red-darken-4' : 'grey-darken-3'"
          ></v-progress-linear>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ingredientsService from '@/services/ingredientsService'

export default {
  name: 'IngredientsView',
  data() {
    return {
      ingredientes: []
    }
  },
  async created() {
    try {
      const response = await ingredientsService.buscarIngredientes()
      this.ingredientes = response
    } catch (error) {
      console.error('Erro ao buscar ingredientes:', error)
    }
  }
}
</script>

<style scoped>
.text-white {
  color: white;
}
.border-red {
  border: 2px solid red !important;
}
.border-grey {
  border: 2px solid #9e9e9e !important;
}
</style>
