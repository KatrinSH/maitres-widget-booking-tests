import { Selector } from 'testcafe';

class skepppsbron {
    constructor() {
        this.testDays = [3, 4, 5, 6, 7, 10]
        this.nextMonth = Selector('#app .MuiSvgIcon-root').nth(7);
        this.expText = Selector('#app h1')
    }

    getDaySelector(index) {
        const onlyNumberDay = new RegExp("\\b(" + this.testDays[index] + ")\\b", 'i');

        return Selector('#app .MuiPickersBasePicker-pickerView .MuiPickersDay-day:not(.MuiPickersDay-dayDisabled) p').withText(onlyNumberDay)
    }

}

export default new skepppsbron();