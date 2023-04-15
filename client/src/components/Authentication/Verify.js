import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { userVerifyRequest } from "../../redux/actions.js/userAction";
import Loader from "../Loader";

const Verify = () => {
  const { email } = useParams();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, hackUser, error } = userRegister;
  const dispatch = useDispatch();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(userVerifyRequest(email));
    if(hackUser){
      navigate('/')
    }
  }, [dispatch,hackUser]);

  return <div>{loading ? <Loader /> : <p className="mt-24">Verified</p>}</div>;
};
export default Verify;
