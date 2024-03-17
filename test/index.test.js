// accessibility-helpers.test.js

const { hideElements } = require('../src/accessibility-helpers');

describe('Accessibility Helpers Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div class="hidden-element" aria-hidden="false">Hidden Element</div>
            <div class="visible-element">Visible Element</div>
        `;
    });

    describe('hideElements should add aria-hidden attribute to elements', () => {
        hideElements('.hidden-element');
        const hiddenElement = document.querySelector('.hidden-element');
        expect(hiddenElement.getAttribute('aria-hidden')).toBe('true');
    });
});
