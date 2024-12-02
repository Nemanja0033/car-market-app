export const logout = (setIsAuth: Function) => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    localStorage.removeItem("userName");
    localStorage.removeItem("userID");
    location.reload();
  };