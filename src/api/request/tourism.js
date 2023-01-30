import api from '@/api/api'

// TDX api Swagger 觀光資訊
// https://tdx.transportdata.tw/api-service/swagger/basic/cd0226cf-6292-4c35-8a0d-b595f0b15352#/Tourism/TourismApi_ScenicSpot_2240

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
