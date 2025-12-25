// services/rest-service.ts
import axios from 'axios'
import { popup } from '../components/popup/popup'

const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const NO_AUTH_ENDPOINTS = ['/Login', '/RegisterUser']

/**
 * トークン自動付与
 */
client.interceptors.request.use(config => {
  const token = localStorage.getItem('auth_token')

  const url = config.url ?? ''
  const isNoAuth = NO_AUTH_ENDPOINTS.some(path => url.includes(path))

  if (token && !isNoAuth) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

/**
 * 401（トークン切れ）
 */
client.interceptors.response.use(
  res => res,
  error => {
    // サーバからレスポンスが無い（通信不可）
    if (!error.response) {
      popup({
        type: 'alert',
        messages: [
          'サーバーに接続できませんでした。',
          '時間をおいて再度お試しください。'
        ]
      })
      return Promise.reject(error)
    }


    //認証切れ
    if (error.response?.status === 401) {
      // 認証情報クリア
      localStorage.removeItem('auth_token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('user_name')

      // ログイン画面へ強制遷移
      window.location.href = '/login'
    }

        // 500系（サーバエラー）
    if (error.response.status >= 500) {
      popup({
        type: 'alert',
        messages: [
          'サーバーエラーが発生しました。',
          'しばらくしてから再度お試しください。'
        ]
      })
      return Promise.reject(error)
    }



    return Promise.reject(error)
  }
)

export const useRestService = () => {
  const callPost = async <Req, Res>(
    url: string,
    req: Req
  ): Promise<Res> => {
    const res = await client.post<Res>(url, req)
    return res.data
  }

  return {
    callPost
  }
}
