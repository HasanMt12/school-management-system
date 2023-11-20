import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN } from '../reducers/ActionTypes/ActionTypes.js'; // Make sure the path is correct
import DashboardLayout from "../Layouts/DashboardLayout";
import Spinner from "../Shared/Spinner";

export default function AdminRoutes() {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [ok, setOk] = useState(false);

  const authCheck = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/admin/profile`);
      if (res.data.ok) {
        dispatch({ type: LOGIN, payload: res.data.result });
        setOk(true);
      } else {
        setOk(false);
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      setOk(false);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      if (auth?.token) {
        authCheck();
      } else {
        setOk(false);
      }
    };

    checkAuthentication();
  }, [auth?.token, dispatch]);

  return ok ? <DashboardLayout /> : <Spinner path="" />;
}