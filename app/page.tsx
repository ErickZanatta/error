"use client"; // Marcar este componente como Client Component

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const navigateToErrorPage = () => {
    router.push("/pageerror"); // Redireciona para a página de erro
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <button
        onClick={navigateToErrorPage}
        className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 cursor-pointer text-4xl"
      >
        Instagram
      </button>
    </div>
  );
}