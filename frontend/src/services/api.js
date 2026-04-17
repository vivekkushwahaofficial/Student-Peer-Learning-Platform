// API base URL
const BASE_URL = "http://localhost:8080/api/auth";

const parseApiResponse = async (response) => {
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }
  return payload;
};

// 🔐 Login API
export const loginUser = async (email, password) => {

  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify({
      email: email,
      password: password
    })
  });

  return parseApiResponse(response);
};

// 📝 Register API
export const registerUser = async (userData) => {

  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json"
    },

    body: JSON.stringify(userData)
  });

  return parseApiResponse(response);
};