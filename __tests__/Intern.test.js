const Intern = require('../lib/Intern');

test("retrieves intern object", () => {
    const intern = new Intern('Brad', 789, 'brad@email.com', 'ETSU');
    expect(intern.school).toEqual('ETSU');
});
 
test("retrieves intern's school", () => {
    const intern = new Intern('Brad', 789, 'brad@email.com', 'ETSU');
    expect(intern.getSchool()).toEqual(intern.school);
});
 
test("retrieves intern's role", () => {
    const intern = new Intern('Brad', 789, 'brad@email.com', 'ETSU');
    expect(intern.getRole()).toEqual('Intern');
});