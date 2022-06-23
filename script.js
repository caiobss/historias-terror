let historias = [
    {
        titulo: 'Mãos de sangue e osso, por Anônimo.',
        conto: '"Eu tinha uns 8, 9 anos. Minha mãe trabalhava à noite e a gente dormia juntas numa cama de casal. Um dia senti uma "presença" estranha. Eu estava com os olhos fechados e quando abri, vi umas mãos em volta da cama. As mãos eram de sangue, osso e pele penduradas e elas tentavam subir pela cama. Virei e tinha uma "sombra" branca deitada comigo. Eu consegui, depois de muuuuuito tempo, levantar e correr pro quarto da minha avó. Ela não teve coragem de voltar comigo"- depoimento anônimo.'
    },

    {
        titulo:'Vultos descendo do teto, por Alba Eres',
        conto:'"Quando eu era pequena, toda noite quando as luzes eram apagadas e eu ia dormir, dois vultos desciam do teto na entrada do quarto. Andavam calmamente até minha cama e cada um ficava de um lado da minha cabeceira, me olhando. Eu cobria a cabeça com o cobertor. Até que um dia tive coragem de contar pra minha mãe. Ela colocou um abajur e me disse para rezar e pedir para eles irem embora. Até hoje durmo com um abajur acesso", Alba Eres - via Facebook.'
    },

    {
        titulo: 'Estudante fantasma, por Mariana',
        conto: '"Tirei essa foto no meu cursinho. Era intervalo e meus amigos estavam dormindo. Tirei a foto pra mostrar pra outros amigos que estavam na outra sala. Não tinha ninguém em pé na hora e atrás de mim, que tirei a foto, só tinha parede. Não tinha ninguém passando no momento da foto"'
    },

    {
        titulo: 'Espírito da vó, por Aline Rsd',
        conto: '"Minha avó morou com minha família nos últimos meses de vida. Ela faleceu no sofá da nossa casa, em um domingo à noite. Na semana seguinte, comecei a ver alguém de branco passando pela casa sempre que ia escovar os dentes. Eu ia atrás e nunca era ninguém. Já minha irmã via formas físicas. Foi terror por um bom tempo, até que eu e minha irmã não conseguíamos dormir mais nos nossos quartos com medo. Minha mãe rezou um pai nosso, queimou o sofá no quintal e nós nunca mais vimos nada", Aline Rsd - via Facebook.'
    },

    {
        titulo: 'EO barbudo de preto, por Beatriz Carneiro',
        conto: '"Eu tinha uns 5 ou 6 anos, estava dormindo e acordei com um barulho no meu quarto. Quando abri os olhos tinha um homem parado na minha frente, com uma barba castanha grande, cabelo escuro e roupa preta. Fiquei olhando pra ele com medo e me afastei na cama para o lado da parede. Senti a cama (de solteiro) afundar do meu lado e comecei a chorar. Olhei de novo e ele tinha sumido, mas ainda parecia ter alguém deitado do meu lado. Eu pedi pra ir embora porque estava com medo e a cama voltou ao normal. Chorei até dormir e lembro do rosto desse homem até hoje. Nunca conheci ninguém assim e meus pais também não", Beatriz S. Carneiro - via Facebook.'
    },

    {
        titulo: 'Figura sem rosto, por Weslley Rodrigo',
        conto: `"Eu tinha 15 anos e um dia resolvi assistir uma série até de madrugada com a minha irmã. No meio da noite minha irmã dormiu e do nada eu comecei a ver o mouse do computador se mexer sozinho. chamei minha mãe. Ela disse que era um rato que poderia tá puxando o fio, mandou eu dormir e foi deitar. Do nada, eu juro que vi uma figura negra, que não tinha rosto ou aparência humana, atrás da estante e aquilo olhava pra mim e apontava. Eu me caguei de medo, lembro que eu falava: 'quem é você aí? Eu não quero você na minha casa! Ninguém te quer aqui! Sai daqui agora!'. O negócio saiu da minha casa, mas eu ouvi ele bater no armarinho, ele meio que passou por dentro do armarinho que começou a balança e a porta bateu e fez o maior estrondo", Weslley Rodrigo - via Facebook.`   
    },

    {
        titulo: 'Meu amigo possuído, por Marielly Fresanso',
        conto: `"Certa vez eu, meu esposo e mais um casal de amigos estávamos comendo pizza na nossa casa. Um amigo que era bem espiritual começou a se sentir mal na cozinha e disse que iria até o nosso quarto fazer uma oração. Esse bendito começou a se balançar pra frente e pra trás. De repente ele começou a dar uma risadinha que arrepiou até o cabelo do cu. Eu e minha colega corremos para a sala, nos borrando de medo. Meu marido foi até ele e depois voltou dizendo que ele queria falar comigo.

        Fui pro quarto (não passava um fio de cabelo na rodela). Ele parou na minha frente, os olhos fechados meio revirados, fez uns grunhidos e disse "essa é minha casa", depois ele se ajoelhou, beijou meus pés , passou a mão na minha barriga e fez gesto de ninar. Quando ele abaixou novamente o celular tocou bem alto e ele saiu do transe. Cerca de um mês depois descobri que estava grávida, talvez isso explique o gesto de ninar. Meu sogro havia falecido há oito meses, talvez isso explique o 'essa é minha casa'. Até hoje morro de medo", Marielly Fresanso - via Facebook.`
    }
]



let historiatxt = document.querySelector('.conto-txt')
let titulotxt = document.querySelector('.titulo-txt')
let indexHistoria = 0

document.querySelector('.voltar').addEventListener('click', ()=>{
    indexHistoria--
    mostrarhistoria(indexHistoria)
})

document.querySelector('.proximo').addEventListener('click', ()=>{
    indexHistoria++
    mostrarhistoria(indexHistoria)
})

function mostrarhistoria(index){
    titulotxt.textContent = ('.titulo-txt', historias[index].titulo)
    historiatxt.textContent = ('.conto-txt', historias[index].conto)
}