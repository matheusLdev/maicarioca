export default function timeZone(data: Date): Date {
    const offsetCurrent = data.getTimezoneOffset();
    const offsetSaoPaulo = -3 * 60;

    if (offsetCurrent === offsetSaoPaulo) {
        return data;
    } else {
        const timestamp = data.getTime();
        const offsetWashington = -5 * 60;
        const differenceOffset = offsetWashington - offsetSaoPaulo;
        const newTimestamp = timestamp - differenceOffset * 60 * 1000;
        return new Date(newTimestamp);
    }
}
