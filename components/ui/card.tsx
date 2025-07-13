import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
  return (
    <div
      className="border border-gray-200 rounded-xl shadow-md p-6 bg-white"
      {...props}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => {
  return (
    <div className="space-y-6" {...props}>
      {children}
    </div>
  );
};
