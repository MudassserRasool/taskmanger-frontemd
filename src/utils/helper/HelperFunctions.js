const handelLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

export { handelLogout };
