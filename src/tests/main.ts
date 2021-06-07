import { Main } from "../main";

test('getKey', () => {
    const instance = new Main('12345');
    expect(instance.getKey()).toBe('1235');
});