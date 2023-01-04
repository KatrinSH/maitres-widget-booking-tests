import { endOfMonth } from 'date-fns';
import { Selector } from 'testcafe';
import { getDates } from '../helpers/getDates';


class skepppsbron {
    constructor() {
        this.testDays = getDates(new Date(), endOfMonth(new Date()))
        this.testClosedDays = this.testDays.holidays
        this.testOpenedDays = this.testDays.workdays
        this.nextMonth = Selector('#app .MuiSvgIcon-root').nth(7);
        this.expText = Selector('#app h1')
        this.ButtonHelMenu = Selector('#app button').withText('HEL MENY / FULL MENU (1195 KR)')
        this.ButtonHalvMenu = Selector('#app button').withText('HALV MENY / HALF MENU (695 KR)')
        this.expEmptyTable = Selector('#app button').withText('1')
        this.backButton = Selector('#app button').withText('TILLBAKA')

        console.log('Closed days', this.testClosedDays);
        console.log('Opened days', this.testOpenedDays);
    }

    getDayFromCalendar(dayNumber) {
        return new RegExp("\\b(" + dayNumber + ")\\b", 'i');
    }

    getClosedDaySelector(index) {
        const onlyNumberClosedDay = this.getDayFromCalendar(this.testClosedDays[index]);

        return Selector('#app .MuiPickersBasePicker-pickerView .MuiPickersDay-day:not(.MuiPickersDay-dayDisabled) p').withText(onlyNumberClosedDay)
    }
    getOpenedDaySelector(index) {
        const onlyNumberOpenedDay = this.getDayFromCalendar(this.testOpenedDays[index]);

        return Selector('#app .MuiPickersBasePicker-pickerView .MuiPickersDay-day:not(.MuiPickersDay-dayDisabled) p').withText(onlyNumberOpenedDay)
    }
}

export default new skepppsbron();