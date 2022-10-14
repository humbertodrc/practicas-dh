import React from "react";
export interface ErrorInterface {
	message: string;
}

const Error: React.FC<ErrorInterface> = ({message}) => {
	return <div>{message}</div>;
};

export default Error;
