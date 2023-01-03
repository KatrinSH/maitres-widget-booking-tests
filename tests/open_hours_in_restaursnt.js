import skepppsbron from "../page-model/skepppsbron";

fixture`Users`
    .page`https://cloud.maitres.com/?hash=f6597937c607495f0e080ee0d25aff33`


test('Check closed days', async t => {
    for (let index = 0; index < skepppsbron.testClosedDays.length; index++) {
        await t
            .click(skepppsbron.getClosedDaySelector(index))
            .expect((skepppsbron.expText).textContent).eql("Tyvärr finns inga lediga bord önskad dag, kontakta oss för väntlista.")
            .navigateTo('https://cloud.maitres.com/?hash=f6597937c607495f0e080ee0d25aff33')
            
    }
  
});
test ('Check opened days ',async t=> {
    for (let index = 0; index < skepppsbron.testOpenedDays.length; index++){
        await t
        .click(skepppsbron.getOpenedDaySelector(index))
        .expect((skepppsbron.expButtonHelMenu).textContent).ok()
        .expect((skepppsbron.expButtonHalvMenu).textContent).ok()
        .navigateTo('https://cloud.maitres.com/?hash=f6597937c607495f0e080ee0d25aff33')
    }
})