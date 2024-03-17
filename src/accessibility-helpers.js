// accessibility-helpers.js

/**
 * Function to add aria-hidden attribute to elements
 * @param {string} selector - CSS selector for elements to be hidden
 */
function hideElements(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.setAttribute('aria-hidden', 'true');
    });
}

module.exports = {
    hideElements
};
