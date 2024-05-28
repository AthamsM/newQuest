
interface MateriaProps {
    texto: string
}
function Materia(props: MateriaProps) {
    return (
        <h1>{props.texto} </h1>
    )
}

export function Navbar() {
    return (
        <div className="max-h-48 flex flex-grow p-6 bg-[#FFAF82] flex-col-reverse ">
            <h2 className="text-3xl font-semibold px-20 mb-6">Inteligencia Artificial</h2>
        </div>
    )
}