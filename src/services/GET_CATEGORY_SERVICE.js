import { API_URL } from "./API"
export const GET_CATEGORY_SERVICE = async () => {
  try {
    let categories = await fetch(`${API_URL}/api/category`)
    let data = categories.json()
    return data
  } catch (error) {
    console.log(error)
  }
}