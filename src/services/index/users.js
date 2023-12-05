import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API}/admin/login`, {
      email,
      password,
    });
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};

