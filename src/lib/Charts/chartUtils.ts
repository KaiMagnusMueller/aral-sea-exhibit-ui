
export function getSmallestValue(numbers: number[]) {
    return Math.min(...numbers);
}

export function getLargestValue(numbers: number[]) {
    return Math.max(...numbers);
}

export function getDimensions(elem: HTMLElement) {

    console.log(elem);


    console.log(elem.clientWidth, elem.clientHeight);


    return {
        x: elem.clientWidth,
        y: elem.clientHeight,

    }
}

export function scaleValue(value: number, from: number[], to: number[]) {
    var scale = (to[1] - to[0]) / (from[1] - from[0]);
    var capped = Math.min(from[1], Math.max(from[0], value)) - from[0];
    return ~~(capped * scale + to[0]);
}

// @ts-ignore
const colorRamps: ObjectType = {
    default: [
        "#FC9494", "#94CAFC", "#94FCB1"
    ],
    red: [
        "#FF0000", "#FF0000", "#FF0000"
    ]
}


export function getColor(colorRamp: string, index: number) {

    let color: string = ""

    if (!colorRamps[colorRamp]) {
        console.log("ramp is undefined");
        colorRamp = "default"
    }

    const colors = colorRamps[colorRamp]
    const numberOfColors = colors.length

    color = colors[index % numberOfColors]

    return color
}