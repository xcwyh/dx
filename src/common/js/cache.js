import storage from 'good-storage'

const USER_ID = '__userId__'

const TOKEN = '__token__'

const USER_COOKIE = '__userCookie__'

export function saveUserId (userId) {
  storage.set(USER_ID, userId)
}

export function deleteUserId () {
  storage.remove(USER_ID)
}

export function getUserId () {
  return storage.get(USER_ID, [])
}

export function saveToken (token) {
  storage.set(TOKEN, token)
}

export function deleteToken () {
  storage.remove(TOKEN)
}

export function getToken () {
  return storage.get(TOKEN, [])
}

export function saveUserCookie (userCookie) {
  storage.set(USER_COOKIE, userCookie)
}

export function deleteUserCookie () {
  storage.remove(USER_COOKIE)
}

export function getUserCookie () {
  return storage.get(USER_COOKIE, [])
}
