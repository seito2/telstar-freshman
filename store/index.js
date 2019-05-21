export const state = () => ({
  isShowMenu: false,
  wherePage: 'index'
})

export const mutations = {
  toggleMenu(state) {
    state.isShowMenu = !state.isShowMenu;
  },
  changePage(state, page) {
    state.wherePage = page;
    window.location.href = page;
  }
}