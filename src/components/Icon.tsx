interface IconProps {
  name: string; // назва іконки з сайту Google (напр. "menu", "close")
  className?: string; // для Tailwind класів
}

export const Icon = ({name, className = ""}: IconProps) => {
    return (
        <span className={`material-symbols-outlined select-none ${className}`}>
            {name}
        </span>
    )
}