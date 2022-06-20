const Employee = require("../lib/Employee");

test("make a new employee object", () => {
    const employee = new Employee ('Brad', 789, 'brad@email.com' );
    expect(employee.name).toBe('Brad');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('brad@email.com');
    
});

test("retrieves employee's name", () => {
    const employee = new Employee ('Brad', 789, 'brad@email.com' );
    expect(employee.getName()).toEqual(employee.name);
});

test("retrieves employee's id", () => {
    const employee = new Employee ('Brad', 789, 'brad@email.com' );
    expect(employee.getID()).toEqual(expect.any(Number));
});

test("retrieves employee's email", () => {
    const employee = new Employee ('Brad', 789, 'brad@email.com' );
    expect(employee.getEmail()).toEqual(employee.email);
});

test("retrieves employee's role", () => {
    const employee = new Employee ('Brad', 789, 'brad@email.com' );
    expect(employee.getRole()).toEqual('Employee');
});
