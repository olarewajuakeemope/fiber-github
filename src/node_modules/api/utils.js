import { constants } from 'config'

const checkStatus = parser => async response => {
  if (response.status >= 200 && response.status < 300) {
    if (response.status === 204) {
      return {}
    }
    const data = await response[parser]()
    const headers = {}
    response.headers.forEach((val, key) => {
      headers[key] = val
    })
    return {
      data,
      headers,
    }
  } else {
    throw new Error(`${response.status}: ${response.statusText}`)
  }
}

function asKeyValue(key, value) {
  return encodeURIComponent(key) + '=' + encodeURIComponent(value)
}

function encodeQuery(obj) {
  const str = []
  for (const key of Object.keys(obj)) {
    const value = obj[key]
    str.push(asKeyValue(key, value))
  }
  return str.join('&')
}

function makeRestOptions(endpoint, method, body = {}, options = {}) {
  const params = {
    headers: {},
    url: constants.api.BASE_URL + endpoint,
    method,
    ...options,
  }

  let { url } = params

  if (Object.keys(body).length !== 0) {
    if (params.method === 'get') {
      url += '?' + encodeQuery(body)
    }
  }

  return { ...params, url }
}

export { checkStatus, makeRestOptions }
