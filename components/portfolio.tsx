import React, {useState} from 'react';

const Portfolio = () => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
            <div className={"block font-mono font-normal"}>
                <p>{`const `} <span className={"text-[#FDE68A] font-bold"}>Portfolio</span> {` = () => {`}</p>
                <p className={"ml-8"}>{`const [mostrar, setMostrar] = useState(`}<span
                    className={"text-[#FDE68A] font-bold"}>{showInfo ? 'true' : 'false'}</span>{`);`}</p>

                <p className={"ml-8"}>{`const `} <span className={"text-purple-400 font-bold"}>nombre</span> = <span
                    className={"text-[#FDE68A] font-bold"}>&apos;Fran Jiménez&apos;</span>{`;`}</p>

                <p className={"ml-8"}>{`const `} <span className={"text-purple-400 font-bold"}>cargo</span> = <span
                    className={"text-[#FDE68A] font-bold"}>&apos;Técnico superior en Desarrollo de Aplicaciones Web&apos;</span>{`;`}
                </p>
                <p className={"ml-8"}>{``}</p>
                <p className={"ml-8"}>{`return (`}</p>
                <p className={"ml-16"}>{`<>`}</p>
                <p className={"ml-24"}>
                    {`${<h1></h1>}`}

                    <span className={"text-[#FDE68A] font-bold"}>{`<h1>${showInfo ? 'Fran Jiménez' : '{nombre}'}</h1>`}</span>
                </p>
                <p className={"ml-24"}>{`<h2>{cargo}</h2>`}</p>
                <p className={"ml-24 cursor-pointer w-fit"}
                   onClick={() => setShowInfo(!showInfo)}>{`<Button onClick={`}<span className={"text-purple-300 font-bold"}>setMostrar</span>{`(!`}<span className={"text-purple-300 font-bold"}>mostrar</span>{`)}/>`}
                </p>
                <p className={"ml-16"}>{`</>`}</p>
                <p className={"ml-8"}>{`)`}</p>
                <p>{`}`}</p>
                <p>{``}</p>
                <p>{`export default `} <span className={"text-[#FDE68A] font-bold"}>Portfolio</span>{`;`}</p>
            </div>
        </>
    );
};

export default Portfolio;