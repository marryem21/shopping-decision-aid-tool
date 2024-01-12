import React, {useState} from 'react'

type Props = {}

interface SignupFormData {
	username: string;
	email: string;
	password: string;
 }

function Signup({}: Props) {

	const [formData, setFormData] = useState<SignupFormData>({
		username: '',
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

	 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// You can handle the form submission logic here, e.g., make an API call.

		console.log('Form submitted:', formData);
	 };

  return (
	<div className="signup">
	 <h1>Signup</h1>
	 <form onSubmit={handleSubmit} className="signup__form">
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </label>

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

      <button className="signup__btn" type="submit">Sign Up</button>
    </form>
	</div>
  )
}

export default Signup
