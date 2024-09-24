interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="text-white font-semibold bg-red-500 hover:bg-red-800 focus-visible:bg-red-800 w-full py-4 px-6 text-center rounded-full transition duration-200"
      {...props}
    >
      {children}
    </button>
  );
}
