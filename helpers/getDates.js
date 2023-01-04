import { format, isMonday, isSunday } from 'date-fns';
import { HOLIDAY_DAYS } from '../constants';

function checkHoliday(date) {
    const conditional = HOLIDAY_DAYS.includes(Number(format(date, 'd')))

    if (conditional) {
        return date
    }
}

// Returns an array of dates between the two dates
export function getDates(startDate, endDate) {
    const workdays = []
    const holidays = []
    let currentDate = startDate
    const addDays = function (days) {
        const date = new Date(this.valueOf())
        date.setDate(date.getDate() + days)
        return date
    }
    while (currentDate <= endDate) {
        const isHoliday = checkHoliday(currentDate)
        if (isHoliday) {
            holidays.push(Number(format(currentDate, 'd')))
        } else {
            if (!isMonday(currentDate) && !isSunday(currentDate)) {
                workdays.push(Number(format(currentDate, 'd')))
            }
        }
        currentDate = addDays.call(currentDate, 1)
    }
    return { holidays, workdays }
}
