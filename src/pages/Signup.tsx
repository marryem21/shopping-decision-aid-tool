import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux-hooks";
import { register } from "../slices/authSlice";

type Props = {}

interface SignupFormData {
	username: string;
	email: string;
	password: string;
 }

function Signup({}: Props) {
	const dispatch = useAppDispatch();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	 const handleRegister = async () => {
		// This is only a basic validation of inputs. Improve this as needed.
		if (name && email && password) {
		  try {
			 await dispatch(
				register({
				  name,
				  email,
				  password,
				})
			 ).unwrap();
		  } catch (e) {
			 console.error(e);
		  }
		} else {
		  // Show an error message.
		}
	 };

  return (
	<div className="signup">
		<h1>Signup</h1>
		<form onSubmit={handleRegister} className="signup__form">
			<label>
			Username:
			<input
				type="text"
				name="username"
				value={name}
				onChange={(e) => setName(e.target.value)}
				required
			/>
			</label>

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
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			</label>

			<button className="signup__btn" type="submit" onClick={handleRegister}>Sign Up</button>
		</form>
	</div>
  )
}

export default Signup
