/* eslint-disable camelcase */
import api from '@/api/api'

// 取得 token
const postSysLogin = async () => {
  const env = import.meta.env
  const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = env
  const response = await api.postSysLogin({
    url: 'auth/realms/TDXConnect/protocol/openid-connect/token',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'client_credentials',
      client_id: VITE_CLIENT_ID,
      client_secret: VITE_CLIENT_SECRET,
    },
  })
  return response
}

export { postSysLogin }
