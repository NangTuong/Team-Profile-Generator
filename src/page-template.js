const generateEmployees = employees => {

    const generateManager = manager => {

        return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                <i class="bi bi-briefcase-fill" style="font-size: 1.5rem;"></i>
                ${manager.getRole()}
                </h6>
                <p class="card-text">ID: ${manager.getID()}</p>
                <p>Office: ${manager.getOffice()}</p>
                <a href="mailto:${manager.getEmail()}" class="card-link">Email</a>
            </div>
        </div>
    </div>
    `;
    };

    const generateEngineer = engineer => {
        if (!engineer) {
            return '';
        }

        return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                <i class="bi bi-code-square" style="font-size: 1.5rem;"></i>
                ${engineer.getRole()}
                </h6>
                <p class="card-text">ID: ${engineer.getID()}</p>
                <a href="https://github.com/${engineer.getGithub()}" class="github-card-link">Github</a> <br>
                <a href="mailto:${engineer.getEmail()}" class="card-link">Email</a>
            </div>
        </div>
    </div>
    `;
    };

    const generateIntern = intern => {
        if (!intern) {
            return '';
        }

        return `
    <div class="col">
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                <i class="bi bi-file-person" style="font-size: 1.5rem;"></i>
                ${intern.getRole()}
                </h6>
                <p class="card-text">ID: ${intern.getID()}</p>
                <p>School: ${intern.getSchool()}</p>
                <a href="mailto:${intern.getEmail()}" class="card-link">Email</a>
            </div>
        </div>
    </div>
    `;
    };

    const pushedEmployees = [];

    pushedEmployees.push(employees.filter(employees => employees.getRole() === 'Manager').map(manager => generateManager(manager)))
    pushedEmployees.push(employees.filter(employees => employees.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join(''))
    pushedEmployees.push(employees.filter(employees => employees.getRole() === 'Intern').map(intern => generateIntern(intern)).join(''))
    return pushedEmployees.join('')
}

module.exports = employees => {


    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Page</title>
</head>
<body>
<div class="container-fluid">
    <h1 class="page-title">My Team</h1>
</div>
<div class="container">
    <div class="row">
       ${generateEmployees(employees)}
    </div>
</div>
</body>
</html>
    `;
}