export const GET_USER_DATA = async (token) => {
  try {
    const res = await fetch('http://localhost:4000/api/user', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    const data = res.json()
    return data

  } catch (error) {
    console.log(error)
  }

}