import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
// max-w-[1320px] px-4 sm:px-6 lg:px-8
const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`mx-auto w-full  ${className}`}>
      {children}
    </div>
  );
};

export default Container;
