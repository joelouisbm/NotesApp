import Vue from 'vue'
import Vuex from 'vuex'
import PersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [PersistedState()],
  state: {
    menu: [
      { id: 1, title: 'New note', icon: 'bi-pencil-square' },
      { id: 2, title: 'Notes', icon: 'bi-card-checklist' },
      { id: 3, title: 'Favorites', icon: 'bi-star' },
      { id: 4, title: 'Trash', icon: 'bi-trash' }
    ],
    query: new String,
    menuActive: -1,
    activeNote: new Object,
    showFavorites: false,
    showTrash: false,
    notes: new Array(),
    trash: new Array()
  },
  mutations: {
    handleInput(state, { value }) {
      state.query = value
    },
    setActiveNote(state, { id }) {
      let index = state.notes.findIndex((note) => note.id === id)
      if (index === -1) {
        index = state.trash.findIndex((note) => note.id === id)
        state.activeNote = state.trash[index]
      } else {
        state.activeNote = state.notes[index]
      }
    },
    setMenu(state, { id }) {
      state.showFavorites = false
      state.showTrash = false
      state.activeNote = new Object()
      state.menuActive = id
      if (id === 3) {
        state.showFavorites = true
      }
      else if (id === 4) {
        state.showTrash = true
      }
    },
    add(state, { note }) {
      if (!note.id)
        note.id = ((state.notes.length + 1) + (state.trash.length))
      state.notes = [...state.notes, note]
    },
    removeOrPutFavorite(state, { id }) {
      const index = state.notes.findIndex((note) => note.id === id)
      if (index !== -1)
        state.notes[index].favorite = !state.notes[index].favorite
    },
    traslateToTrash(state, { id }) {
      const index = state.notes.findIndex((note) => note.id === id)
      const note = state.notes[index]
      state.trash = [...state.trash, note]
      state.notes.splice(index, 1)
    },
    restore(state, { id }) {
      const index = state.trash.findIndex((note) => note.id === id)
      state.trash.splice(index, 1)
    },
    updateNote(state, { note }) {
      const index = state.trash.findIndex((el) => el.id === note.id)
      state.notes[index] = note
    },
    delete(state, { id }) {
      const index = state.trash.findIndex(el => el.id === id)
      if (index !== -1)
        state.trash.splice(index, 1)
    }
  },
  actions: {
    addNote(context, { note }) {
      context.commit('add', { note })
    },
    updateNote(context, { note }) {
      context.commit('updateNote', { note })
    },
    favorites(context, { id }) {
      context.commit('removeOrPutFavorite', { id })
    },
    traslateToTrash(context, { id }) {
      context.commit('traslateToTrash', { id })
    },
    restoreNote(context, { note }) {
      context.commit('add', { note })
      const id = note.id
      context.commit('restore', { id })
    },
    delete(context, { id }) {
      context.commit('delete', { id })
    }
  },
  getters: {
    notes: state => {
      if (state.query !== "") {
        if (state.showTrash) return state.trash.filter(note => note.text.includes(state.query))
        return state.notes.filter(note => note.text.includes(state.query))
      }
      if (state.showTrash) return state.trash
      if (state.showFavorites) {
        return state.notes.filter(note => note.favorite === true)
      }
      return state.notes
    },
    id: state => {
      return (state.notes.length + state.trash.length) + 1
    },
    activeNote: state => {
      return state.activeNote
    },
    menu: state => { return state.menu },
    menuActive: state => { return state.menuActive }
  }
})
