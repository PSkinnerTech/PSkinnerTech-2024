const Button = ({
  text,
  secondaryText,
  color = "#070707",
  children,
  onClick,
}: {
  text: string;
  secondaryText?: string;
  color?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white rounded-lg max-w-fit"
      onClick={onClick}
    >
      <span>{text}</span>
      {secondaryText ? (
        <span className="font-light text-neutral-200">{secondaryText}</span>
      ) : (
        ""
      )}
      {children}
    </div>
  );
};

export default Button;
