const convertClassAverageData = (data = []) => {
  return data.map((item) => ({
    name: 'Class Average',
    data: [item.averageMarks],
  }));
};

const extractClassNames = (data = []) => {
  return data.map((item) => item.className);
};

// function combineGoodAndBadStudents(data = {}) {
//   const { goodStudents = [], badStudents = [] } = data;

//   const combinedStudents = [
//     ...goodStudents.map((student) => ({ ...student, type: 'good' })),
//     ...badStudents.map((student) => ({ ...student, type: 'bad' })),
//   ];

//   const groupedByClassId = {};

//   combinedStudents.forEach((student) => {
//     const { classId, ...studentData } = student;

//     if (!groupedByClassId[classId]) {
//       groupedByClassId[classId] = {
//         _id: student._id,
//         classId: classId,
//         data: [],
//       };
//     }

//     groupedByClassId[classId].data.push(studentData);
//   });
//   return Object.values(groupedByClassId);
// }
function combineGoodAndBadStudents(data = {}) {
  const { goodStudents = [], badStudents = [] } = data;

  const combinedStudents = [
    ...goodStudents.map((student) => ({ ...student, type: 'good' })),
    ...badStudents.map((student) => ({ ...student, type: 'bad' })),
  ];

  const groupedByClassId = {};

  combinedStudents.forEach((student) => {
    const { classId, _id, ...studentData } = student;

    // Ensure the classId entry exists
    if (!groupedByClassId[classId]) {
      groupedByClassId[classId] = {
        _id: _id, // Keep the first student's _id for the class
        classId: classId,
        data: [],
      };
    }

    // Add the student data (excluding classId) to the class's data array
    groupedByClassId[classId].data.push({ _id, ...studentData });
  });

  return Object.values(groupedByClassId);
}

const handleTeacherAssignment = (subjectId, teacherId, setTeacherAssigned) => {
  setTeacherAssigned((prevAssignments) => {
    const existingAssignment = prevAssignments.find(
      (assignment) => assignment.subjectId === subjectId
    );
    if (existingAssignment) {
      return prevAssignments.map((assignment) =>
        assignment.subjectId === subjectId
          ? { subjectId, teacherId }
          : assignment
      );
    } else {
      return [...prevAssignments, { subjectId, teacherId }];
    }
  });
};
export {
  combineGoodAndBadStudents,
  convertClassAverageData,
  extractClassNames,
  handleTeacherAssignment,
};
