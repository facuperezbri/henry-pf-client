export const GET_CATEGORY_SERVICE = async () => {
  try {
    let categories = await fetch('http://localhost:4000/api/category')
    let data = categories.json()
    return data
  } catch (error) {
    console.log(error)
  }
}