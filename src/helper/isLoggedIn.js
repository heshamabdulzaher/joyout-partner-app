const isUserLoggedIn = () => {
  return localStorage.getItem('accessToken') ? true : false;
};

export default isUserLoggedIn;
