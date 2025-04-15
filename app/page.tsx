"use client"; // Marcar este componente como Client Component

import { CircleUserRound } from 'lucide-react';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToErrorPage = () => {
    router.push("/pageerror"); // Redireciona para a página de erro
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <CircleUserRound onClick={navigateToErrorPage} size={76} className='flex flex-row gap-3 pe-3 cursor-pointer' color='#9333EA'/>
      <button
        onClick={navigateToErrorPage}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer text-4xl"
      >
        Instagram
      </button>
    </div>
  );
}