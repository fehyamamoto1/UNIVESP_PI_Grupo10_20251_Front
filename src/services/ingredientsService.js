import api from './api'

export default {
    async buscarIngredientes() {
        const response = await api.get('/ingredientes/listarTodos')
        return response.data
    },

    async buscarIngredientePorId(id) {
        const response = await api.get(`/ingredientes/${id}`)
        return response.data
    },

    async criarIngrediente(dados) {
        return await api.post('/ingredientes', dados) 
    },

    async atualizarIngrediente(id, dados) {
        return await api.put(`/ingredientes/${id}`, dados)
    },

    async deletarIngrediente(id){
        return await api.delete(`/ingredientes/${id}`)
    }
}