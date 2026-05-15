import apiClient from "../api/client";

export const authService = {
  login: async (data: {
    email: string;
    password: string;
  }) => {
    const res = await apiClient.post("/auth/login", data);
    return res.data;
  },
};