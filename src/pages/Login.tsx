
import React, {useState} from 'react'

type Props = {}

interface LoginFormData {
	email: string;
	password: string;
}

function Login({}: Props) {

	const [formData, setFormData] = useState<LoginFormData>({
		email: '',
		password: '',
	 });

	 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
		  ...prevData,
		  [name]: value,
		}));
	 };

	 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// You can handle the form submission logic here, e.g., make an API call.

		console.log('Form submitted:', formData);
	 };

  return (
	 <div className='login'>
		<form onSubmit={handleSubmit} className="signup__form">
			<label>
			Email:
			<input
				type="email"
				name="email"
				value={formData.email}
				onChange={handleInputChange}
				required
			/>
			</label>

			<label>
			Password:
			<input
				type="password"
				name="password"
				value={formData.password}
				onChange={handleInputChange}
				required
			/>
			</label>

			<button className="signup__btn" type="submit">Login</button>
		</form>
	 </div>
  )
}

export default Login
