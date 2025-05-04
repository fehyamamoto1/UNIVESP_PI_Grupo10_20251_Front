import api from './api'

export const buscarIngredientes = () => api.get('/ingredientes')
export const buscarIngredientePorId = (id) => api.get(`/ingredientes/${id}`)
export const criarIngrediente = (dados) => api.post('/ingredientes', dados)
export const atualizarIngrediente = (id, dados) => api.put(`/ingredientes/${id}`, dados)
export const deletarIngrediente = (id) => api.delete(`/ingredientes/${id}`)