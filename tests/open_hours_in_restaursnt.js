import { URL_QUERY_PARAMS } from "../constants";
import skepppsbron from "../page-model/skepppsbron";

fixture`Users`
    .page`./${URL_QUERY_PARAMS}`


for (let index = 0; index < skepppsbron.testClosedDays.length; index++) {
    test(`Check closed days: day - ${skepppsbron.testClosedDays[index]}`, async t => {
        await t
            .click(skepppsbron.getClosedDaySelector(index))
            .expect((skepppsbron.expText).textContent).eql("Tyvärr finns inga lediga bord önskad dag, kontakta oss för väntlista.")
            .navigateTo(`./${URL_QUERY_PARAMS}`)


    });
}

for (let index = 0; index < skepppsbron.testOpenedDays.length; index++) {
    test(`Check opened days: day - ${skepppsbron.testOpenedDays[index]}`, async t => {
        await t
            .click(skepppsbron.getOpenedDaySelector(index))
            .click(skepppsbron.ButtonHelMenu)
            .expect((skepppsbron.expEmptyTable).textContent).ok()
            .click(skepppsbron.backButton)
            .click(skepppsbron.ButtonHalvMenu)
            .expect((skepppsbron.expEmptyTable).textContent).ok()
            .navigateTo(`./${URL_QUERY_PARAMS}`)
    })
}