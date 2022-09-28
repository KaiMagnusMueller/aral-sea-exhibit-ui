export function getElementsByDataAttribute(elem: HTMLElement, attr: string, value: any) {

    if (!elem) {
        return []
    }

    // console.log(attr, value);
    // @ts-ignore
    let elementsWithAttr: HTMLElement[] = [...elem.querySelectorAll(`[data-${attr}]`)];

    //If a value is provided, filter, otherwise return all
    if (value) {
        value = value.toString();
        elementsWithAttr = elementsWithAttr.filter((elem) => {
            //@ts-ignore
            return elem.dataset[attr] === value.toString();
        });
    }

    let result: HTMLElement[] = elementsWithAttr;
    return result;
}

export function getStrokes(elements: HTMLElement[]) {
    let strokes: HTMLElement[] = [];

    elements.forEach((elem) => {
        // @ts-ignore
        strokes.push(...elem.getElementsByClassName('stroke'));
    });

    let strokesArr = [...strokes];
    return strokesArr;
}

export function setStrokes(strokes: HTMLElement[], color: string) {
    strokes.forEach((element) => {
        element.style.stroke = color;
    });
}

export function resetStrokes(mapElem: HTMLElement, year: number, colorDefault: string, colorHighlight: string) {

    // console.log(mapElem, year);


    let matches: HTMLElement[] = getElementsByDataAttribute(mapElem, 'year', null);

    let strokes = getStrokes(matches);
    setStrokes(strokes, colorDefault);
    matches = getElementsByDataAttribute(mapElem, 'year', year);
    // console.log(matches);

    strokes = getStrokes(matches);
    setStrokes(strokes, colorHighlight);
}