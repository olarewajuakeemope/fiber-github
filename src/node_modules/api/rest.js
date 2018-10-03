import { makeRestOptions, checkStatus } from './utils'

const parsers = {
  jsonParser: checkStatus('json'),
}

export function fetchRequest(endpoint, method, body, options) {
  const { url, options: restOptions, ...rest } = makeRestOptions(endpoint, method, body, options)
  return fetch(url, { ...restOptions, ...rest }).then(parsers.jsonParser)
}
