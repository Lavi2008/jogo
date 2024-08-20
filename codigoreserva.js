let vida = 100
let inventario = ["mapa", "água", "kimono"]
let checkpoint1 = true
let acordo1Assistido = false;
let gasolina = 0
let faixa2
alert("Bem-vinda Muna, clique enter para continuar")
alert("Vamos te acompanhar até as olímpiadas, você tomará deciões que acarretarão em seu futuro, então escolha com sabedoria \nClique enter para continuar")

let faixa = Number(prompt("Para começar, escolha o grau de sua faixa de judô \n 1- Iniciante no judô | 2- Intermediário no judô | 3- Avançado no judô"))


function primeiraFase(){
        if(faixa === 1){
            faixa2 = prompt("Suas opções de faixas são: branca, cinza ou azul \nEscolha uma delas para continuar")
        }
        if(faixa === 2){
            faixa2 = prompt("Suas opções de faixas são: amarela, laranja ou verde \nEscolha uma delas para continuar")
        }
        if(faixa === 3){
            faixa2 = prompt("Suas opções de faixas são: preta. Digite a cor dela para continuar")
        }
        alert("Ótima escolha!")
        
        
        let treino = prompt("Sua faixa não será necessária agora. O que precisa saber é que as olimpiadas acontecerão daqui a alguns meses. Sua vida no momento está em 100%, e ela pode diminuir conforme suas decisões, escolha com cuidado! \nSabendo disso, você deseja treinar para os jogos agora? sim | não")
        if(treino === "sim"){
           alert("Muito bem então, treine, descanse e pela manhã falo contigo")
        }
        if(treino === "não"){
            vida -= 10
            alert("Escolha melhor da próxima vez. Sua vida agora é: " + vida + "\nDescanse que pela manhã te chamo")
        }
        alert("Bom dia flor do dia")
    
        while (checkpoint1 == true){ 
            let acordo = prompt("Tenho notícias bem ruins para te dar. Seu país está em guerra e você irá precisar fugir. Você irá para Holanda, onde sua mãe e irmã te esperam! Precisará ser muito forte e destemida \nEstá de acordo? sim | não")
            if(acordo === "sim"){
                alert("Você é muito corajosa!")
                acordo1()
                checkpoint1 = false
            } else if(acordo === "não"){

                    vida -= 10
                    alert("Você não sabe escolher mesmo! Sua vida agora é " + vida)
                    alert("Vou te perguntar de novo")
                    let pergunta; 
                    while(pergunta != "sim"){
                        vida -= 10
                        pergunta = prompt("Você está de acordo? Sua vida é " + vida)
                            if(vida === 0){
                                alert("Você morreu, sua vida é " + vida)
                                alert("Irá voltar para o checkpoint 1")
                                vida = 50;
                            }           
                    }
                    checkpoint1 = false;

            }
            alert ("Não morreu, então pode continuar")
            //se sim, entra aqui
            
            if(acordo1Assistido == false){

                acordo1()
            }
        
    }
    
}


