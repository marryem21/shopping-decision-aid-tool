import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { getUser, logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

type Props = {}

function Dashboard({}: Props) {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);
	const userProfileInfo = useAppSelector((state) => state.auth.userProfileData);

	useEffect(() => {
	  if (basicUserInfo) {
		 dispatch(getUser(basicUserInfo.id));
	  }
	}, [basicUserInfo]);

	const handleLogout = async () => {
	  try {
		 await dispatch(logout()).unwrap();
		 navigate("/login");
	  } catch (e) {
		 console.error(e);
	  }
	};
  return (
		<div className="dashboard">
			<h1>dashboard</h1>
			<h4>Name: {userProfileInfo?.name}</h4>
			<h4>Email: {userProfileInfo?.email}</h4>
			<button onClick={handleLogout} >Logout</button>
		</div>
)
}

export default Dashboard
