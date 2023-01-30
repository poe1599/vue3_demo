import api from '@/api/api'

// 以下為撰寫範例，非實際 API 路由

// method範例 GET
const getExample = async () => {
  const config = {
    url: '/exampleUrlPath',
  }
  return await api.get(config)
}

// method範例 POST
const postExample = async () => {
  const config = {
    url: '/exampleUrlPath',
  }
  return await api.post(config)
}

// method範例 PUT
const putExample = async () => {
  const config = {
    url: '/exampleUrlPath',
  }
  return await api.put(config)
}

// method範例 DELETE
const deleteExample = async () => {
  const config = {
    url: `/exampleUrlPath`,
  }
  return await api.delete(config)
}

// payload範例 將資料帶在http body傳送(以下用POST示範)
const postDataExample = async data => {
  const config = {
    url: '/exampleUrlPath',
    data,
  }
  return await api.post(config)
}

// payload範例 將資料帶在URL query string傳送(以下用POST示範)
const postParamsExample = async params => {
  const config = {
    url: '/exampleUrlPath',
    params,
  }
  return await api.post(config)
}

// RESTful範例 將資料帶在URL path傳送(以下用GET示範)
const getRestfulExample = async paramsObject => {
  const { param1, param2, param3 } = paramsObject
  const config = {
    url: `/exampleUrlPath/${param1}/${param2}/${param3}`,
  }
  return await api.get(config)
}

export { getExample, postExample, putExample, deleteExample, postDataExample, postParamsExample, getRestfulExample }
