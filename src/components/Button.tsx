interface ButtonProps {
    type: "primary" | "secondary";
    category: "default" | "outline";
    buttonText: string;
    padX?: number;
    padY?: number;
    fontSize?: number;
}

const variants = {
    default: {
        primary: "bg-brand text-[#FFFFFF]",
        secondary: "bg-secondary-btn text-[#FFFFFF]"
    },
    outline: {
        primary: "outline-3 outline-brand text-brand",
        secondary: "outline-3 outline-secondary-btn text-secondary-btn"
    }
}

const Button = ({type, category, buttonText, padX = 10, padY = 8, fontSize = 20}: ButtonProps) => {
    return (
        <button className={`rounded-full ${variants[category][type]}`}
                style={{
                    paddingLeft: `${padX}px`,
                    paddingRight: `${padX}px`,
                    paddingTop: `${padY}px`,
                    paddingBottom: `${padY}px`,
                    fontSize: `${fontSize}px`
                }}>
            {buttonText}
        </button>
    )
}

export default Button