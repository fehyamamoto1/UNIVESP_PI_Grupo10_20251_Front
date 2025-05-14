<template>
  <div class="pa-4">
    <h1>Mesas</h1>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="mesa in mesas"
          :key="mesa"
          cols="3"
          class="d-flex justify-center"
        >
          <v-btn
            :color="mesaSelecionada === mesa ? 'orange' : 'grey lighten-1'"
            class="ma-2"
            block
            @click="selecionarMesa(mesa)"
          >
            Mesa {{ mesa }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-4"></v-divider>

    <div v-if="mesaSelecionada">
      <h2>Mesa {{ mesaSelecionada }}</h2>
      <div v-if="!mesaAberta || !mesaAberta.itemList?.length">
        <p>Nenhum item na mesa.</p>
      </div>
      <v-btn
        color="primary"
        @click="abrirDrawer('abrir')"
        v-if="!mesaAberta || !mesaAberta.itemList?.length"
      >
        Abrir mesa
      </v-btn>

       <div class="itens-list-box" v-else >
        <h3>Lista de itens</h3>
        <v-list class="itens-list">
          <v-list-item
            v-for="(item, index) in mesaAberta.itemList"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.itemName }} (x{{ item.quantity }}) - Unidade: R$ {{ item.itemValue.toFixed(2) }} - Total: R$ {{
                  (item.itemValue * item.quantity).toFixed(2)
                }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <h3 class="mt-4">Total: R$ {{ mesaAberta.totalValue?.toFixed(2) || '0.00' }}</h3>
      </div>

      <v-btn
        v-if="mesaAberta?.itemList?.length"
        color="primary"
        @click="abrirDrawer('adicionar')"
      >
        Adicionar pedido
      </v-btn>

      <MenuDrawer
        v-if="drawerAberto"
        :mesa-id="mesaSelecionada"
        :acao="acaoAtual"
        :show="drawerAberto"
        @close="drawerAberto = false"
        @finalizado="recarregarMesa"
      />
    </div>
  </div>
</template>

<script>
import mesaService from '@/services/mesaService'
import MenuDrawer from '@/components/MenuDrawer.vue'

export default {
  components: { MenuDrawer },
  data() {
    return {
      mesas: [1, 2, 3, 4, 5],
      mesaSelecionada: null,
      mesaAberta: null,
      drawerAberto: false,
      acaoAtual: null
    }
  },
  methods: {
    async selecionarMesa(id) {
      this.mesaSelecionada = id
      const response = await mesaService.buscarMesa(id)
      this.mesaAberta = response?.[0] || null
    },
    abrirDrawer(acao) {
      this.acaoAtual = acao
      this.drawerAberto = true
    },
    async recarregarMesa() {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await this.selecionarMesa(this.mesaSelecionada)
    }
  }
}
</script>

<style scoped>
.itens-list-box {
  border: 1px solid #ccc;
  border-radius: 12px; 
  padding: 16px;
  background-color: rgb(43, 44, 45);
}
.itens-list {
  border: 1px solid #ccc;
  border-radius: 12px; 
  padding: 16px;
}
</style>