function segundaFase(){
alert("Agora você deverá se direcionar para rodoviária, em uma longa viagem até Holanda")
alert("Para chegar até a rodoviária você tem duas opções, ou vai a pé ou usa sua bicicleta que encurtaria seu precioso tempo")
let pergunta3 = Number(prompt("Vai querer ir de bike? 1- ir a pé | 2- ir de bike"))
if(pergunta3 === 2){
    alert("Escolha rápida e prática!")
    alert("Chegou na rodoviária em 15 minutos")
    alert("Agora pegará o trem até Holanda, boa viagem!")
}
else if(pergunta3 === 1){
    alert("Não diria que foi uma escolha muito inteligente mas você quem manda")
    alert("Chegou na rodoviária em meia hora")
    alert("Agora pegará o trem até Holanda, boa viagem!")
}
alert("Muito tempo se passou...")
alert("Você chegou na Holanda, sua irmã e mãe estavam te esperando de braços abertos \nDepois de tanto tempo seu grande sonho se realizará, participará das grandes oímpiadas. Suas escolhas fizeram você chegar onde chegou e estou muito orgulhosa de ti, parabéns!")
alert("Agora você precisa correr para chegar a tempo aos jogos, vocês irão pegar um táxi para reduzir o tempo")
alert("No caminho até seu destino ouve-se um barulho e o táxi para, o combustível acabou, felizmente vocês se encontram na frente de um posto, tu pega uma garrafa e se direciona até lá")
let pergunta4 = prompt("Escreva 'encher' para começar e 'não' para parar")
if(pergunta4 === "encher"){
    gasolina += 10
    alert("Ótima ideia")
    while(pergunta4 == "encher"){
        gasolina += 10
        pergunta4 = prompt("O galão encheu em "+ gasolina + "% \nDeseja encher mais? Se sim, digite 'encher'")
        if(gasolina === 100){
            alert("Seu galão está cheio agora")
        }
            if(pergunta4 === "não"){
                alert("Seu galão encheu em " + gasolina + "\nVá para o táxi agora")
                }  
           
    }
}
alert("Tudo ocorreu bem, o táxi está com o tanque cheio, agora podem continuar a viagem")
alert("Algumas horas se passaram...")
alert("Vocês finalmente chegaram! Corra para não se atrasar")
alert("Chegando lá dentro, pediram vários dados pessoais e essas coisas... \n\nVocê vai participar da categoria até 70 kg, com a faixa " + faixa2 + " que ralou tanto para conseguir")
alert("Depois de alguns minutos te chamaram e tu entrou com muita energia no tatame \nTinha uma imensidão de pessoas te assistindo. Estava nervosa mas botou pra quebrar") 
alert("\nDepois de uma sequência de golpes quase nunca vistos antes você finaliza sua oponente. É uma emoção nunca vista antes, todos estão gritando e aplaudindo \nNo meio da plateia sua irmã e mãe te assistem com muito orgulho e apreciação. \nVocê ganhou medalha ouro!!!")
alert("Depois de tanto batalhar tu conseguiu, valeu todo o esforço! \nFoi um prazer acompanhar este seu grande sonho contigo. Até a próxima!")





}

function acordo1(){
    let mochila;
    alert("Você tem uma mochila com alguns mantimentos dentro, vamos acesá-la!")
    
        let numeroEscolhido = Number(prompt("O que deseja pegar? Você tem 3 itens. \n 1 = mapa | 2 = água | 3 = kimono"))
        if(numeroEscolhido === 1){
         alert("Você selecionou o item mapa! Ele lhe ajudará muito no caminho até Holanda")
         
        }
        if(numeroEscolhido === 2){
            alert("Você selecionou o item água! ")
            let agua1 = prompt("Deseja beber agora, lembre-se que não queremos uma desidratação | sim | não")
            if(agua1 === "sim"){
                alert("Agora você está hidratada e pronta para partir")
                if(agua1 === "sim" && vida < 100){
                    vida += 10
                    alert("Agora você está hidratada e pronta para partir, sua vida aumentou, agora está em " + vida)
                }
            }
            else if(agua1 === "não"){
                alert("Bom, não diga que eu não te avisei")
            }
            
        }

        if(numeroEscolhido === 3){
            alert("Você selecionou o item kimono! Ele não será necessário agora")
        }
        alert("Bom, para fugir do país você irá pegar um trem que partirá em alguns minutos")
        let pergunta2 = prompt("Deseja colocar algo a mais em seu invetário? sim |não")
        
        if(pergunta2 === "sim"){
            let item2 = prompt("Digite abaixo o que deseja")
            inventario.push(item2)
            for (const item of inventario) {
                alert("Você tem agora: "+ item)
            }
        }
        else if(pergunta2 === "não"){
            alert("Você quem sabe")
        }
        
        acordo1 = true
        segundaFase()
    
}


primeiraFase()







