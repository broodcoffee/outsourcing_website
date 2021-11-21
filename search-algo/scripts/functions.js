// UTILITY FUNCTIONS
const $ = el => document.querySelector(el);
const $create = el => document.createElement(el);
const addText = (element, text) => element.textContent = text;
const addElements = (container, elements) => { 
    elements.forEach(element => container.appendChild(element)); 
};

function renderElement(
    element, 
    elementText, 
    parentSelector
    ) {
    const newElement = document.createElement(element);
    const parentElement = $(parentSelector);
    newElement.textContent = elementText;
    parentElement.append(newElement);
};

function search(data, searchParam) {
    let filteredData = data
        .filter( item => item
            .toLocaleLowerCase()
            .includes(`${searchParam}`
            .toLocaleLowerCase())
        );
    return filteredData;
}

// function renderFragment(data) { //data is an array of objects
//     const fragment = document.createDocumentFragment();
//     let animationDelay = 0;
    
//     data.forEach( item => {
//         const listItem = document.createElement('li');
//         listItem.setAttribute('class', 'list-item');
//         listItem.setAttribute('style', `animation-delay: ${animationDelay}ms`);
//         listItem.innerHTML = `
//             <h3>${item.title}</h3>
//             <p>${item.body}</p>
//             <div>${item.footer}</div>
//         `;
//         fragment.appendChild(listItem);
//         animationDelay += 200;
//     });
// }


function createJobItem(header, description, intro, exp, lang) {
    const container = $create('li');
    const headerEl = $create('h3');
    const descriptionEl = $create('div');
    const bodyEl = $create('p');
    const expEl = $create('div');
    const langEl = $create('div');

    addText(headerEl, header);
    addText(descriptionEl, description);
    addText(bodyEl, intro);
    addText(headerEl, header);
    addText(expEl, exp);
    addText(langEl, lang);

    addElements(container, [headerEl, descriptionEl, bodyEl, expEl, langEl]);
}

export { $, renderElement, search, createJobItem, /*renderFragment*/ };