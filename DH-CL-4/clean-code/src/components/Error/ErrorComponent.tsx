import React from "react";

const ErrorComponent = ({ mensaje }: { mensaje?: string | undefined }) => {
  return mensaje ? (
    <span>{mensaje}</span>
  ) : (
    <span>Upps! Ha ocurrido un error!!!</span>
  );
};

export default ErrorComponent;
