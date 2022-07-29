export const LOG_IN = async ({ email, password, googleID }) => {
    try {  
      const res = await fetch('http://localhost:4000/api/user/login', {
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        method: 'POST',
        body: JSON.stringify({ email, password, googleID })
      })
      const resJSON = await res.json()
      return resJSON
    } catch (error) {
      console.error({ error })
    }
  }
  