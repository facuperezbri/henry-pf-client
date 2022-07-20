export const GENERIC = 'GENERIC'

export const genericFunction = (input) => {
  return {
    type: GENERIC,
    payload: input
  }
}
