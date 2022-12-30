import skepppsbron from "../page-model/skepppsbron";

fixture`Users`
    .page`https://cloud.maitres.com/?hash=f6597937c607495f0e080ee0d25aff33`


test('New Test', async t => {
    for (let index = 0; index < skepppsbron.testDays.length; index++) {
        await t
            .click(skepppsbron.nextMonth)
            .click(skepppsbron.getDaySelector(index))
            .expect((skepppsbron.expText).textContent).eql("Tyvärr finns inga lediga bord önskad dag, kontakta oss för väntlista.")
            .navigateTo('https://cloud.maitres.com/?hash=f6597937c607495f0e080ee0d25aff33')
    }
});