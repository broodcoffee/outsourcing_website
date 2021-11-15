const $ = el => document.querySelector(el);

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

function renderFragment(data) { //data is an array of objects
    const fragment = document.createDocumentFragment();
    let animationDelay = 0;
    
    data.forEach( item => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', 'list-item');
        listItem.setAttribute('style', `animation-delay: ${animationDelay}ms`);
        listItem.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body}</p>
            <div>${item.footer}</div>
        `;
        fragment.appendChild(listItem);
        animationDelay += 200;
    });

    $('#list').appendChild(fragment);
}

export { $, renderElement, search, renderFragment }