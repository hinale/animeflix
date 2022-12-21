function listarAnimes() {
  var lista = {
    anime01: {
      nome: "Sword Art Online",
      ano: "2012",
      episodios: "25",
      status: "Completo",
      sinopse: "No ano de 2022, a Realidade Virtual Massive Multiplayer RPG Online (VRMMORPG), Sword Art Online (SAO), é lançado. Com o equipamento Nerve Gear, um capacete de realidade virtual que estimula no usuário cinco sentidos através de seu cérebro, os jogadores podem experimentar e controlar seus personagens no jogo com suas mentes. Em 6 de novembro de 2022, todos os jogadores ao entrar pela primeira vez, descobrem que eles são incapazes de sair. Eles são então informados por Kayaba Akihiko, o criador do SAO, que se eles desejam ser livres, eles devem chegar ao 100 º andar da torre do jogo e derrotar o chefe final. No entanto, se os seus avatares morrerem no jogo, seus corpos também morrerão no mundo real. A história segue com Kirito, um jogador habilidoso, que está determinado a vencer o jogo. Conforme o jogo avança, Kirito eventualmente se torna amigo de uma jogadora chamada Asuna que se torna sua parceira. Após a dupla descobrir a identidade do avatar Kayaba em SAO, eles enfrentam e derrotam, libertando-se e os outros jogadores do jogo. Ao voltar para o mundo real, Kirito descobre que Asuna e um pequeno grupo de jogadores SAO estão presos em outra VRMMORPG chamado Alfheim Online (ALO). Sua prisão em ALO é parte de um plano concebido por Nobuyuki Sugo para subjugar Asuna e casar com ela, em uma tentativa de assumir a empresa de sua família. Ajudado por velhos amigos de SAO juntamente com novos aliados, os planos de Kirito frustra Nobuyuki e finalmente se reúne com Asuna no mundo real. Logo depois, Kirito desempenha um outro VRMMORPG chamado Gun Gale Online (GGO) para investigar a misteriosa ligação entre o jogo e as mortes que ocorrem no mundo real. Ele finalmente descobre que os culpados são ex-membros de uma guilda assassina que já tinha encontrado em SAO. Depois de resolver os assassinatos em GGO, Kirito é recrutado para ajudar no desenvolvimento de um jogo de state-of-the-art, UnderWorld (UW), que tem uma interface que é muito mais realista e complexa do que a dos jogos anteriores que ele tinha jogado. Em UW, o fluxo do tempo procede milhares de vezes mais rápido do que no mundo real. No entanto, Kirito acaba caindo para uma armadilha e acorda dentro do jogo, incapaz de sair ele começa a procurar um caminho de volta para a realidade.",
      imagem: "./img/sword_art_online.jpg",
    },
    anime02: {
      nome: "Naruto Shippuden",
      ano: "2007",
      episodios: "500",
      status: "Completo",
      sinopse: "Dois anos e meio se passaram após a partida de Uzumaki Naruto e Jiraiya da vila de Konoha, para um treinamento a parte com Naruto. Logo ao voltar à vila os primeiros a encontrá-lo foram Sakura e Konohamaru. Agora Naruto e seus amigos não tem apenas que se preocupar com o resgate de Sasuke, mas também com uma organização chamada Akatsuki, que está atrás dos Jinchuurikis (ninjas que carregam um Bijuu em seus corpos, junto a isso inumeros outros acontecimentos ocorrem ao longo da série.",
      imagem: "./img/naruto_shippuden.jpg",
    },
    anime03: {
      nome: "Charlotte",
      ano: "2015",
      episodios: "13",
      status: "Completo",
      sinopse: "Enquanto na superfície Yuu Otosaka parece ser apenas mais um adolescente charmoso e inteligente, ele tem um segredo - ele tem a capacidade de entrar na mente das pessoas e controlar completamente seu corpo por cinco segundos de cada vez. Yuu tem usado essa habilidade há anos para obter as notas mais altas, o que lhe permitiu entrar em uma prestigiada escola secundária. Quando o enigmático Nao Tomori pega Yuu usando seu poder, ela coage ele e sua irmã Ayumi a se transferirem para a Academia Hoshinoumi, uma escola para estudantes com habilidades sobrenaturais. O conselho estudantil da escola, liderado por Nao, é encarregado de rastrear secretamente adolescentes que abusam de seus poderes. Yuu é forçado a se juntar ao conselho estudantil e, juntos, eles enfrentam desafios formidáveis ​​que o aproximam da verdade chocante de que sua habilidade, aparentemente incompleta, pode ser mais poderosa do que ele jamais poderia ter imaginado. Uma história original de Jun Maeda, criador de Angel Beats e Clannad, Charlotte explora a vida sobrenatural desses adolescentes e o preço que eles devem pagar por serem especiais.",
      imagem: "./img/charlotte.jpg",
    },
    anime04: {
      nome: "Akame Ga Kill!",
      ano: "2014",
      episodios: "24",
      status: "Completo",
      sinopse: "Tatsumi é um lutador que sai para a Capital em busca de uma maneira de ganhar dinheiro para ajudar a sua aldeia pobre, apenas para descobrir a corrupção profunda lá. Depois de ser vítima de um assalto por uma mulher e perder todo o seu dinheiro, Tatsumi é levado por uma menina aristocrática nobre com o nome de Aria. Na noite seguinte, o lugar de Aria é atacado por um grupo de assassinos conhecidos como Noite Raid.Enquanto Tatsumi no primeiro tenta defender Aria do Akame assassino, um outro membro do grupo pára a luta. Ela revela que Aria raptou vários aldeões e tortura-los para se divertir. Vendo o potencial no Tatsumi, Noite Raid convida o rapaz para o seu aviso grupo que, independentemente de como eles querem assassino pessoas corrompidas, eles são assassinos. Tatsumi aceita, a fim de se tornar mais forte e proteger sua aldeia. Como resultado, Tatsumi começa a treinar, não só para se tornar um lutador melhor, mas assim como assassino frio. Em sua luta contra o Império, Noite Raid começa antagonizar uma organização conhecida como The Jaegars liderados por Edese, o lutador mais poderoso do Império.",
      imagem: "./img/akame_ga_kill.jpg",
    },
    anime05: {
      nome: "Boku no Hero Academy",
      ano: "2016",
      episodios: "14",
      status: "Completo",
      sinopse: "O que é um herói? Para Midoriya Izuku, a resposta dessa pergunta sempre foi simples: 'Tudo que eu quero ser!' E quem é o maior herói? Bem, o lendário All Might (Todo Poderoso), é claro. All Might é o herói número um e também o 'Símbolo da Paz' mundial. Nem mesmo em seus sonhos mais loucos Izuku poderia imaginar que logo seu caminho cruzaria o de seu herói de infância. Em Boku no Hero Academia o status é governado pelas 'Individualidades', superpoderes singulares que se desenvolvem na infância. Mas infelizmente, o viciado em heróis, Midoriya 'Deku' Izuku nunca teve uma Individualidade. Isto é, até conhecer All Might, o maior herói de todos. A transformação de sonhador em herói de Izuku começa na Academia U.A., a melhor escola de treinamento de heróis do Japão. Izuku fica eufórico quando é aceito para essa academia de prestígio, especialmente quando descobre que All Might é um dos professores. Que surpresas essa academia poderosa aguarda? Izuku será capaz de acompanhar os colegas de classe de elite?",
      imagem: "./img/boku_no_hero_academy.jpg",
    },
    anime06: {
      nome: "Tensei Shitara Slime Datta Ken",
      ano: "2018",
      episodios: "25",
      status: "Completo",
      sinopse: "Satoru Mikami é um homem de 37 anos que leva uma vida de descontentamento, seja ela profissional ou amorosa. Certo dia ele acaba sendo morto por um ladrão enquanto conversava na rua com seu amigo. O resultado? Satoru acaba reencarnando num mundo de magia e espada como um “incrível slime” e agora junto a outros monstros irão realizar diversos acontecimentos os quais mudarão o mundo em que agora vive…",
      imagem: "./img/tensei_shitara_slime_datta_ken.jpg",
    },
  };

  var animes = document.getElementById("animes");

  for (var anime in lista) {
    animes.innerHTML += 
    '<div class="card">' + 
      '<img src="' + lista[anime].imagem + '"/>' + 
      '<details>' + 
        '<summary>' + lista[anime].nome + '</summary>' +
        '<p class="ano">Ano: ' + lista[anime].ano + '</p>' +
        '<p class="episodios">Episódios: ' + lista[anime].episodios + '</p>' +
        '<p class="status">Status: ' + lista[anime].status + '</p>' +
        '<p class="sinopse">' + lista[anime].sinopse + '</p>' +
      '</details>' +
    '</div>'

  };
}

listarAnimes();