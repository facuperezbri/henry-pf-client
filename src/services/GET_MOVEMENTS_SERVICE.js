
export const GET_MOVEMENT_SERVICE = async (cvu) => {
  try {
    let movements = await fetch('http://localhost:4000/api/movement', {
      method: "GET",
      body: JSON.stringify({ cvu })
    })
    let data = movements.data
    return data

  } catch (error) {
    console.log(error)
  }
}