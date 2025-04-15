"use client";

import { RotateCw } from 'lucide-react';


export default function PageError() {
  return (
    <div  className="flex flex-col justify-center items-center h-screen">
            <h1 className='text-4xl mb-4 '>Não é você, sou eu</h1>
            <p>Ocorreu um erro. Provavelmente, so preciso de tempo</p>
            <p>para atualizar</p>
            <button className='gap-4 flex items-center h-min mt-16 shadow-sm shadow-gray-400 pe-18 pl-18 cursor-pointer px'> <RotateCw size={32} />Vamos tentar novamente</button>
    </div>
  );
}
