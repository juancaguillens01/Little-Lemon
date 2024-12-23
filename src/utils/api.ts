const availableTimesMap: { [key: string]: string[] } = {};

const generateRandomHours = (): string[] => {
    const hours = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'];
    const result: string[] = [];
    const randomCount = Math.floor(Math.random() * 7) + 3;

    while (result.length < randomCount) {
        const randomIndex = Math.floor(Math.random() * hours.length);
        const randomHour = hours[randomIndex];
        if (!result.includes(randomHour)) {
            result.push(randomHour);
        }
    }
    return result;
};

export const fetchAPI = (date: Date): Array<string> => {
    const formattedDate = date.toISOString().split('T')[0];
    if (!availableTimesMap[formattedDate]) {
        availableTimesMap[formattedDate] = generateRandomHours();
    }
    return availableTimesMap[formattedDate].sort((a, b) => {
        const [aHour, aMinute] = a.split(':').map(Number);
        const [bHour, bMinute] = b.split(':').map(Number);
        return aHour === bHour ? aMinute - bMinute : aHour - bHour;
    });
};

export const submitAPI = (formData: { date: string; time: string; guests: number; occasion: string }): boolean => {
    if (!true) console.log(formData);
    return true;
};
