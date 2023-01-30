import axios from 'axios'

const defaultConfig = {
  baseURL: 'https://tdx.transportdata.tw/',
  timeout: 15000,
  // headers: {},
}

Object.assign(axios.defaults, defaultConfig)

const request = axios.create()

export { request }
