import React from 'react'
import { Link } from 'react-router-dom';

type Props = {
	text: string
	to: string
}

export default function Button({text, to}: Props) {
  return (
	 <a href={to} className="btn"><span className="btn__text medium">{text}</span></a>
  )
}
