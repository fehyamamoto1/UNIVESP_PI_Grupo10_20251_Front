<template>
  <v-container class="py-4">
    <v-card
      class="pa-6 mx-auto"
      max-width="800"
      color="grey-darken-3"
      variant="outlined"
      rounded="lg"
      border
      style="border-color: white;"
    >
      <h1 class="text-h5 mb-4 text-white">Home</h1>
      
      <v-img
        src="https://univesp.br/sites/527174b7b24a527adc000002/assets/590b74fa9caf4d3c61001001/Univesp_logo_png_rgb.png"
        max-width="200"
        class="mx-auto mt-8"
        contain
      ></v-img>

      <p class="text-white">
        Este é um projeto criado para a matéria de Projeto Integrador em Computação da UNIVESP, 2025/1
      </p>
      <p class="text-white">
        Aqui temos uma demonstração em página web do que seria o sistema offline. A funcionalidade desta página é limitada por motivos de segurança.
      </p>
      <p class="text-white">
        O propósito do projeto é mostrar que é possível abstrair um sistema de controle de estoque e ainda manter a naturalidade do sistema.
      </p>

      <br />

      <p class="text-white">
        Todas os recursos utilizados neste projeto pertencem ao estabelecimento Burger House. Sigam a página no Instagram:
      </p>

      <v-btn
        href="https://www.instagram.com"
        target="_blank"
        icon
        color="pink"
        class="mb-1"
      >
        <v-icon>mdi-instagram</v-icon>
      </v-btn>

      <p class="text-white">
        E não se esqueçam de visitar a casa quando passarem por Tabatinga-SP.
      </p>

      <p class="text-white">
        O grupo agradece de coração aos proprietários Danilo e Jhenifer por compartilharem alguns de seus desafios diários e nos trazer a inspiração para este projeto.
      </p>

      <br />
      <br />

      <p class="text-white font-weight-bold">Criado por:</p>
      <ul class="text-white">
        <li>Andre Esperandio</li>
        <li>Felipe Yamamoto</li>
        <li>Gabriel Bonifacio</li>
        <li>Jessica Santos</li>
        <li>Renan Bellardo</li>
        <li>Paulo do Nascimento</li>
        <li>Willian Dias</li>
      </ul>

    </v-card>
  </v-container>
</template>

  <script>
  import '@mdi/font/css/materialdesignicons.css'
  export default {
    name: 'HomeView'
  }
  </script>
  