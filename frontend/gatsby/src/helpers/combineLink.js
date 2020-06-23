const combineLink = (...args) => {
  let link = ""

  if (args[0] === "/") {
    args[0] = ""
  }

  args.forEach((value) => (link += `${value}/`))

  return link.substr(0, link.length - 1)
}

export default combineLink
