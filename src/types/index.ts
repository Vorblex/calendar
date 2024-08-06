import dayjs from 'dayjs'

export type TDay = dayjs.Dayjs

export type TUser = {
  email?: string
  name?: string
}

export type TEvent = {
  id?: number
  day?: number
  title: string
  description: string
  participants: string[]
}

export type TAccount = TUser & {
  password?: string
}
