import fetchData from '../http';
import {getLevel} from "../getLevel";

jest.mock('../http');
beforeEach(() => {
    jest.resetAllMocks();
});

test('should return level 4 for user 1', () => {
    fetchData.mockReturnValue({status: 'ok',
        level: '4'});
    const result = getLevel('1');
    expect(fetchData).toBeCalledWith('https://server/user/1');
    expect(result).toBe('Ваш текущий уровень: 4');
})
test('should return "Информация об уровне временно недоступна" for user 2', () => {
    fetchData.mockReturnValue({});
    const result = getLevel('2');
    expect(fetchData).toBeCalledWith('https://server/user/2');
    expect(result).toBe('Информация об уровне временно недоступна');
})

test('should return "Информация об уровне временно недоступна" for user undefined', () => {
    fetchData.mockReturnValue({});
    const result = getLevel(undefined);
    expect(fetchData).toBeCalledWith('https://server/user/undefined');
    expect(result).toBe('Информация об уровне временно недоступна');
})