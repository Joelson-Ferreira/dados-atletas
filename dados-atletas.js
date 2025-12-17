class Atleta{
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        
        if(this.idade >= 9 && this.idade <= 11){
            this.categoria = 'Infantil'
        }else if(this.idade >= 12 && this.idade <= 13){
            this.categoria ='Juvenil'
        }else if(this.idade >= 14 && this.idade <= 15){
            this.categoria = 'Intermediário'
        }else if(this.idade >= 16 && this.idade <= 30){
            this.categoria = 'Adulto'
        }else{
            this.categoria = 'Sem categoria'
        }
    }
    calculaIMC(){
        this.imc = this.peso / (this.altura * this.altura);
    }
    calculaMediaValida(){
        // Copia as notas para não alterar a matriz original
        let copNotas = this.notas.slice();
        // Coloca a matriz de notas em ordem crescente
        copNotas.sort(function(a, b) {
            return a - b;
        });
        // Remove a primeira e a última nota da matriz
        let notasValidas = copNotas.slice(1, 4);
        // Calcula a media
        let soma = notasValidas.reduce(function(total, atual){
            return total + atual
        }, 0);
        this.media = soma/(notasValidas.length);
    }
    obtemNomeAtleta(){;
        return this.nome
    }
    obtemIdadeAtleta(){
        return this.idade;
    }
    obtemPesoAtleta(){
        return this.peso;
    }
    obtemNotasAtleta(){
        return this.notas
    }
    obtemCategoria(){
        this.calculaCategoria();
        return this.categoria;
    }
    obtemIMC(){
        this.calculaIMC()
        return this.imc
    }
    obtemMediaValida(){
        this.calculaMediaValida()
        return this.media
    }
}

function infoAtletas(atleta){

    console.log(`
    Nome: ${atleta.nome}
    Idade: ${atleta.idade}
    Peso: ${atleta.peso}
    Altura: ${atleta.altura}
    Notas: ${atleta.notas}
    Categoria: ${atleta.obtemCategoria()}
    IMC: ${atleta.obtemIMC()}
    Média válida: ${atleta.obtemMediaValida()}
    `);

}

// Declara o usuário "atleta"
let atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

// Exibe os dados cadastrados do usuario "atleta"
console.log(atleta)

// Exibe informações totais (cadastradas e calculadas) do usuário "atleta"
infoAtletas(atleta)
