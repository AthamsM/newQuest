import fotoPerfil from "../assets/fotoPerfil.svg"

export function Siderbar() {
    return (
        <div className="w-64  h-[500px] bg-white text-black flex-shrink-0 fixed">
            <div className="ms-8">
                <div className="px-4 py-6">
                    <img src={fotoPerfil} alt="FOTO PERFIL" className="" />
                    <h1 className="px-2 mt-2 font-bold">Nome Sobrenome</h1>
                    <h1 className="px-10 text-slate-500">Professor</h1>
                </div>
                <nav className="mt-2">
                    <h1 className="px-4">Turmas</h1>
                    <div className="max-w-24 mx-4 border border-black mb-3"></div>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">Inteligencia Artificial</a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">Matematica Discreta</a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">Estrutura de Dados</a>
                    <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-300">Banco de Dados</a>
                </nav>
            </div>
        </div>
    )
}

