import React from 'react';
export interface PrevNextButtonsProps {
    className?: string;
    btnClassName?: string;
    onClickPrev?: () => void;
}

const PrevButton: React.FC<PrevNextButtonsProps> = ({
    className = "",
        onClickPrev = () => {},
        btnClassName = "w-10 h-10",
}) => {
    return (
        <div
            className={`relative flex items-center justify-between text-slate-400 ${className}`}
        >
                <button
                    className={`${btnClassName} mr-2 rounded-full flex items-center justify-center ml-2 full-circle-border-gradient prevnext-buttons `}
                    onClick={(e) => {
                        e.preventDefault();
                        onClickPrev();
                    }}
                >
                    <div className={"hover:gradient-border text-pastel-violet hover:text-white h-full w-full flex justify-center items-center rounded-full"}>

                        <svg
                            className="w-5 h-5 rtl:rotate-180 "
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke={"currentColor"}
                            strokeWidth="2"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path
                                d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
                            />
                            <path
                                d="M20.5 12H3.67004"
                            />
                        </svg>
                    </div>
                </button>
        </div>
    );
};

export default PrevButton;