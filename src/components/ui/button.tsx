import { ReactNode, ComponentType, SVGProps } from "react";

interface ButtonProps {
  text?: string | ReactNode;
  leftIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  rightIcon?: ComponentType<SVGProps<SVGSVGElement>>;
  variant?: "primary" | "danger" | "continue" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
  colorScheme?: "main" | "green" | "red" | "gray";
  fullWidth?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  text,
  leftIcon: IconLeft,
  rightIcon: IconRight,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  colorScheme = "main",
  fullWidth = false,
  onClick,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-2xl transition-all duration-200 ease-in-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white cursor-pointer
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    ${fullWidth ? "w-full" : ""}
  `;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm min-h-[2rem] rounded-md",
    md: "px-4 py-2 text-sm min-h-[2.5rem] rounded-lg",
    lg: "px-6 py-3 text-base min-h-[3rem] rounded-xl",
    xl: "px-8 py-4 text-[18px] min-h-[4rem] rounded-xl",
  };

  const getColorClasses = () => {
    const colorConfigs = {
      main: {
        primary:
          "bg-[#1C3519] hover:bg-white text-white hover:text-[#1C3519] border border-[#1C3519] active:bg-[#1C3519]",
        danger:
          "bg-[#FB3748] hover:bg-red-600 text-white ring-red-500 active:bg-red-700",
        continue:
          "bg-green-500 hover:bg-green-600 text-white ring-green-500 active:bg-green-700",
        secondary:
          "bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white border border-blue-500 active:bg-blue-600",
        outline:
          "bg-transparent text-[#1C3519 hover:bg-[#1C3519] hover:text-white border border-[#1C3519] active:bg-[#1C3519",
      },
      black: {
        primary:
          "bg-green-500 hover:bg-green-600 text-white ring-green-500 active:bg-green-700",
        danger:
          "bg-red-500 hover:bg-red-600 text-white ring-red-500 active:bg-red-700",
        continue:
          "bg-emerald-500 hover:bg-emerald-600 text-white ring-emerald-500 active:bg-emerald-700",
        secondary:
          "bg-transparent hover:bg-green-500 text-green-600 hover:text-white border border-green-500 active:bg-green-600",
        outline:
          "bg-transparent text-[#333333] hover:bg-black hover:text-white border border-[#D9D9D9] active:bg-black",
      },
      white: {
        primary:
          "bg-red-500 hover:bg-red-600 text-white ring-red-500 active:bg-red-700",
        danger:
          "bg-red-500 hover:bg-red-600 text-white ring-red-500 active:bg-red-700",
        continue:
          "bg-green-500 hover:bg-green-600 text-white ring-green-500 active:bg-green-700",
        secondary:
          "bg-transparent hover:bg-red-500 text-red-600 hover:text-white border border-red-500 active:bg-red-600",
        outline:
          "bg-transparent text-black shadow-md hover:bg-black hover:text-white border border-white hover:border-black active:bg-white",
      },
      gray: {
        primary:
          "bg-gray-500 hover:bg-gray-600 text-white ring-gray-500 active:bg-gray-700",
        danger:
          "bg-red-500 hover:bg-red-600 text-white ring-red-500 active:bg-red-700",
        continue:
          "bg-green-500 hover:bg-green-600 text-white ring-green-500 active:bg-green-700",
        secondary:
          "bg-transparent hover:bg-gray-500 text-gray-600 hover:text-white border border-gray-500 active:bg-gray-600",
        outline:
          "bg-transparent text-gray-600 hover:bg-gray-500 hover:text-white border border-gray-500 active:bg-gray-600",
      },
    };

    return colorConfigs[colorScheme]?.[variant] || colorConfigs.main.primary;
  };

  const hoverTransform = `
    hover:shadow-lg 
    hover:shadow-${colorScheme}/500/20
  `;

  const finalClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${getColorClasses()}
    ${!disabled && !loading ? hoverTransform : ""}
    ${loading ? "relative pointer-events-none" : ""}
    ${className}
  `.trim();

  const handleClick = (e) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  const renderIcon = (Icon, position) => {
    if (!Icon) return null;
    const IconComponent = Icon;
    return (
      <IconComponent
        className={`flex-shrink-0 h-4 w-4 ${
          position === "left" ? "mr-1" : "ml-1"
        }`}
        aria-hidden="true"
      />
    );
  };

  return (
    <button
      className={finalClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      type="button"
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-3 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {renderIcon(IconLeft, "left")}
      {text && <span className="whitespace-nowrap">{text}</span>}
      {children && <span className="whitespace-nowrap">{children}</span>}
      {renderIcon(IconRight, "right")}
    </button>
  );
};

export default Button;
