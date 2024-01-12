
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { login } from "../slices/authSlice";

type Props = {}

interface LoginFormData {
	email: string;
	password: string;
}

function Login({}: Props) {

	const dispatch = useAppDispatch();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const handleLogin = async () => {
		// This is only a basic validation of inputs. Improve this as needed.
		if (email && password) {
			try {
			await dispatch(
				login({
					email,
					password,
				})
			).unwrap();
			} catch (e) {
			console.error(e);
			}
		} else {
			console.log("other error")
		}
	};

  return (
	 <div className='login'>
		<form onSubmit={handleLogin} className="signup__form">
			<label>
			Email:
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			</label>
			<label>
			Password:
			<input
				type="password"
				name="password"
				value={password}
				onChange={(e) => {setPassword(e.target.value);}}
				required
			/>
			</label>
			<button className="signup__btn" type="submit">Login</button>
		</form>
	 </div>
  )
}

export default Login
