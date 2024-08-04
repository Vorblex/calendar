import dayjs from 'dayjs'

export type TDay = {
  day: dayjs.Dayjs
}

export type TUser = {
  email?: string
  name?: string
}

export type TAccount = TUser & {
  password?: string
}
