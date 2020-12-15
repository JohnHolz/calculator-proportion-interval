import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="py-4">
                 <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                     <div className="py-8 px-4 bg-white  rounded-b-md fd-cl">
                        <span className="block text-lg text-gray-800 font-bold tracking-wide">
                             Interval Calculator
                        </span>
                        <span  className="block text-gray-800 text-sm">
                            <ul>
                                <li>Encontre os intervalos</li>
                                <li>Faça testes de hipotese simples</li>
                                <li>Encontre o quão melhor sua jornada é</li>
                                <li>S2</li>
                            </ul>
                        </span>
                     </div>
                 </div>
            </div>
        </div>
    );
};

export default Card;