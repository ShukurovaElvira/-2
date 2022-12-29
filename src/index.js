const { initDB } = require("./database/config");
const Mark = require("./database/models/mark.model");
const Student = require("./database/models/student.model");
const fs = require("fs");

async function bootstrap() {
  await initDB();
  const studentList = await Student.findAll({
    include: [
      {
        model: Mark,
        required: true,
        where: {
          subjectId: 2,
        },
        attributes: [],
      },
    ],
    order: [[{ model: Mark, as: "mark" }, "mark", "DESC"]],
  });

  fs.writeFileSync(
    "./output.json",
    JSON.stringify({
      studentList,
    })
  );
}

bootstrap();
