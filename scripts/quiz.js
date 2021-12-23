var currentQuestion = 1
var questions = [
    {
        id: 1,
        title: '“Sempre digo que sou a favor do aborto em determinadas circunstâncias. Tenho esta opinião principalmente porque a fé que eu professo me impede de exaltar a hipocrisia”. O dono desta fala é o bispo Edir Macedo, líder da Igreja Universal. ',
        justification: `
        Apesar das igrejas neopentecostais representarem, de modo geral, <a target="_blank" href="#cap3">ideais mais conservadores</a>, o bispo Edir Macedo já <a target="_blank" href="https://www1.folha.uol.com.br/fsp/brasil/fc3110199907.htm">defendeu</a> a descriminalização do aborto em diversas ocasiões.<br><br>
        A frase acima foi tirada de uma postagem feita pelo próprio pastor em seu <a target="_blank" href="https://www.universal.org/bispo-macedo/post/jesus-fala-sobre-o-aborto/"><i>blog</i></a>, em 2010. Na postagem, Macedo defende que o aborto é apenas consequência de diversos problemas sociais, como a “falta de informação, principalmente à camadas financeiramente menos favorecidas e a falta de ações preventivas”.<br><br>
        O bispo também afirma que as manifestações contra o aborto não dão o mesmo valor à vida de crianças que nascem em lares desestruturados, e "não parecem se importar com a vida de meninas e mulheres que morrem diariamente em clínicas de aborto clandestinas".<br><br>Macedo também interpreta uma das passagens da Bíblia como uma defesa ao aborto. Durante a última ceia, ao revelar que um de seus discípulos irá traí-lo, Jesus Cristo diz: “O Filho do homem vai, como está escrito a seu respeito, mas ai daquele por intermédio de quem o Filho do homem está sendo traído! Melhor lhe fora não haver nascido!” (Mateus 26:24).<br><br>
        Segundo o bispo, essa frase pode ser interpretada como: “seria melhor que Judas tivesse sido abortado. Melhor do que o futuro de sua alma”.`,
        answer: true
    },
    {
        id: 2,
        title: 'Silas Malafaia é o pastor mais rico do Brasil, com um patrimônio avaliado em 950 milhões de dólares. ',
        justification: `
        De acordo com uma reportagem feita pela <a target="_blank" href="https://www.forbes.com/sites/andersonantunes/2013/01/17/the-richest-pastors-in-brazil/?sh=32f0a0e15b1e">Revista <i>Forbes</i></a> em 2013, Edir Macedo é o líder religioso mais rico do Brasil. À época, seu patrimônio era avaliado em 950 milhões de dólares, o equivalente, na cotação de 2013, a cerca de 2 bilhões de reais.<br><br>
        Além de possuir igrejas por todo o Brasil e também nos Estados Unidos, o pastor também é um dos donos da Rede Record de televisão, do jornal Folha Universal, e autor de diversos livros best-sellers, com mais de 10 milhões de cópias vendidas mundo afora.<br><br>
        Ainda de acordo com a publicação de 2013, Silas Malafaia estaria no terceiro lugar no ranking, atrás de Valdemiro Santiago, da Igreja Mundial do Poder de Deus. O líder da Assembleia de Deus teria seu patrimônio avaliado em 150 milhões de dólares, de acordo com a Forbes.<br><br>
        No entanto, esse dado foi contestado pelo próprio pastor, e em 2019 a Forbes publicou uma <a target="_blank" href="https://forbes.com.br/colunas/2019/05/nota-de-esclarecimento/">nota de esclarecimento</a>, afirmando que Malafaia comprovou que seu patrimônio é de cerca de 3% do noticiado pelo veículo em 2013.
        `,
        answer: false
    },
    {
        id: 3,
        title: 'A igreja mais devedora ao Governo Federal é de viés neopentecostal.',
        justification: `
        Juntas, cerca de 1.200 igrejas neopentecostais têm dívidas com a Receita Federal. Atualmente, a dívida é de cerca de 460 milhões de reais. Mas, dentre elas, a maior devedora é a Internacional da Graça de Deus, que deve, sozinha, mais de R$ 127 milhões de reais, de acordo com os dados apurados pela própria Receita Federal, e que constam no <a target="_blank" href="https://apublica.org/wp-content/uploads/2019/12/processo-igreja-internacional-da-graca-de-deus.pdf">levantamento feito pela <i>Agência Pública</i></a> por meio da Lei de Acesso à Informação.<br><br>
        As dívidas, que chegam ao número de  R$ 127 milhões de reais, são de valores não pagos pela igreja aos seus funcionários. Outro fato também chama atenção: os pastores podem ser incluídos nesse grupo de funcionários com dívidas previdenciárias. <br><br>
        O levantamento aponta que, de acordo com a decisão da justiça, os pastores tinham vínculo com a igreja e  precisavam cumprir metas mensais de arrecadação, com o risco de serem excluídos da organização caso não atingissem os valores.<br><br>
        `,
        answer: true
    },
    {
        id: 4,
        title: 'Na pandemia, o pastor R.R Soares anunciou água consagrada como cura da Covid-19.',
        justification: `
        "Corona, sai daquela pessoa no hospital agora, em nome de Jesus Cristo. Vai embora, acabou. A bênção chegou e todo o mal está desfeito. Em nome de Jesus Cristo”, disse  R.R Soares. <br><br>
        Enquanto pedia doações, o pastor mostrou por meio de <a target="_blank" href="https://tvefamosos.uol.com.br/noticias/redacao/2021/06/05/internado-com-covid-19-rr-soares-anunciou-agua-consagrada-como-cura.htm">depoimentos</a> de fiéis que a oração e o uso da água abençoada era um remédio efetivo contra a Covid-19. Meses depois, o próprio pastor foi internado por complicações da Covid-19, sendo até entubado.
        `,
        answer: true
    },
    {
        id: 5,
        title: 'As filhas de Edir Macedo foram proibidas de cursar a faculdade antes do casamento.',
        justification: `
        <a target="_blank" href="https://www.youtube.com/watch?v=EZs59KInUnQ">Em um culto</a>, o Bispo Edir Macedo declarou que suas filhas, Cristiane e Viviane, foram proibidas de cursar a faculdade antes do casamento. Segundo o bispo, caso elas estudassem e fossem mais inteligentes que os homens, seriam ''cabeças'' da família e o fracasso da união seria certo.<br><br>
        Na época, a declaração do bispo foi polêmica nas redes sociais. Como justificativa, Macedo acrescentou que caso sua filha Cristiane fosse doutora e tivesse um grau de conhecimento elevado e encontrasse um rapaz que tivesse grau de conhecimento baixo, ele não seria o cabeça, ela seria a cabeça. E se ela fosse a cabeça, não serviria à vontade de Deus
        `,
        answer: true
    },
    {
        id: 6,
        title: 'A Bancada Evangélica foi contra o impeachment de Dilma Rousseff.',
        justification: `
        Em <a target="_blank" href="https://congressoemfoco.uol.com.br/projeto-bula/reportagem/bancada-evangelica-declara-apoio-ao-impeachment-de-dilma/">nota</a> lida em coletiva de imprensa, o presidente da Frente Parlamentar Evangélica da Câmara, o deputado João Campos (PRB-GO) anunciou que a maior parte da bancada evangélica, na época composta por 92 integrantes, votaria a favor do impeachment da presidente. <br><br>
        Após a votação, o levantamento feito pela <a target="_blank" href="https://www.gazetadopovo.com.br/vozes/caixa-zero/93-dos-deputados-da-bancada-evangelica-votaram-pelo-impeachment/"><i>Gazeta do Povo</i></a> aponta que cerca de 93% da bancada foi a favor do impeachment.
        `,
        answer: false
    },
    {
        id: 7,
        title: 'A PEC do voto impresso teve apoio do partido ligado à Igreja Universal.',
        justification: `
        Como forma de apoio e  fidelidade, mesmo derrotada na Câmara, a PEC do voto impresso recebeu apoio de 76% dos evangélicos. Segundo o levantamento feito pelo jornal <a target="_blank" href="https://oglobo.globo.com/politica/bancada-evangelica-deu-mais-de-75-de-apoio-favor-da-pec-do-voto-impresso-1-25151873"><i>O Globo</i></a>, dos 93 deputados que se declaram evangélicos, 71 votaram a favor da PEC.<br><br>
        Na contramão, o  Republicanos, <a target="_blank" href="#cap2">partido ligado à Igreja Universal</a>, foi o que anulou o maior apoio evangélico à proposta, com 17 votos.
        `,
        answer: false
    }
]
var points = 0

