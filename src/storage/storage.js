export const TODOS_LIST = 'todos'
export const TODOS_BASKET = 'todos-basket'
export const LAST_LOAD_PAGE = 'last-load-page'

export function setStorage(value, key) {
    localStorage.setItem(key, JSON.stringify(value))
}

export function getStorage(key) {
   return JSON.parse(localStorage.getItem(key)) ? JSON.parse(localStorage.getItem(key)) : []
}

export function getLastLoadPage() {
    return JSON.parse(localStorage.getItem(LAST_LOAD_PAGE)) ? JSON.parse(localStorage.getItem(LAST_LOAD_PAGE)) : 0
}

export function setLastLoadPage(n) {
    localStorage.setItem(LAST_LOAD_PAGE, JSON.stringify(n))
}