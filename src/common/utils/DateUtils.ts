export function getToday () {
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Normalize to start of the day
  
    return today
}