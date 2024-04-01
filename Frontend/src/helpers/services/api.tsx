/**
 * loginAPI
 * @param {string} email - User email
 * @param {string} password - User password
 * @return {Promise<any>} result - Result of the login operation
 */

import { LocalHost, LOGIN_URL, PROFILE_URL } from "./apiEndpoints.ts";
export async function loginAPI(email: string, password: string) {
  const item = { email, password };

  try {
    const result = await fetch(LocalHost + LOGIN_URL, {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    return await result.json();
  } catch (e) {
    console.log(e, "error in the backend");
    return !status
 
  }
}

/**
 * getProfileAPI
 * @param {string | null} token - User authentication token
 * @return {Promise<any>} response - User profile data
 */
export async function getProfileAPI(token: string | null) {
  try {
    const response = await fetch(LocalHost + PROFILE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },
    });

    return await response.json();
  } catch (e) {
    console.log(e, "error in getProfileAPI");
  }
}
/**
 * editUserNameAPI
 * @param {string | null} token - User authentication token
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @return {Promise<any>} response - Result of the username edit operation
 */
export async function editUserNameAPI(
  token: string | null,
  firstName: string,
  lastName: string
) {
  try {
    const response = await fetch(LocalHost + PROFILE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        accept: "application/json",
      },

      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
      }),
    });
    return await response.json();
  } catch (e) {
    console.log(e, "error in editUserNameAPI");
  }
}
