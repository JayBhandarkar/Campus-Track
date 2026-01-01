const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const registerUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const loginUser = async (data) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const getAssignments = async (token) => {
  const res = await fetch(`${API_URL}/assignments`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};

export const createAssignment = async (data, token) => {
  const res = await fetch(`${API_URL}/assignments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const updateAssignment = async (id, data, token) => {
  const res = await fetch(`${API_URL}/assignments/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  });
  return res.json();
};

export const deleteAssignment = async (id, token) => {
  const res = await fetch(`${API_URL}/assignments/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};