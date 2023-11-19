import axios from "axios"

export const adminLogin=async(data)=>{
	return await axios.post(`${import.meta.env.VITE_API}/admin/login`,data)

}