var quizElement = document.querySelector('#quiz')
var questionTitleElement = quizElement.querySelector('#questionTitle')
var currentQuestionElement = quizElement.querySelector('#currentQuestion')
var progressBarElement = quizElement.querySelector('#progressBar')
var justificationElement = quizElement.querySelector('#justification')
var resultElement = quizElement.querySelector('#result')
var feedbackElement = quizElement.querySelector('#feedback')
var choicesElement = quizElement.querySelector('#choices')
var quizFinishedElement = document.querySelector('#quizFinished')
var totalPointsElement = quizFinishedElement.querySelector('#totalPoints')

function switchFeedbackVisibility() {

    let state = feedbackElement.style.display

    feedbackElement.style.display = state == 'block' ? 'none' : 'block'

}

function switchButtonsVisibility() {

    let state = choicesElement.style.display

    choicesElement.style.display = state == 'flex' ? 'none' : 'flex'

}

function updateQuiz(restart) {

    if (currentQuestion > questions.length) {

        finishQuiz()

    } else {

        if(currentQuestion !== 1) {

            switchFeedbackVisibility()
            switchButtonsVisibility()

        }

        if (restart) {

            questionTitleElement.innerHTML = questions[0].title
            currentQuestionElement.innerHTML = questions[0].id
            progressBarElement.style.width = `${questions[0].id}0%`

        } else {

            questionTitleElement.innerHTML = questions[currentQuestion - 1].title
            currentQuestionElement.innerHTML = questions[currentQuestion - 1].id
            progressBarElement.style.width = `${questions[currentQuestion - 1].id}0%`

        }

    }

}

function finishQuiz() {

    quizElement.style.display = 'none'
    quizFinishedElement.style.display = 'block'

}

function showResult() {

    justificationElement.innerHTML = questions[currentQuestion - 1].justification

    if(questions[currentQuestion - 1].answer) {

        resultElement.classList.remove('false')
        resultElement.classList.add('true')
        resultElement.innerHTML = 'Verdadeiro'

    } else {

        resultElement.classList.remove('true')
        resultElement.classList.add('false')
        resultElement.innerHTML = 'Falso'

    }

}

function nextQuestion(answer) {

    switchFeedbackVisibility()
    switchButtonsVisibility()
    showResult()

    if (answer == questions[currentQuestion - 1].answer) {

        points++

    }

    currentQuestion++

}

function restartQuiz() {

    switchFeedbackVisibility()
    switchButtonsVisibility()

    justificationElement.innerHTML = null
    resultElement.innerHTML = null

    quizElement.style.display = 'block'
    quizFinishedElement.style.display = 'none'

    currentQuestion = 1
    points = 0

    updateQuiz(true)

}

updateQuiz()