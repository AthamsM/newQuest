import fotoPerfil from "../assets/listaFotoPerfil.svg"

export function Content() {
    return (

        <div className="flex flex-col mt-5 px-8">
            <div>
                <h1 className="px-4">Alunos</h1>
                <div className="max-w-24 mx-4 border border-black mb-3"></div>
                <div>
                    <div className="flex gap-12 px-4">
                        {Array.from({ length: 7}).map(() => {
                            return(<img src={fotoPerfil} alt="FOTO PERFIL" className="" />)
                        })}
                    </div>
                </div>
            </div>
            <div>
                <h1 className="px-4">Listas</h1>
                <div className="max-w-24 mx-4 border border-black mb-3"></div>
            </div>
            <div>
                <h1 className="px-4">Materias</h1>
                <div className="max-w-24 mx-4 border border-black mb-3"></div>
            </div>
        </div>



    )
}