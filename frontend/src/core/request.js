/**
 * HTTP Request Wrapper
 * 为未来切换到真实 Gin API 做准备
 *
 * 当前使用 mock 数据，后续只需修改此文件即可切换后端
 */

const BASE_URL = import.meta.env.VITE_API_BASE || '/api'

class RequestError extends Error {
  constructor(message, status, data) {
    super(message)
    this.name = 'RequestError'
    this.status = status
    this.data = data
  }
}

async function request(path, options = {}) {
  const url = `${BASE_URL}${path}`
  const config = {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  }

  try {
    const response = await fetch(url, config)
    const data = await response.json().catch(() => null)

    if (!response.ok) {
      throw new RequestError(
        data?.message || `请求失败 (${response.status})`,
        response.status,
        data
      )
    }

    return data
  } catch (err) {
    if (err instanceof RequestError) throw err
    throw new RequestError(err.message || '网络错误', 0, null)
  }
}

export const api = {
  get: (path, opts) => request(path, { ...opts, method: 'GET' }),
  post: (path, body, opts) => request(path, { ...opts, method: 'POST', body: JSON.stringify(body) }),
  put: (path, body, opts) => request(path, { ...opts, method: 'PUT', body: JSON.stringify(body) }),
  delete: (path, opts) => request(path, { ...opts, method: 'DELETE' }),
}

export { RequestError }
export default api
