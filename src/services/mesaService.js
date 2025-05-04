import api from './api'

export default {
    async buscarMesa(id){
        const response = await api.get(`/mesa/${id}/buscarMesa`);
        return response.data;
    },

    async realizarPedido(id, data) {
        api.post(`/mesa/${id}/realizarPedido`, data)
    },

    async inserirItems(id, data) {
        api.post(`/mesa/${id}/inserirItems`, data)
    },

    async fecharMesa(id) {
        api.post(`/mesa/${id}/fechar`)
    }
}
