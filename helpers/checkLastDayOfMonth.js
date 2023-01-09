import { addMonths, isLastDayOfMonth } from "date-fns";

export function checkLastDayOfMonth(day, monthPlus) {
    const date = new Date()
    const year = date.getFullYear()
    const month = addMonths(new Date(), monthPlus).getMonth()
    const conditional = isLastDayOfMonth(new Date(year, month, day))

    return conditional
}