
interface AlternativaProps {
    alternativas: string[];
}

export function Alternativa({ alternativas }: AlternativaProps) {
    return (
        <div>
            {alternativas.map((alternativa, index) => (
                <div key={index} className="flex items-center mb-2">
                    <input id={`alternativa-${index}`} type="radio" name="alternativa" value={alternativa} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor={`alternativa-${index}`} className="ml-2 text-sm font-medium text-black">{alternativa}</label>
                </div>
            ))}
        </div>
    );
}
