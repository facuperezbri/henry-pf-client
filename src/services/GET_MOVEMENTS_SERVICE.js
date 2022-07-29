import { API_URL } from "./API"
export const GET_MOVEMENT_SERVICE = async (cvu) => {
  try {
    let movements = await fetch(`${API_URL}/api/movement`, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      method: "POST",
      body: JSON.stringify({ cvu })
    })
    let data = movements.json()
    return data

  } catch (error) {
    console.log(error)
  }
}