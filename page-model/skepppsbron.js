import { Selector } from 'testcafe';

class skepppsbron {
    constructor() {
        this.testClosedDays = [3, 4, 5, 6, 10]
        this.testOpenedDays = [7, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31]
        this.nextMonth = Selector('#app .MuiSvgIcon-root').nth(7);
        this.expText = Selector('#app h1')
        this.expButtonHelMenu = Selector('#app button').withText('HEL MENY / FULL MENU (1195 KR)')
        this.expButtonHalvMenu = Selector('#app button').withText('HALV MENY / HALF MENU (695 KR)')
    }

    getClosedDaySelector(index) {
        const onlyNumberClosedDay = new RegExp("\\b(" + this.testClosedDays[index] + ")\\b", 'i');
       

        return Selector('#app .MuiPickersBasePicker-pickerView .MuiPickersDay-day:not(.MuiPickersDay-dayDisabled) p').withText(onlyNumberClosedDay)
    }
    getOpenedDaySelector(index) {
    const onlyNumberOpenedDay = new RegExp("\\b(" + this.testOpenedDays[index] + ")\\b", 'i');
    
    return Selector('#app .MuiPickersBasePicker-pickerView .MuiPickersDay-day:not(.MuiPickersDay-dayDisabled) p').withText(onlyNumberOpenedDay)
    }
}

export default new skepppsbron();