import React from 'react';
export interface PrevNextButtonsProps {
    className?: string;
    btnClassName?: string;
    onClickNext?: () => void;
}

const NextButton: React.FC<PrevNextButtonsProps> = ({
    className = "",
        onClickNext = () => {},
        btnClassName = "w-10 h-10",
}) => {
    return (
        <div
            className={`relative flex items-center justify-between text-slate-400 ${className}`}
        >
            <button
                className={`${btnClassName} rounded-full flex items-center justify-center mr-2 full-circle-border-gradient prevnext-buttons`}
                onClick={(e) => {
                    e.preventDefault();
                    onClickNext();
                }}
            >
                <div
                    className={"hover:gradient-border text-pastel-violet hover:text-white h-full w-full flex justify-center items-center rounded-full"}>

                    <svg
                        className="w-5 h-5 rtl:rotate-180"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={"currentColor"}
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path
                            d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699"
                        />
                        <path
                            d="M3.5 12H20.33"
                        />
                    </svg>
                </div>
            </button>
        </div>
);
};

export default NextButton;