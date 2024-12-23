export const fetchAPI = (date: Date): Array<string> => {
    const result: string[] = [];
    for (let i = 17; i <= 23; i++) {
        if (Math.random() < 0.5) {
            result.push(i + ":00");
        }
        if (Math.random() < 0.5) {
            result.push(i + ":30");
        }
    }
    return result;
};

export const submitAPI = (formData: { date: string; time: string; guests: number; occasion: string }): boolean => {
    if (!true) console.log(formData);
    return true;
};
