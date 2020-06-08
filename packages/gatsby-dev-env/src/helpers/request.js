import fetch from "isomorphic-unfetch"

const requestByMethod = method => (url, options) => {
  options = options || {}
  options.method = method.toUpperCase()

  let req = fetch(url, options)

  if (options.json) {
    req = req.then(res => res.json())
  }

  return req
}

const get = requestByMethod("get")
const post = requestByMethod("post")
const patch = requestByMethod("patch")
const put = requestByMethod("put")
const remove = requestByMethod("delete")

export { get, post, patch, put, remove as delete }
