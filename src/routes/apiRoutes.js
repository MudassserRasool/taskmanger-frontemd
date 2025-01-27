export const API_ROUTES = {
  // Auth
  FORGOT_PASSWORD: '/auth/forgotPassword',
  LOGIN: '/auth/login',
  REGISTER_OTP_VERIFY: '/auth/verify/otp',
  RESET_PASSWORD: '/auth/resetPassword',
  REGISTER: '/auth/signup',
  RESEND_OTP: '/auth/resend/otp',
  VERIFY_FORGET_OTP: '/auth/verifyForgetPassword/otp',

  // Content
  PREFERENCES: '/user-preferences',
  TOPICS: (paperId) => `/topics/${paperId}`,
  TRACKING_READING_TIME: '/time-spent/tracking',

  // Quiz
  SUBMIT_QUESTION: (quizId) => `/quiz/submit-question/${quizId}`,
  FINISH_QUIZ: (quizId) => `/quiz/finishQuiz/${quizId}`,
  REPORT_QUESTION: '/reported-questions/reported-questions',
  GET_QUESTION: (quizId) => `/quiz/get-quiz/${quizId}`,
  CREATE_QUIZ: '/quiz/create-quiz',
  CREATE_PRELIMINARY_QUIZ: '/quiz/create-primilary-quiz',
  QUIZ_SUMMARY: (quizId) => `/user-quiz/quiz-summary/${quizId}`,

  // Dashboard
  QUALIFICATIONS: '/qualifications',
  SUBJECTS: '/subject',
  BOARDS: '/boards',
  TOPICS_FIND_BY_SUBJECT_ID: (subjectId) =>
    `/topics/find-by-subject-id/${subjectId}`,
  CREATE_PREFERENCES: '/user-preferences/create',
  CONTINUE_STUDY: '/user-dashboard/continue-study',
  COMPLETED_QUIZ: '/user-dashboard/completed-quiz-count/',
  CONTINUE_QUIZ: '/quiz/countinue/quiz',
  PROGRESS: (subjectId) => `/user-dashboard/progress/${subjectId}`,
  SPENT_TIME_GRAPH: '/time-spent/onLearning/subjectId',
  SUBJECTS_GRAPH: (subjectId, topicId) =>
    `/user-dashboard/subjects-graph/${subjectId}/${topicId}`,
  FEEDBACK: (subjectId, topicId) =>
    `/user-dashboard/feedback/${subjectId}/${topicId}`,
  STUDENT_NOTIFICATIONS: '/notifications/getNotification',

  // Users
  USER: '/user',
  ALL_STUDENTS: '/user/all-students',
  ALL_TEACHERS: '/user/all-teachers',
  EXCLUDED_STUDENTS: (boardId) =>
    `/user/all-students-excluded-class/${boardId}`,
  ALL_ALEVEL_STUDENTS: (boardId) => `/user/all-Alevel-students/${boardId}`,
  ALL_TEACHERS_BASED_ON_PREFERENCES: (qualificationId, boardId) =>
    `/user/all-teachers/basedOn/preferences/${qualificationId}/${boardId}`,

  // Management
  CREATE_CLASS: '/management/create-class',
  CREATE_TEACHER: '/management/create-teacher',
  CREATE_STUDENT: '/management/create-student',
  ALL_CLASSES: (qualificationId, boardId) =>
    `/management/classes/${qualificationId}/${boardId}`,
  ALL_CLASSES_TO_BE_ASSIGNED: '/management/all-classes',
  CREATE_CLASS_WITH_CSV: '/management/csvCreateClass/upload',
  CREATE_STUDENT_WITH_CSV: '/management/csvCreateStudent/upload',
  CREATE_TEACHER_WITH_CSV: '/management/csvCreateTeacher/upload',
  ALL_CLASSES_WITH_PAGINATION: '/management/allClasses',
  GET_CLASSES_BY_TEACHER_ID: (id) => `/management/fetch-class-through/${id}`,
  GET_CLASS_BY_CLASS_ID: (id) => `/management/class-by-id/${id}`,
  UPDATE_CLASS_BY_CLASS_ID: `/management/update`,

  // DASHBOARD
  YEARLY_GRAPHS: (yearNumber, qualificationId, subjectId) =>
    `/management/managementDashboard-yearly/year-${yearNumber}/${qualificationId}/${subjectId}`,
  YEAR_TWO_GRAPH: '/management/managementDashboard-year2',
  YEAR_TEN_GRAPH: '/management/managementDashboard-year10',
  YEAR_ELEVEN_GRAPH: '/management/managementDashboard-year11',

  // CLASSES
  CLASS_PERCENTAGE_AND_REVIEW: (yearNumber, qualificationId, subjectId) =>
    `/management/classWise-goodAndBad-topics/year-${yearNumber}/${qualificationId}/${subjectId}`,
  STUDENT_PERCENTAGE_AND_SCORE: (classId) =>
    `/management/classWise-weekTags-allStudents/${classId}`,

  ASSIGN_CLASS_TO_STUDENTS: '/management/assignClass-to-students',
  ASSIGN_CLASS_TO_TEACHER: '/management/assignClass-to-teacher',

  DELETE_STUDENT: '/management/delete-student',

  // ------------------- ADMIN --------------------
  ADMIN_LOGIN: '/admin/login',
  ALL_ADMINS: '/admin/find-all-admin',
  DELETE_ADMIN: '/admin/delete-admin',
  CREATE_ADMIN: '/admin/create-admin',
  UPDATE_ADMIN: '/admin/updateStatus-admin',
  ALL_SCHOOLS: '/school/findAll',
  UPDATE_SCHOOL: '/school/update-school',
  CREATE_SCHOOL: '/school/createSchool',

  // ------------------- Teacher --------------------
  ALL_TEACHERS_CLASSES: (subjectId) => `/teacher/class/${subjectId}`,
  SUBJECTS_AND_TOPICS: (id) => `/teacher/getSubject/${id}`,
  TEACHERS_SUB_TOPICS: (id) => `/teacher/getSubTopics/${id}`,
  CLASSES_BY_SUBJECT: (id) => `/teacher/className/${id}`,
  CREATE_QUIZ_FOR_CLASS: '/teacher/create/ClassQuiz',
  QUIZ_LIST: (id) => `/teacher/quiz/${id}`,
  DELETE_QUIZ: '/teacher/quiz',
  REPLACE_QUESTION: '/teacher/replace/question',
  SEND_QUIZ_TO_STUDENTS: '/teacher/send-quiz-to-class',
  ALL_QUIZ: '/class-quiz/created/Quizes/info',
  STUDENTS_BY_CLASS_AND_QUIZ_ID: (classId, quizId) =>
    `/teacher/student/${classId}/${quizId}`,
  ANSWER_BY_QUIZ_ID: (quizId, studentId) =>
    `/class-quiz/getAnswers/${quizId}/${studentId}`,
  CLASS_AVERAGE: (classId, subjectId, topicId) =>
    `/teacher/classStudents/average/${classId}/${subjectId}/{topicId}?topicId=${
      topicId || ''
    }`,
  WEEK_TAGS: (classId, subjectId, topicId) =>
    `/teacher/weekTags/${classId}/${subjectId}/topicId?topicId=${
      topicId || ''
    }`,
  GOOD_AND_WEEK_STUDENTS: (classId, subjectId, topicId) =>
    `/teacher/weekTags/goodAndBadStudents/${classId}/${subjectId}/${topicId}`,
  STUDENT_SCORE: (classId, subjectId, topicId) =>
    `/teacher/weekTags/allStudents/${classId}/${subjectId}/${topicId}`,
};
