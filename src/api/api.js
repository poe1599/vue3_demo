/* eslint-disable camelcase */
import dayjs from 'dayjs'
import { request } from '@/api/request'
import { postSysLogin } from '@/api/request/sys'

// 檢查 token 時效
const checkToken = async () => {
  const env = import.meta.env
  const { VITE_SYS_KEY } = env

  // 檢查 token 是否過期
  const checkTokenIsExpired = () => {
    const tokenObj = JSON.parse(localStorage.getItem(VITE_SYS_KEY))
    if (!tokenObj) return true

    const { expiredTime } = tokenObj
    const isExpired = dayjs().isAfter(dayjs(expiredTime))
    return isExpired
  }

  // 從取用 localStorage 取用 authorization
  const getAuthorizationFromStorage = () => {
    const tokenObj = JSON.parse(localStorage.getItem(VITE_SYS_KEY))
    const { access_token, token_type } = tokenObj
    const Authorization = `${token_type} ${access_token}`
    return Authorization
  }

  // 從取用 API 取得新的 authorization
  const getAuthorizationFromApi = async () => {
    const response = await postSysLogin()
    if (!response) return

    const { access_token, token_type, expires_in } = response
    const timestampNow = dayjs().valueOf()
    const advanceTime = 60 * 10 * 1000 // 提前10分鐘
    const expiredTime = timestampNow + expires_in * 1000 - advanceTime
    localStorage.setItem(VITE_SYS_KEY, JSON.stringify({ ...response, expiredTime }))

    const Authorization = `${token_type} ${access_token}`
    return Authorization
  }

  const isTokenExpired = checkTokenIsExpired()
  const getAuthFn = isTokenExpired ? getAuthorizationFromApi : getAuthorizationFromStorage
  return await getAuthFn()
}

const injectRequest = async (apiConfig, callCheck = true) => {
  try {
    const { url, data, params, headers = {}, method, timeout, baseURL } = apiConfig

    if (callCheck) {
      const Authorization = await checkToken()
      Object.assign(headers, { Authorization })
    }

    const requestConfig = {
      method: method.toUpperCase(),
      url,
      data,
      params,
      headers,
      timeout,
      baseURL,
    }
    const response = await request(requestConfig)
    return response.data
  } catch (err) {
    return null
  }
}

const api = {
  async postSysLogin(config) {
    return injectRequest(
      {
        method: 'post',
        ...config,
      },
      false,
    )
  },

  async get(config) {
    return injectRequest({
      method: 'get',
      ...config,
    })
  },

  async post(config) {
    return injectRequest({
      method: 'post',
      ...config,
    })
  },

  async put(config) {
    return injectRequest({
      method: 'put',
      ...config,
    })
  },

  async delete(config) {
    return injectRequest({
      method: 'delete',
      ...config,
    })
  },
}

export default api
