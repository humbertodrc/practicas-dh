// Componente HOC

import { ComponentType } from "react";
import Loading from "../components/Loading";

function LoadingHOC<T extends Record<string, any>>(WrappedComponent: ComponentType<T>) {
  function wrapper(props: T) {
    return (
      <>
        {props.characters.length === 0 ? (
          <Loading />
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  }
  return wrapper;
}

export default LoadingHOC;
