export interface Questao{
    pergunta: string;
    alternativas: string[];
    resposta: string;
    assuntos: string[];
    area: string;
}

export const questao: Questao[] = [
        {
				pergunta: 'Resolva a expressão 3 + 2 * 4.',
				alternativas: ['a) 11', 'b) 15', 'c) 26'],
				resposta: 'a',
				assuntos: ['operações básicas'],
				area: 'Matemática Básica'
		},
		{
				pergunta:'Calcule a área de um quadrado com lado igual a 5 unidades.',
				alternativas: ['a) 20', 'b) 25', 'c) 30'],
				resposta: 'b',
				assuntos: ['área de figuras planas'],
				area: 'Geometria'
		},
		{
				pergunta: 'Simplifique a expressão 5/8 - 1/4.',
				alternativas: ['a) 1/8', 'b) 3/8', 'c) 1/2'],
				resposta: 'b',
				assuntos: ['frações', 'operações básicas'],
				area: 'Matemática Básica'
		},
		{
				pergunta: 'Resolva a equação 2x/5 + 6 = 8.',
				alternativas: ['a) 10', 'b) 8', 'c) 5'],
				resposta: 'a',
				assuntos: ['equações', 'álgebra linear', 'frações'],
				area: 'Álgebra'
		},
		{
				pergunta: 'Calcule o valor aproximado do cateto oposto de uma triângulo retângulo cuja hipotenusa tem valor igual a 78cm e faz um ângulo com o cateto adjacente de 40°.',
				alternativas: ['a) 48.5', 'b) 50', 'c) 45'],
				resposta: 'b',
				assuntos: ['ângulos', 'geometria'],
				area: 'Trigonometria'
		},
		{
				pergunta: 'Resolva o sistema de equações: 3x + y = 10 x - 2y = -2',
				alternativas: ['a) x = 2, y = 4', 'b) x = 1, y = 2', 'c) x = 3, y = 1'],
				resposta: 'a',
				assuntos: ['equações', 'álgebra linear'],
				area: 'Álgebra'
		},
		{
				pergunta: 'Qual a negação da sentença "Miau é um gato e é rosa":',
				alternativas: ['a) Se Miau é um gato então não é rosa', 'b) Miau não é um gato ou é rosa', 'c) Miau não é um gato ou não é rosa'],
				resposta: 'c',
				assuntos: ['raciocínio lógico'],
				area: 'Lógica'
		},
		{
				pergunta:'Se todos os gatos gostam de peixe e Tom é um gato, então o que Tom provavelmente gosta?',
				alternativas: ['a) frutas', 'b) peixe', 'c) legumes'],
				resposta: 'b',
				assuntos: ['raciocínio lógico'],
				area: 'Lógica'
		},
		{
				pergunta: 'Qual a área de um triângulo cuja base mede 35cm e possui 50cm de altura?',
				alternativas: ['a) 875cm', 'b) 789cm', 'c) 850cm'],
				resposta: 'a',
				assuntos: ['área de figuras planas', 'operações básicas'],
				area: 'Geometria'
		}
    ];