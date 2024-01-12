import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
	text: string
	to: string
}

export default function Button({text, to}: Props) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/' + to);
	 };
	return (
		<button onClick={handleClick} className="btn"><span className="btn__text medium">{text}</span></button>
	)
}
