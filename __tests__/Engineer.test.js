const Engineer = require('../lib/Engineer');

test("makes a new engineer object", () => {
    const engineer = new Engineer('Brad', 789, 'brad@email.com', 'NangTuong');
    expect(engineer.github).toBe('NangTuong');
});
  
test("retrieving github username", () => {
    const engineer = new Engineer('Brad', 789, 'brad@email.com', 'NangTuong');
    expect(engineer.getGithub()).toEqual(engineer.github);
});
  
test("retrieving engineer's role", () => {
    const engineer = new Engineer('Brad', 789, 'brad@email.com', 'NangTuong');
    expect(engineer.getRole()).toEqual('Engineer');
});
  