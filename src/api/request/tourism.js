import api from '@/api/api'

// TDX api Swagger 觀光資訊
// https://tdx.transportdata.tw/api-service/swagger/basic/cd0226cf-6292-4c35-8a0d-b595f0b15352#/Tourism/TourismApi_ScenicSpot_2240

// 公共運輸整合資訊平台資料服務開發實作.pdf
// https://docs.google.com/viewer?url=https://github.com/ptxmotc/PTX_Web/blob/master/Swagger%E6%9C%8D%E5%8B%99%E8%AA%AA%E6%98%8E%E4%B8%8A%E5%82%B3%E5%8F%83%E8%80%83%E6%AA%94%E6%A1%88/%E5%85%AC%E5%85%B1%E9%81%8B%E8%BC%B8%E6%95%B4%E5%90%88%E8%B3%87%E8%A8%8A%E5%B9%B3%E5%8F%B0%E8%B3%87%E6%96%99%E6%9C%8D%E5%8B%99%E9%96%8B%E7%99%BC%E5%AF%A6%E4%BD%9C.pdf?raw=true

// 取得觀光景點資料
const getScenicSpot = async ({ params = {}, city = '' } = {}) => {
  const defaultParams = {
    // $select
    // $filter
    // $orderby
    $top: 10,
    // $skip
    $format: 'JSON',
  }

  const config = {
    url: `/api/basic/v2/Tourism/ScenicSpot${city ? `/${city}` : ''}`,
    params: Object.assign(defaultParams, params),
  }
  return await api.get(config)
}

// 取得觀光餐飲資料
const getRestaurant = async ({ params = {}, city = '' } = {}) => {
  const defaultParams = {
    // $select
    // $filter
    // $orderby
    $top: 10,
    // $skip
    $format: 'JSON',
  }

  const config = {
    url: `/api/basic/v2/Tourism/Restaurant${city ? `/${city}` : ''}`,
    params: Object.assign(defaultParams, params),
  }
  return await api.get(config)
}

// 取得觀光旅宿資料
const getHotel = async ({ params = {}, city = '' } = {}) => {
  const defaultParams = {
    // $select
    // $filter
    // $orderby
    $top: 10,
    // $skip
    $format: 'JSON',
  }

  const config = {
    url: `/api/basic/v2/Tourism/Hotel${city ? `/${city}` : ''}`,
    params: Object.assign(defaultParams, params),
  }
  return await api.get(config)
}

// 取得觀光活動資料
const getActivity = async ({ params = {}, city = '' } = {}) => {
  const defaultParams = {
    // $select
    // $filter
    // $orderby
    $top: 10,
    // $skip
    $format: 'JSON',
  }

  const config = {
    url: `/api/basic/v2/Tourism/Activity${city ? `/${city}` : ''}`,
    params: Object.assign(defaultParams, params),
  }
  return await api.get(config)
}

export { getScenicSpot, getRestaurant, getHotel, getActivity }
