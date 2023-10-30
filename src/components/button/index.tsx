import { Button } from "@mui/material";
import { ReactNode } from "react";

type ButtonProps = {
  variant?: any;
  label?: string;
  color?: any;
  onClick?: (...args: any[]) => any;
  children?: ReactNode
};

export default function AppButton(props: ButtonProps) {
  const { variant, label, color, onClick,children } = props;

  return (
    <>
      <Button variant={variant} color={color} onClick={onClick} fullWidth>
        {label}{children}
      </Button>
    </>
  );
}
