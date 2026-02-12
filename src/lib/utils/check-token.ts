export function checkToken() {
  const sessionStorageData = sessionStorage.getItem("accessToken");

  if (sessionStorageData) {
    return sessionStorageData;
  }

  return null;
}
