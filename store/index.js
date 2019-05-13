// const baseUrl = 'https://hacker-news.firebaseio.com/v0/'

export const state = () => ({
  items: []
  // users: [{ id: 0, login: 'michael' }]
})

export const mutations = {
  setIds(state, ids) {
    state.ids = ids
  },
  setItems(state, items) {
    state.items = items
  }
  // setUsers(state, users) {
  //   state.users = users
  // }
}

export const actions = {
  async LOAD_ITEMS({ commit }, dataUrl) {
    /*
      ${baseUrl}askstories.json
    */
    const ids = await this.$axios.$get(dataUrl)
    const tenIds = ids.slice(0, 10)
    const itemsPromises = tenIds.map(id => this.$axios.$get(`item/${id}.json`))
    const items = await Promise.all(itemsPromises)
    const realItems = items.map(item =>
      item ? item : { title: 'Failed to load', id: 0 }
    )
    commit('setItems', realItems)
  }

  // async nuxtServerInit({ commit }) {
  //   const ids = await this.$axios.$get(`${baseUrl}topstories.json`)
  //   const tenIds = ids.slice(0, 10)

  //   console.log(tenIds)

  //   const itemsPromises = tenIds.map(id =>
  //     this.$axios.$get(`${baseUrl}item/${id}.json`)
  //   )
  //   console.log('items promises', itemsPromises)

  //   const items = await Promise.all(itemsPromises)

  //   commit('setItems', items)

  //   // commit('setIds', ids)
  //   // const users = await this.$axios.$get('https://api.github.com/users')
  //   // commit('setUsers', users)
  // }
}
