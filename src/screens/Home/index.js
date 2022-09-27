import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_GAMES = [
  {
    id: 0,
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/53/God_of_War_2005_capa.png/270px-God_of_War_2005_capa.png',
    title: 'God Of War I',
    type: 'Jogo',
    subtitle: 'Jogo eletrônico de ação e aventura, Hack and Slash',
    description: 'God of War é um jogo eletrônico de ação-aventura e hack and slash desenvolvido pela Santa Monica Studio e publicado pela Sony Computer Entertainment (SCE). Lançado pela primeira vez em 22 de março de 2005 para PlayStation 2, é o primeiro título da série com o mesmo nome e o terceiro cronologicamente. Vagamente baseado na mitologia grega, é ambientado na Grécia antiga com a vingança sendo o tema central. O jogador controla o protagonista Kratos, um guerreiro espartano que serve os deuses do Olimpo. A deusa Atena atribui a Kratos a missão de matar Ares, o deus da guerra e seu ex-mentor, que enganou Kratos para que matasse sua própria esposa e filha. Enquanto Ares ataca a cidade de Atenas por ódio a Atena, Kratos embarca em uma busca para encontrar o único objeto capaz de deter o deus de uma vez por todas: a lendária Caixa de Pandora.',
  },
  {
    id: 1,
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/7/7e/God_of_War_2_capa.png/270px-God_of_War_2_capa.png',
    title: 'God Of War II',
    type: 'Jogo',
    subtitle: 'Jogo eletrônico de ação e aventura, Hack and Slash',
    description: 'God of War II é um jogo eletrônico de ação-aventura e hack and slash desenvolvido pela Santa Monica Studio e publicado pela Sony Computer Entertainment (SCE). Lançado pela primeira vez em 13 de março de 2007 para PlayStation 2, é o segundo jogo da franquia God of War e o sexto em ordem cronológica, sendo a continuação de God of War (2005). O jogo é vagamente baseado na mitologia grega e ambientado na Grécia Antiga, com a vingança sendo o tema central. O personagem do jogador é o protagonista Kratos, o novo deus da guerra que tomou o lugar de Ares depois de ter o matado. Kratos é traído por Zeus, o rei dos deuses do Olimpo, que tira dele sua divindade e o mata. Lentamente arrastado para o submundo, ele é salvo pela titã Gaia, que o instrui a encontrar as Irmãs do Destino, pois elas possuem o poder para fazer Kratos voltar no tempo, impedir a traição de Zeus e consequentemente sua morte.',
  },
  {
    id: 2,
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/6/6c/God_of_War_3_capa.png/270px-God_of_War_3_capa.png',
    title: 'God Of War III',
    type: 'Jogo',
    subtitle: 'Jogo eletrônico de ação e aventura, Hack and Slash',
    description: 'God of War III é um jogo eletrônico de ação-aventura e hack and slash desenvolvido pela Santa Monica Studio e publicado pela Sony Computer Entertainment (SCE). Foi lançado em 16 de março de 2010 para PlayStation 3. O jogo é o quinto da série God of War e o sétimo em ordem cronológica, sendo a continuação direta de God of War II (2007). Vagamente baseado na mitologia grega, o jogo é ambientado na Grécia Antiga com a vingança sendo o tema central. O jogador controla o protagonista e ex-God of War Kratos, depois da traição nas mãos de seu pai Zeus, rei dos deuses do Olimpo. Reignificando a Grande Guerra, Kratos sobe ao Monte Olimpo até ser abandonado pela titã Gaia. Guiado pelo espírito de Atena, Kratos luta contra monstros, deuses e Titãs em uma busca por Pandora, sem a qual ele não pode abrir a Caixa de Pandora, derrotar Zeus e acabar com o reinado dos deuses do Olimpo.',
  },
  {
    id: 3,
    image_url: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/God_of_War_2018_capa.png/270px-God_of_War_2018_capa.png',
    title: 'God Of War (2018)',
    type: 'Jogo',
    subtitle: 'Jogo eletrônico de ação e aventura, Jogo eletrônico de luta, Hack and slash',
    description: 'God of War[b] é um jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment (SIE). Foi lançado em 20 de abril de 2018 para PlayStation 4 e em 14 de janeiro de 2022 para Microsoft Windows. É o oitavo título da série God of War e também o oitavo em ordem cronológica, sendo sequência dos eventos ocorridos em God of War III (2010). Ao contrário dos jogos anteriores, que eram vagamente baseados na mitologia grega, este título é vagamente baseado na mitologia nórdica, com a maior parte do tempo situado na antiga Noruega no reino de Midgard. Pela primeira vez na série, há dois protagonistas principais: Kratos, o antigo deus da guerra grego que é acompanhado por seu jovem filho Atreus. Após a morte da segunda esposa de Kratos e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar suas cinzas no pico mais alto dos nove reinos. Kratos mantém seu passado conturbado em segredo de Atreus, que não tem consciência de sua natureza divina. Ao longo da jornada, eles encontram monstros e deuses do mundo nórdico.',
  },
  {
    id: 4,
    image_url:
      'https://sm.ign.com/ign_br/game/g/god-of-war/god-of-war-ragnarok_z48t.jpg',
    title: 'God Of War Ragnarok',
    type: 'Jogo',
    subtitle:
      'Jogo eletrônico de ação e aventura, Jogo eletrônico de luta, Hack and slash',
    description:
      'God of War Ragnarök é um futuro jogo eletrônico de ação-aventura desenvolvido pela Santa Monica Studio e publicado pela Sony Interactive Entertainment. Está programado para ser lançado em 9 de novembro de 2022 exclusivamente para PlayStation 4 e PlayStation 5. Será o nono título da série God of War, o nono em ordem cronológica, e a sequência de God of War (2018). Vagamente baseado na mitologia nórdica, o jogo se passa na antiga Noruega e apresenta os protagonistas Kratos e seu filho Atreus. O jogo deve iniciar o Ragnarök, uma série de eventos que trazem o fim dos tempos e retrata a morte dos deuses nórdicos, que foi predita no jogo anterior após Kratos ter matado o deus Æsir Baldur',
  },
]

