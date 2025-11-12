import * as dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as utc from 'dayjs/plugin/utc'
import * as timezone from 'dayjs/plugin/timezone'
import * as isBetween from 'dayjs/plugin/isBetween'
import * as isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import * as isToday from 'dayjs/plugin/isToday'

dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(isBetween)
dayjs.extend(isSameOrBefore)
dayjs.extend(isSameOrAfter)
dayjs.extend(isToday)

export { dayjs }
