export default function orderByProps(obj, sortoder) {
    const copy = {...obj };
    const resultByArr = [];
    for (const prop in copy) {
        if (sortoder.includes(prop)) {
            const newObj = {
                key: prop,
                value: copy[prop],
            };
            resultByArr.push(newObj);
        }
    }
    resultByArr.sort((a, b) => sortoder.indexOf(a.key) - sortoder.indexOf(b.key));

    const resultByAlphabet = [];
    for (let i = 0; i < sortoder.length; i++) {
        delete copy[sortoder[i]];
    }
    for (const prop in copy) {
        if (copy.hasOwnProperty(prop)) {
            const newObj = {
                key: prop,
                value: copy[prop],
            };
            resultByAlphabet.push(newObj);
        }
    }
    resultByAlphabet.sort((x, y) => {
        if (x.key < y.key) {
            return -1;
        }
        return 1;
    });
    return [...resultByArr, ...resultByAlphabet];
}