const FAKE_DATA_CHARACTERES = [
  {
    id: 0,
    image_url:
      'https://sm.ign.com/ign_br/gallery/e/every-char/every-character-in-god-of-war-ragnarok_pcms.jpg',
    title: 'Kratos',
    type: 'Personagem',
    subtitle: 'Fantasma de Esparta',
    description:
      'Ao longo da era grega da série, Kratos embarca em várias aventuras na tentativa de evitar o desastre ou mudar seu destino. Ele geralmente era retratado como alheio a tudo e de natureza arrogante. Muitas vezes ele se envolveu em atividades moralmente ambíguas e realizou atos de extrema violência. Como um guerreiro espartano, ele se tornou o "Fantasma de Esparta" depois de acidentalmente matar sua família devido aos truques de Ares. Mais tarde, ele vinga a morte de sua família e se torna o deus da guerra depois de matar Ares. Posteriormente é revelado que ele é um semideus, o filho de Zeus, que mais tarde traiu Kratos. A vingança era o tema central da era grega, e cada título fornecia informações adicionais sobre as origens de Kratos e suas relações com sua família e os deuses do Olimpo. Na era nórdica da série, Kratos dá uma reviravolta para o bem e encontra-se controlando sua raiva e aprendendo a ser verdadeiramente pai de seu filho, Atreus, enquanto combate contra monstros e deuses do reino nórdico.',
  },
  {
    id: 1,
    image_url:
      'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/09/10/god-of-war-ragnarok-atreus.jpg',
    title: 'Atreus',
    type: 'Personagem',
    subtitle: 'Loki',
    description: 'O deuteragonista do jogo. Filho de Kratos e Faye, Atreus é um menino que acompanha Kratos em sua jornada. Ele é ensinado a caçar no início do jogo e mostra-se impulsivo e indisciplinado. Ele tem a capacidade de ler escritos rúnicos e tem mais conhecimento sobre o mundo e seus habitantes do que Kratos. Ele não tem conhecimento do status de deus de Kratos. Ele acaba sendo revelado também como Loki, o mitológico Deus do Mal.',
  },
  {
    id: 2,
    image_url:
      'https://static.wikia.nocookie.net/villains/images/6/6c/Freya-GOWR.jpg/revision/latest?cb=20210910165327',
    title: 'Freya',
    type: 'Personagem',
    subtitle: 'Rainha das Valquírias',
    description: 'A mãe de Baldur e ex-esposa de Odin. Deusa da Magia, Amor, Beleza, Morte, Guerra e Fertilidade. Encontrado logo após Kratos e Atreus embarcarem em sua aventura. Ela imediatamente sente que Kratos é um deus. Ela ajuda o casal em sua aventura, ajudando-os a viajar entre os mundos. Mais tarde, ela é revelada como Freya, um dos deuses Vanir e ex-esposa de Odin que a baniu para Midgard e a deixou incapaz de deixar ou prejudicar os outros e também roubou suas habilidades de Valquíria.',
  },
  {
    id: 3,
    image_url:
      'https://www.comboinfinito.com.br/principal/wp-content/uploads/2021/09/E-4CZB3VcAIeomw.jpg',
    title: 'Thor',
    type: 'Personagem',
    subtitle: 'Deus do Trovão, Filho de Odin',
    description: 'Thor (nórdico antigo: Þórr ) é o deus nórdico Aesir do trovão, relâmpagos, tempestades e força. Ele é filho de Odin e Fjörgyn , marido de Sif , irmão de Meili , meio-irmão de Baldur , Týr , Hodr e Bragi , e pai de Magni ,  Modi , Ullr e uma filha. Thor aparece no verdadeiro final de God of War (2018) , e retorna como um dos principais antagonistas de God of War: Ragnarök .',
  },
  {
    id: 4,
    image_url:
      'https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/09/10/god-of-war-ragnarok-mimir.jpg',
    title: 'Mimir',
    type: 'Personagem',
    subtitle: 'O Homem Mais Inteligente Vivo',
    description: 'A figura de conhecimento e sabedoria expansivos que afirma ser o homem mais inteligente vivo. Ele foi banido para Midgard e selado em uma árvore por Odin. Kratos corta sua cabeça e a reanima, após o que ele começa a servir como guia de Kratos e Atreus.',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero
        item={{
          title: 'God Of War Ragnarok',
          subtitle: 'Data de Lançamento: 09/11/2022',
          type: 'Jogo',
          image_url:
            'https://sm.ign.com/ign_br/game/g/god-of-war/god-of-war-ragnarok_z48t.jpg',
        }}
      />
      <HomeList title="Jogos" data={FAKE_DATA_GAMES} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERES} />
    </ScreenScrollContainer>
  )
}
