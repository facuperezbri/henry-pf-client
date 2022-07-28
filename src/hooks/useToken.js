const useToken = function () {
  if (typeof window !== 'undefined') {
    // browser code
    const setToken = (/** @type {String} */ token) => window.localStorage.setItem('token', token)

    const token = window.localStorage.getItem('token')
    return { token, setToken }
  }
  return {
    setToken: (/** @type {String} */ state) => console.log(state),
    token: ''
  }
}

export { useToken }