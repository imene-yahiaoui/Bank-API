export async function loginAPI(email, password) {
  const item = { email, password };

  const result = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  return await result.json();
}

export async function getProfileAPI(token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
    },
  });

  return await response.json();
}

export async function editUserNameAPT(token, firstName, lastName) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
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
}
