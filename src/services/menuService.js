import api from './api'

export default {
    async buscarMenu() {
        const response = await api.get('/menu/listarItens')
        return response.data
    },

    async buscarItemMenuPorId(id) {
        const response = await api.get(`/menu/${id}`)
        return response.data
    },

    async criarItemMenu(dados) {
        return await api.post('/menu', dados)
    },

    async atualizarItemMenu(id, dados) {
        return await api.put(`/menu/${id}`, dados)
    },

    async deletarItemMenu(id) {
        return await api.delete(`/menu/${id}`)
    }
}
