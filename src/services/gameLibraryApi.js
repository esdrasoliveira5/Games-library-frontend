const URL_FETCH = 'http://localhost:3001/';
const APLICATION = 'application/json';
export async function createUser({
  name, lastName, email, password, picture,
}) {
  try {
    const response = await fetch(`${URL_FETCH}user`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        name,
        lastName,
        email,
        password,
        picture,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

export async function loginUser({ email, password }) {
  try {
    const response = await fetch(`${URL_FETCH}user/login`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}
