"use client"; // Adicione esta linha no topo

import { useRouter } from "next/navigation";
import { RotateCw } from 'lucide-react';

export default function PageError() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push("/"); // Redireciona para a página inicial
  };
    return (
    <div  className="flex flex-col justify-center items-center h-screen">
            <h1 className='text-4xl mb-4 '>Não é você, sou eu</h1>
            <p>Ocorreu um erro. Provavelmente, so preciso de tempo</p>
            <p>para atualizar</p>
            <button className='gap-4 flex items-center h-min mt-16 shadow-sm shadow-gray-400 pe-18 pl-18 cursor-pointer px' onClick={navigateToHome}>  <RotateCw size={32} />Vamos tentar novamente</button>
    </div>
  );
}
