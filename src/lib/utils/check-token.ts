import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export async function checkToken(req: NextRequest) {
  let userToken;

  const sessionStorageData = sessionStorage.getItem("accessToken");
  const token = await getToken({ req });

  if (sessionStorageData) {
    userToken = sessionStorageData;

    return userToken;
  }

  if (token?.accessToken) {
    userToken = token.accessToken;

    return userToken;
  }

  return false;
}
