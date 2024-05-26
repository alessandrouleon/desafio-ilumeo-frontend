const USER_CODE = "@user-code:ilumeo";

export const UserHistory = {
  setLocalStorageUserCode: (userCode: string) =>
    localStorage.setItem(USER_CODE, userCode),
  
  getLocalStorageUserCode: (): string | null =>
    localStorage.getItem(USER_CODE),

  removeLocalStorageUserCode: () => localStorage.removeItem(USER_CODE),

};