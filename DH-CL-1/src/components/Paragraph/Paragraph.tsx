import { useTheme } from '../../hooks/useTheme';
import React from 'react';
export interface ParagraphInterface {
	children: React.ReactNode;
}

export const Paragraph: React.FC<ParagraphInterface> = (props: ParagraphInterface) => {
	const {theme} = useTheme()
	return <p className={theme === "dark" ? "text-white" : "text-black"}>{props.children}</p>;
};


