import React from 'react'

type Props = {
	text: string
}

export default function Button({text}: Props) {
  return (
	 <a href="" className="btn"><span className="btn__text medium">{text}</span></a>
  )
}
