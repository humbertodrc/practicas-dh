import React from 'react';
export interface InputInterface {}

const Input : React.FC<InputInterface> = () => {
	return <input type="text" name="character" />;
};

export default Input;
