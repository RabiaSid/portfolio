import { ReactNode } from "react";

type PrimaryBtnProps ={
  title:string
  onClick?: (...args: any[]) => any;
  children?: ReactNode
}

export default function PrimaryButton(props: PrimaryBtnProps) {
  const {title, onClick, children} = props
  return <> <button className="customized-primary-btn primary-btn"  onClick={onClick}>{title}{children}</button> </>
}
