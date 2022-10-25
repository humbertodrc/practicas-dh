import { ComponentType } from 'react';


export default function WithColorSwap<T extends Record<string, any>>(WrapperComponent: ComponentType<T>) {


	return function Component(props : T) {
		return (
			<div className='color-swap'>
				<WrapperComponent {...props}  />
				<p>Estoy acompañando al WrapperComponent</p>
			</div>
			)
	}

}
