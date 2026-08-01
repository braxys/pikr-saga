export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-background hover:bg-accent",
    secondary: "bg-accent text-background hover:bg-primary",
  };

  const buttonClass = `w-[140px] h-[53px] rounded-[10px] hover:cursor-pointer transition-all duration-300 flex items-center justify-center text-poppins text-[18px] ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
