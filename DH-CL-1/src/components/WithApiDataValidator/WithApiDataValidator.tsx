import { Error } from '../Error';
import React, { ComponentType } from 'react';


export interface WithApiDataValidatorInterface {
	children?: React.ReactNode
}


export default function WithApiDataValidator<T extends Record<string, any>>(Component: any, dataKey:string) {

	return function (props: T) {
	// Aca va la logica
		if (!props[dataKey]) {
			return <Error message={`Componente necesita ${dataKey} para poder trabajar`} />
		}
	
		return <Component {...props} />
	}

}


// type Base = { onClick: () => void };
// export const withLoggingOnClickWithParams = <TProps extends Base>(
//   Component: ComponentType<TProps>,
//   // adding some params as a second argument to the function
//   params: { text: string },
// ) => {
//   return (props: TProps) => {
//     const onClick = () => {
//       // accessing params that we passed as an argument here
//       // everything else stays the same
//       console.log('Log on click: ', params.text);
//       props.onClick();
//     };

//     return <Component {...props} onClick={onClick} />;
//   };
// };
