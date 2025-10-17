// LISTA DE ESCOLAS MUNICIPAIS
// Para adicionar, editar ou remover uma escola, modifique esta lista.

const escolas = [

    {
        nome: "EMEB DO C. C. PARQUE RESIDENCIAL JARDIM ANSELMO TESTA",
        endereco: "Rua Raimundo Justiniano de Oliveira, 120 – Anselmo Testa",
        telefone: "(16) 3761-4470",
        email: "email@dominio.com",
        imagem: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=KvvVvEW1ljT2DzDk5pdAEQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=248.27342&pitch=0&thumbfov=100",
        descricao: "Atende crianças de 4 e 5 anos (Pré-escola). Horário: 7h às 12h e 12h30 às 17h30.",
        mapaURL: "https://maps.app.goo.gl/8YMkCFjeAE2gg6zw9"
    },
    {
        nome: "EMEB DO CENTRO COMUNITÁRIO JOSÉ VIRGILIO BRAGUETTO",
        endereco: "Rua Eduardo Furlani, s/nº - Jardim Elisa",
        telefone: "(16) 3662-3925",
        email: "email@dominio.com",
        imagem: "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=Oc312Sb0NIY2qCi3ztMvpQ&cb_client=search.gws-prod.gps&w=408&h=240&yaw=81.50346&pitch=0&thumbfov=100",
        descricao: "Atende crianças de 4 e 5 anos (Pré-escola). Horário: das 7h às 12h e das 12h30 às 17h30.",
        mapaURL: "https://maps.app.goo.gl/asypCPHrQG28VsjN6"
    }
    // Para adicionar uma nova escola, copie o bloco acima, cole aqui e altere os dados.
    // Exemplo:
    // ,
    // {
    //     nome: "Nome da Nova Escola",
    //     endereco: "Endereço da Nova Escola",
    //     telefone: "(XX) 0000-0000",
    //     email: "email@novaescola.com",
    //     imagem: "caminho/para/imagem.jpg"
    // }
];

// Ordena a lista de escolas em ordem alfabética pelo nome
escolas.sort((a, b) => a.nome.localeCompare(b.nome));
