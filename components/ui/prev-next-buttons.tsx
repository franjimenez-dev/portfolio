import React from 'react';
export interface PrevNextButtonsProps {
    className?: string;
    btnClassName?: string;
    onClickNext?: () => void;
    onClickPrev?: () => void;
    onlyNext?: boolean;
    onlyPrev?: boolean;
}

const PrevNextButtons: React.FC<PrevNextButtonsProps> = ({
    className = "",
        onClickNext = () => {},
        onClickPrev = () => {},
        btnClassName = "w-10 h-10",
        onlyNext = false,
        onlyPrev = false,
}) => {
    const [focus, setFocus] = React.useState<"left" | "right">("right");

    return (
        <div
            className={`relative flex items-center justify-between text-slate-400 ${className}`}
        >
            {!onlyNext && (
                <button
                    className={`${btnClassName} ${
                        !onlyPrev ? "mr-2" : ""
                    } rounded-full flex items-center justify-center ml-2  ${
                        focus === "left" ? "full-circle-border-gradient" : ""
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        onClickPrev();
                    }}
                    onMouseEnter={() => setFocus("left")}
                >
                    <svg
                        className="w-5 h-5 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                            stroke="#c084fc"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20.5 12H3.67004"
                            stroke="#c084fc"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}
            {!onlyPrev && (
                <button
                    className={`${btnClassName} rounded-full flex items-center justify-center mr-2 ${
                        focus === "right" ? "full-circle-border-gradient" : ""
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        onClickNext();
                    }}
                    title="Next"
                    onMouseEnter={() => setFocus("right")}
                >
                    <svg
                        className="w-5 h-5 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
                            stroke="#c084fc"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3.5 12H20.33"
                            stroke="#c084fc"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default PrevNextButtons;