import api from './api'

export const buscarMenu = () => api.get('/menu')
export const buscarItemMenuPorId = (id) => api.get(`/menu/${id}`)
export const criarItemMenu = (dados) => api.post('/menu', dados)
export const atualizarItemMenu = (id, dados) => api.put(`/menu/${id}`, dados)
export const deletarItemMenu = (id) => api.delete(`/menu/${id}`)
