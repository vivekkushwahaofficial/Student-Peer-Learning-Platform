// API base URL - can be changed for production
const API_BASE = "http://localhost:8080/api";
const AUTH_URL = `${API_BASE}/auth`;
const USERS_URL = `${API_BASE}/users`;
const SKILLS_URL = `${API_BASE}/skills`;

const parseApiResponse = async (response) => {
  const payload = await response.json();
  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }
  return payload;
};

// ============================================
// AUTH APIs
// ============================================

// 🔐 Login API
export const loginUser = async (email, password) => {
  const response = await fetch(`${AUTH_URL}/login`, {
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
  const response = await fetch(`${AUTH_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  return parseApiResponse(response);
};

// ============================================
// USER APIs
// ============================================

// 👤 Get User Profile
export const getUserProfile = async (email) => {
  const response = await fetch(`${USERS_URL}/profile?email=${encodeURIComponent(email)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return parseApiResponse(response);
};

// ============================================
// SKILLS APIs - REAL BACKEND INTEGRATION
// ============================================

// ⭐ Get all skills
export const getAllSkills = async () => {
  const response = await fetch(`${SKILLS_URL}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return parseApiResponse(response);
};

// ⭐ Get single skill
export const getSkill = async (skillId) => {
  const response = await fetch(`${SKILLS_URL}/${skillId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return parseApiResponse(response);
};

// ⭐ Add a Skill
export const addSkill = async (name) => {
  const response = await fetch(`${SKILLS_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name })
  });

  return parseApiResponse(response);
};

// ⭐ Delete a Skill
export const deleteSkill = async (skillId) => {
  const response = await fetch(`${SKILLS_URL}/${skillId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return parseApiResponse(response);
};
