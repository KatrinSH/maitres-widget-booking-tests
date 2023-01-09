import { addMonths, format } from "date-fns";
import { URL_QUERY_PARAMS } from "../constants";
import { checkLastDayOfMonth } from "../helpers/checkLastDayOfMonth";
import WidgetModel from "../page-model/WidgetModel";

fixture`Users`
    .page`./${URL_QUERY_PARAMS}`


let changeMonth = 0

for (let index = 0; index < WidgetModel.testClosedDays.length; index++) {
    test(`Check closed days: day - ${WidgetModel.testClosedDays[index]}`, async t => {
        await t
            .click(WidgetModel.getClosedDaySelector(index))
            .expect((WidgetModel.expText).textContent).eql("Tyvärr finns inga lediga bord önskad dag, kontakta oss för väntlista.")
            .click(WidgetModel.backButton)
        if (checkLastDayOfMonth(index)) {
            console.log("Next");
            await t.click(WidgetModel.nextMonth);
        }
    });
}

for (let index = 0; index < WidgetModel.testOpenedDays.length; index++) {
    const day = WidgetModel.testOpenedDays[index];
    const month = format(addMonths(new Date(), changeMonth), 'MMMM')

    test(`Check opened days: ${month}, day - ${day}`, async t => {
        if (changeMonth > 0) {
            for (let index = 0; index < changeMonth; index++) {
                await t.click(WidgetModel.nextMonth);
                console.log("Changed month");
            }
        }
        await t
            .click(WidgetModel.getOpenedDaySelector(index))
            .click(WidgetModel.ButtonHelMenu)
            .expect((WidgetModel.expEmptyTable).textContent).ok()
            .click(WidgetModel.backButton)
            .click(WidgetModel.ButtonHalvMenu)
            .expect((WidgetModel.expEmptyTable).textContent).ok();
    })

    test(`Check on changing month: ${month}, day - ${day}`, async t => {
        if (checkLastDayOfMonth(day, changeMonth)) {
            changeMonth++
        }
    })
}