import { isLastDayOfMonth } from "date-fns";

export function checkLastDayOfMonth(day) {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const conditional = isLastDayOfMonth(new Date(year, month, day))
    console.log('Checking last day of month', new Date(year, month, day), conditional);

    return conditional
}