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
        <v-btn color="primary" @click="abrirMesa">Abrir mesa</v-btn>
      </div>

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
        <v-btn
          v-if="mesaAberta.itemList?.length"
          color="primary"
          @click="adicionarPedido"
        >
          Adicionar pedido
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import mesaService from "@/services/mesaService";

export default {
  name: 'MesaView',
  data() {
    return {
      mesas: [1, 2, 3, 4, 5], 
      mesaSelecionada: null,
      mesaAberta: null
    };
  },
  methods: {
    async selecionarMesa(id) {
      this.mesaSelecionada = id;
      const response = await mesaService.buscarMesa(id);

      this.mesaAberta = response?.[0] || null;

      console.log(this.mesaAberta)
    },
    async abrirMesa() {
      const payload = {
        itemList: []
      };
      try {
        await mesaService.abrirMesa(this.mesaSelecionada, payload);
        this.selecionarMesa(this.mesaSelecionada); 
      } catch (err) {
        alert("Erro ao abrir mesa.");
      }
    },
    async adicionarPedido() {
      const payload = {
        itemList: [
          { itemId: "123", itemName: "Exemplo", itemValue: 10, quantity: 1 }
        ]
      };
      try {
        await mesaService.adicionarPedido(this.mesaSelecionada, payload);
        this.selecionarMesa(this.mesaSelecionada); 
      } catch (err) {
        alert("Erro ao adicionar pedido.");
      }
    }
  }
};
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