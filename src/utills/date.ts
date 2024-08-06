import dayjs from 'dayjs'

export const getMonthData = (month = dayjs().month()) => {
  month = Math.floor(month)
  const year = dayjs().year()
  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day()
  let currentMonthCount = 0 - firstDayOfTheMonth
  const daysByWeeks = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++
      return dayjs(new Date(year, month, currentMonthCount))
    })
  })
  return daysByWeeks
}

const date = {
  now: () => dayjs(),
  currentMonth: () => dayjs().month(),
  currentDay: () => dayjs(new Date(dayjs().year(), dayjs().month(), dayjs().date())).valueOf(),
}

export default date
