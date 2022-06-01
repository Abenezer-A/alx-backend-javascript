const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    readDatabase('./database.csv').then((data) => {
      res.write(`Number of students in CS: ${data.CS.length}. List: ${data.CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.SWE.length}. List: ${data.SWE.join(', ')}\n`);
      res.end();
    }).catch((err) => res.write(err.message))
      .finally(() => {
        res.end();
      });
  }

  static getAllStudentsByMajor(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.statusCode = 500;
      res.write('Major parameter must be CS or SWE\n');
      res.end();
      return;
    }
    readDatabase('./database.csv').then((data) => {
      res.write(`List: ${data.major.join(', ')}\n`);
      res.end();
    }).catch((err) => res.send(err.message));
  }
}

export default StudentsController;
