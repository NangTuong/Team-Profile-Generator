const Manager = require('../lib/Manager');

test('creates manager object' , () => {
    const manager = new Manager ('Brad', 789, 'brad@email.com', 405)
    expect(manager.office).toEqual(expect.any(Number))
});

test("gets manager role", () => {
    const manager = new Manager ('Brad', 789, 'brad@email.com', 405)
    expect(manager.getRole()).toEqual('Manager');
});