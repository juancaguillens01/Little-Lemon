import { initializeTimes, timesReducer } from './Main';
import { fetchAPI } from '../../utils/api.ts';

jest.mock('../../utils/api.ts');

describe('Main.js tests', () => {
    test('should initialize times correctly', async () => {
        fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);

        const times = await initializeTimes();
        expect(times).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });

    test('should return the same times when UPDATE_TIMES action is dispatched', () => {
        const initialState = ['10:00', '12:00', '14:00'];
        const action = { type: 'UPDATE_TIMES', payload: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] };

        const newState = timesReducer(initialState, action);

        expect(newState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
    });
});
