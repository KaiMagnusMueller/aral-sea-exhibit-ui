export function getElementsByDataAttribute(elem: HTMLElement, attr: string, value: any) {
    console.log(attr, value);
    let elementsWithAttr = [...elem.querySelectorAll(`[data-${attr}]`)];

    //If a value is provided, filter, otherwise return all
    if (value) {
        value = value.toString();
        elementsWithAttr = elementsWithAttr.filter((elem) => {
            return elem.dataset[attr] === value.toString();
        });
    }

    let result = elementsWithAttr;
    return result;
}

export function getStrokes(elements: HTMLElement[]) {
    let strokes = [];

    elements.forEach((elem) => {
        strokes.push(...elem.getElementsByClassName('stroke'));
    });

    console.log(strokes);
    let strokesArr = [...strokes];
    return strokesArr;
}

export function setStrokes(strokes: HTMLElement[], color: string) {
    strokes.forEach((element) => {
        element.style.stroke = color;
    });
}

export function resetStrokes(mapElem: HTMLElement, year: number, colorDefault: string, colorHighlight: string) {
    let matches = getElementsByDataAttribute(mapElem, 'year', null);

    let strokes = getStrokes(matches);
    setStrokes(strokes, colorDefault);
    matches = getElementsByDataAttribute(mapElem, 'year', year);
    console.log(matches);

    strokes = getStrokes(matches);
    setStrokes(strokes, colorHighlight);
}