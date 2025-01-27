const handelLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const openedMixin = (theme, drawerWidth, backGroundColor, textColor) => ({
  width: drawerWidth,
  backgroundColor: backGroundColor,
  color: textColor,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme, backGroundColor, textColor) => ({
  backgroundColor: backGroundColor,
  color: textColor,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const setColor = (value) => {
  if (value > 69 && value < 101) {
    return '#3AC55E';
  } else if (value > 49 && value < 70) {
    return '#EAB309';
  } else if (value < 50) {
    return '#EF4444';
  }
};

const setColorAndBackgroundColors = (value) => {
  if (value === 'good') {
    return 'text-[#54B17E] bg-[#DDFAEA]';
  } else if (value === 'bad') {
    return 'text-[#CD5E5E] bg-[#FFEAEA]';
  }
};

const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const toUpperCaseString = (str) => {
  return str?.toUpperCase();
};

const toLowerCaseAndUnderscore = (str) => {
  return str?.toLowerCase().replace(/\s+/g, '_');
};

const checkEmptyFields = (fields, fieldNames) => {
  for (const [key, value] of Object.entries(fields)) {
    if (!value || (Array.isArray(value) && value.length === 0)) {
      return fieldNames[key] || key;
    }
  }
  return null;
};

const getDifficultyLevels = (selectedQuestionTypes, levelName) => ({
  easy: Number(
    selectedQuestionTypes.find(
      (q) => q.name === levelName && q.level === 'Easy'
    )?.amount || 0
  ),
  moderate: Number(
    selectedQuestionTypes.find(
      (q) => q.name === levelName && q.level === 'Medium'
    )?.amount || 0
  ),
  hard: Number(
    selectedQuestionTypes.find(
      (q) => q.name === levelName && q.level === 'Hard'
    )?.amount || 0
  ),
});

const sessionId = Math.floor(100000000 + Math.random() * 900000000).toString();
const formatDateTime = (date) => {
  const isoString = date?.toISOString();
  return isoString.replace('Z', '+00:00');
};
const formatDate = (date) => {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const day = String(date.getUTCDate()).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

// src/utils/helper/validation.js

const isEmailAndDomainMatching = (email, domain) => {
  if (!email || !domain) return false;

  const emailDomainPart = email.split('@')[1]; // Extract the domain part after '@'

  return emailDomainPart === domain;
};

export {
  capitalizeFirstLetter,
  checkEmptyFields,
  closedMixin,
  formatDate,
  formatDateTime,
  getDifficultyLevels,
  handelLogout,
  isEmailAndDomainMatching,
  openedMixin,
  sessionId,
  setColor,
  setColorAndBackgroundColors,
  toLowerCaseAndUnderscore,
  toUpperCaseString,
};
