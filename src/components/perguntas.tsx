import { Alternativa } from "./alternativa";
import { questao, Questao } from "../data/questao";

export function Perguntas() {
    return (
        <div className="p-4">
            {questao.map((questao: Questao, index: number) => (
                <div key={index} className="mb-6 p-4 border rounded shadow">
                    <h2 className="text-xl font-bold mb-2">Pergunta {index + 1}</h2>
                    <p className="mb-4">{questao.pergunta}</p>
                    <Alternativa alternativas={questao.alternativas} />
                </div>
            ))}
        </div>
    );

}