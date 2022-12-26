const { I } = inject();

module.exports = {
    async CheckElementIsVisible(locator) {
        return await tryTo(() => I.seeElement(locator));
    },

    
}