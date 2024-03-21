import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

export interface MyImageProps extends ImageProps {
    containerClassName?: string;
}

const MyImage: FC<MyImageProps> = ({
   containerClassName = "",
   alt = "proyecto",
   className = "object-cover w-full h-full",
   sizes = "(max-width: 600px) 480px, 800px",
   ...args
}) => {

    return (
        <div className={`${containerClassName}`}>
            <Image className={`${className}  `} alt={`imagen ${alt}`} sizes={sizes} {...args} />
        </div>
    );

};

export default MyImage;
