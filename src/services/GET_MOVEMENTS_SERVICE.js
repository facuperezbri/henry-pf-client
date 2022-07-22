
export const GET_MOVEMENT_SERVICE = async (cvu) => {
  try {
    let movements = await fetch('http://localhost:4000/api/movement', {
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