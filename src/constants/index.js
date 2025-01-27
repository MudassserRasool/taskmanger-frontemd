const storedTheme = localStorage.getItem('theme');
const baseUrl = process.env.REACT_APP_BACKEND_BASE_URL;
const environment = process.env.REACT_APP_ENVIRONMENT;

const authLogoWidth = 120;
const rowsPerPage = 10;

export { authLogoWidth, baseUrl, environment, rowsPerPage, storedTheme };
