export const SIGN_IN = async (data) => {
  try {
    const {
      photoDNIFront,
      photoDNIReverse,
      email,
      password,
      name,
      lastname,
      DNI,
      username,
      profilepic,
      googleID
    } = data
    console.log(Array.isArray(photoDNIFront), Array.isArray(photoDNIReverse), [photoDNIFront[0], Object.values(photoDNIReverse)[0]], photoDNIFront[0], photoDNIReverse[0])
    const body = new FormData()
    body.append('email', email)
    body.append('password', password)
    body.append('name', name)
    body.append('lastname', lastname)
    body.append('DNI', DNI)
    body.append('username', username)
    body.append('profilepic', profilepic)
    body.append('googleID', googleID)
    body.append('imagesOne', photoDNIFront[0])
    body.append('imageTwo', photoDNIReverse[0])

    const res = await fetch('http://localhost:4000/api/user/new', {
      method: 'POST',
      body
    })
    const resJSON = await res.json()

    return resJSON
  } catch (error) {
    console.error(error)
  }
}
