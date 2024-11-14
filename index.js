let nome = null

let rng = Math.floor(Math.random() * 4)

if(rng === 0){
    nome = "Marte"
} 

else if (rng === 1){
    nome = "Saturno"
}

else if (rng === 2){
    nome = "Venus"
}

else {
    nome = "Jupiter"
}

let heroi = [nome, Math.floor(Math.random() * 11000)]

console.log("XP: " + heroi[1]);

switch(true){
    case heroi[1] <= 1000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ferro.")
            break

    case 1001 <= heroi[1] && heroi[1] < 2000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Bronze.")
            break

    case 2001 <= heroi[1] && heroi[1] <= 5000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Prata.")
            break

    case 5001 <= heroi[1] && heroi[1] <= 7000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ouro.")
            break

    case 7001 <= heroi[1] && heroi[1] <= 8000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Platina.")
            break
    
    case 8001 <= heroi[1] && heroi[1] <= 9000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Ascendente.")
            break

    case 9001 <= heroi[1] && heroi[1] <= 10000:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Imortal.")
            break
    
    case heroi[1] >= 10001:
        console.log("O Herói de nome " + heroi[0] + " está no nível de Radiante.")
            break
}