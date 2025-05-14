<template>
  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    width="550"
    class="bg-grey-darken-3"
  >
    <v-toolbar flat class="bg-dark">
      <v-toolbar-title class="text-white">Selecione os itens</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="fechar">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-divider class="my-2"></v-divider>

    <v-container>
      <v-row v-if="menu.length">
        <v-col
          v-for="(item, index) in menu"
          :key="index"
          cols="12"
        >
          <v-card
            class="pa-3 mb-3"
            variant="outlined"
            color="grey-darken-2"
          >
            <v-row align="center">
              <v-col cols="1">
                <v-checkbox
                  v-model="item.selected"
                  :ripple="false"
                  hide-details
                  color="white"
                />
              </v-col>

              <v-col cols="8">
                <div class="text-white font-weight-medium">{{ item.name }}</div>
                <div class="text-white text-caption">{{ item.description }}</div>
                <div class="text-white mt-1">R$ {{ item.value.toFixed(2) }}</div>
              </v-col>

              <v-col cols="3">
                <v-text-field
                  v-model.number="item.quantity"
                  :disabled="!item.selected"
                  type="number"
                  min="1"
                  density="compact"
                  hide-details
                  variant="outlined"
                  label="Qtd"
                  color="white"
                />
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-btn
        color="primary"
        block
        @click="finalizar"
        :disabled="!itensSelecionados.length"
      >
        Finalizar Pedido
      </v-btn>
    </v-container>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import menuService from '@/services/menuService'

const props = defineProps({
  mesaId: Number,
  acao: String,
  show: Boolean
})
const emit = defineEmits(['close', 'finalizado'])

const drawer = ref(props.show)
const menu = ref([])

onMounted(async () => {
  const itens = await menuService.buscarMenu()
  menu.value = itens.map(item => ({
    ...item,
    selected: false,
    quantity: 1
  }))
})

watch(drawer, (val) => {
  if (!val) {
    emit('close')
  }
})

watch(() => props.show, (val) => {
  drawer.value = val
})

const fechar = () => {
  drawer.value = false
}

const itensSelecionados = computed(() => {
  return menu.value
    .filter(item => item.selected)
    .map(item => ({
      itemId: item._id,
      itemName: item.name,
      itemValue: item.value,
      quantity: item.quantity
    }))
})

const finalizar = async () => {
  const mesaService = (await import('@/services/mesaService')).default

  if (props.acao === 'abrir') {
    await mesaService.realizarPedido(props.mesaId, {
      itemList: itensSelecionados.value
    })
  } else if (props.acao === 'adicionar') {
    await mesaService.inserirItems(props.mesaId, {
      itemList: itensSelecionados.value
    })
  }

  emit('finalizado')
  fechar()
}
</script>

<style scoped>
.text-white {
  color: white !important;
}

.v-toolbar.bg-dark {
  background-color: #333 !important;
}
</style>
