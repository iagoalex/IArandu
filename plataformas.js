/* =========================================================================================================================================================================================
                                                                        BANCO DE DADOS DAS FERRAMENTAS
========================================================================================================================================================================================= */

const ferramentas = [

    {
        nome: "Semantic Scholar",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "pesquisa científica",
            "pesquisa acadêmica",
            "busca de artigos",
            "busca semântica",
            "revisão de literatura",
            "revisão bibliográfica",
            "referências bibliográficas",
            "TCC",
            "dissertação",
            "tese",
            "artigos semelhantes",
            "artigos relacionados",
            "citações",
            "autores",
            "resumos",
            "metadados",
            "influência de artigos",
            "literatura relacionada"
        ],

        descricao:
            "Ferramenta de pesquisa acadêmica que utiliza inteligência artificial e análise semântica para localizar artigos, autores, citações e trabalhos relacionados.",

        icone: "imagens/semanticScholar.png",

        manual: "https://www.semanticscholar.org/product/tutorials",

        site: "https://www.semanticscholar.org/"
    },

    {
        nome: "Research Rabbit",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "revisão de literatura",
            "revisão bibliográfica",
            "mapeamento da literatura",
            "mapa de citações",
            "rede de citações",
            "artigos relacionados",
            "artigos semelhantes",
            "autores",
            "referências",
            "citações",
            "descoberta de artigos",
            "literatura acadêmica",
            "TCC",
            "dissertação",
            "tese",
            "Zotero"
        ],

        descricao:
            "Ferramenta de descoberta e mapeamento da literatura científica que permite explorar conexões entre artigos, autores, citações e referências.",

        icone: "imagens/researchRabbit.png",

        manual: "https://learn.researchrabbit.ai/en/",

        site: "https://www.researchrabbit.ai/"
    },

    {
        nome: "Connected Papers",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "artigos relacionados",
            "artigos semelhantes",
            "mapeamento da literatura",
            "mapa de artigos",
            "mapa visual",
            "rede de artigos",
            "citações",
            "referências",
            "co-citação",
            "acoplamento bibliográfico",
            "trabalhos anteriores",
            "trabalhos derivados",
            "revisão de literatura",
            "revisão bibliográfica",
            "TCC",
            "dissertação",
            "tese"
        ],

        descricao:
            "Ferramenta visual para descobrir e explorar artigos relacionados a partir de um trabalho científico de referência.",

        icone: "imagens/connectedPapers.png",

        manual: "https://www.youtube.com/watch?v=nAWR2auL_6E#",

        site: "https://www.connectedpapers.com/"
    },

    {
        nome: "Litmaps",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "revisão de literatura",
            "revisão bibliográfica",
            "mapeamento da literatura",
            "mapa de literatura",
            "mapa de citações",
            "rede de citações",
            "artigos relacionados",
            "artigos semelhantes",
            "descoberta de artigos",
            "lacunas de pesquisa",
            "research gaps",
            "referências",
            "citações",
            "Zotero",
            "bibliografia",
            "atualização da literatura"
        ],

        descricao:
            "Ferramenta de mapeamento visual da literatura que permite encontrar artigos, visualizar conexões entre trabalhos e acompanhar novas publicações.",

        icone: "imagens/litmaps.png",

        manual: "https://docs.litmaps.com/en/collections/8541861-how-to-use-litmaps",

        site: "https://www.litmaps.com/"
    },

    {
        nome: "Inciteful",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "mapeamento da literatura",
            "rede de citações",
            "mapa de citações",
            "artigos relacionados",
            "artigos semelhantes",
            "citações",
            "referências",
            "co-citação",
            "acoplamento bibliográfico",
            "PageRank",
            "descoberta de artigos",
            "conexão entre artigos",
            "literatura acadêmica"
        ],

        descricao:
            "Ferramenta de descoberta de literatura baseada em redes de citações, permitindo encontrar trabalhos relacionados a partir de artigos de referência.",

        icone: "imagens/inciteful.avif",

        manual: "#",

        site: "https://incitefulmed.com/academic/"
    },

    {
        nome: "Open Knowledge Maps",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "mapeamento da literatura",
            "mapa de conhecimento",
            "mapa visual",
            "visualização científica",
            "conceitos",
            "temas de pesquisa",
            "artigos relacionados",
            "descoberta de literatura",
            "pesquisa acadêmica",
            "revisão de literatura",
            "revisão bibliográfica",
            "PubMed",
            "BASE"
        ],

        descricao:
            "Ferramenta de visualização da literatura científica que cria mapas de conhecimento para identificar grupos de trabalhos e conceitos relacionados a um tema.",

        icone: "imagens/openKowledgeMaps.png",

        manual: "#",

        site: "https://openknowledgemaps.org/"
    },

    {
        nome: "Citation Gecko",

        categoria: "mapeamento",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "citações",
            "referências",
            "rede de citações",
            "mapeamento de citações",
            "artigos relacionados",
            "artigos semelhantes",
            "descoberta de artigos",
            "revisão de literatura",
            "revisão bibliográfica",
            "literatura acadêmica",
            "bibliografia"
        ],

        descricao:
            "Ferramenta de descoberta de literatura que utiliza relações de citações e referências para encontrar trabalhos relacionados.",

        icone: "imagens/citationGecko.png",

        manual: "#",

        site: "https://citationgecko.com/"
    },

    {
        nome: "Consensus",

        categoria: "busca",

        palavras: [
            "pesquisa científica",
            "pesquisa acadêmica",
            "artigos científicos",
            "busca acadêmica",
            "busca científica",
            "evidências científicas",
            "evidências",
            "literatura científica",
            "revisão de literatura",
            "perguntas científicas",
            "síntese de pesquisas",
            "estudos científicos",
            "artigos revisados por pares",
            "peer reviewed",
            "IA para pesquisa"
        ],

        descricao:
            "Motor de busca acadêmico baseado em inteligência artificial que permite pesquisar e sintetizar evidências encontradas em artigos científicos.",

        icone: "imagens/consensus.avif",

        manual: "https://help.consensus.app/",

        site: "https://consensus.app/"
    },

    {
        nome: "SciSpace",

        categoria: "revisao",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "revisão de literatura",
            "revisão bibliográfica",
            "leitura de artigos",
            "análise de artigos",
            "PDF científico",
            "Chat com PDF",
            "resumo de artigos",
            "explicação de artigos",
            "extração de dados",
            "escrita acadêmica",
            "referências",
            "citações",
            "TCC",
            "dissertação",
            "tese",
            "revisão sistemática"
        ],

        descricao:
            "Plataforma de pesquisa acadêmica com ferramentas para descobrir, ler, compreender, comparar e analisar artigos científicos e arquivos PDF.",

        icone: "imagens/sciSpace.svg",

        manual: "https://learn.scispace.com/",

        site: "https://scispace.com/"
    },

    {
        nome: "Elicit",

        categoria: "revisao",

        palavras: [
            "pesquisa científica",
            "pesquisa acadêmica",
            "revisão de literatura",
            "revisão bibliográfica",
            "revisão sistemática",
            "PRISMA",
            "busca de artigos",
            "triagem de artigos",
            "screening",
            "extração de dados",
            "síntese de evidências",
            "evidências científicas",
            "análise de artigos",
            "literatura científica",
            "TCC",
            "dissertação",
            "tese"
        ],

        descricao:
            "Plataforma de inteligência artificial para pesquisa acadêmica, com recursos para busca de artigos, revisão sistemática, triagem, extração e síntese de evidências.",

        icone: "imagens/elicit.jpeg",

        manual: "https://elicit.com/help",

        site: "https://elicit.com/"
    },

    {
        nome: "Google Acadêmico",

        categoria: "busca",

        palavras: [
            "artigos científicos",
            "pesquisa acadêmica",
            "pesquisa científica",
            "busca acadêmica",
            "literatura científica",
            "artigos",
            "teses",
            "dissertações",
            "livros",
            "citações",
            "autores",
            "periódicos",
            "patentes",
            "referências",
            "bibliografia",
            "TCC"
        ],

        descricao:
            "Ferramenta de busca acadêmica que permite localizar artigos, livros, teses, dissertações, citações e outras publicações científicas.",

        icone: "imagens/googleAcademico.png",

        manual: "#",

        site: "https://scholar.google.com/"
    },

    {
        nome: "OpenAlex",

        categoria: "base",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "base bibliográfica",
            "metadados",
            "autores",
            "instituições",
            "periódicos",
            "citações",
            "referências",
            "produção científica",
            "bibliometria",
            "análise bibliométrica",
            "pesquisa acadêmica",
            "API científica",
            "dados científicos"
        ],

        descricao:
            "Índice aberto da produção científica mundial, reunindo dados sobre trabalhos, autores, instituições, fontes, conceitos e citações.",

        icone: "imagens/openAlex.jpg",

        manual: "https://help.openalex.org/",

        site: "https://openalex.org/"
    },

    {
        nome: "BASE",

        categoria: "base",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "busca acadêmica",
            "busca científica",
            "repositórios",
            "acesso aberto",
            "open access",
            "teses",
            "dissertações",
            "documentos acadêmicos",
            "periódicos",
            "metadados",
            "literatura acadêmica"
        ],

        descricao:
            "Mecanismo de busca acadêmica que reúne documentos científicos provenientes de repositórios e outras fontes de informação acadêmica.",

        icone: "imagens/base.png",

        manual: "#",

        site: "https://www.base-search.net/"
    },

    {
        nome: "CORE",

        categoria: "base",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "acesso aberto",
            "open access",
            "artigos completos",
            "texto completo",
            "repositórios",
            "periódicos",
            "teses",
            "dissertações",
            "documentos científicos",
            "busca acadêmica",
            "pesquisa científica",
            "literatura acadêmica"
        ],

        descricao:
            "Grande infraestrutura de acesso aberto que indexa literatura científica proveniente de repositórios e periódicos de diferentes países.",

        icone: "imagens/core.png",

        manual: "#",

        site: "https://core.ac.uk/"
    },

    {
        nome: "DOAJ",

        categoria: "base",

        palavras: [
            "acesso aberto",
            "open access",
            "periódicos científicos",
            "revistas científicas",
            "artigos científicos",
            "literatura científica",
            "periódicos revisados por pares",
            "peer reviewed",
            "revistas de acesso aberto",
            "pesquisa acadêmica",
            "diretório de periódicos",
            "publicação científica"
        ],

        descricao:
            "Diretório internacional de periódicos e artigos científicos de acesso aberto, com foco em publicações acadêmicas de qualidade.",

        icone: "imagens/doaj.jpg",

        manual: "https://doaj.org/apply/guide/",

        site: "https://doaj.org/"
    },

    {
        nome: "PubMed",

        categoria: "biomedica",

        palavras: [
            "artigos científicos",
            "ciências da saúde",
            "medicina",
            "biomedicina",
            "saúde",
            "enfermagem",
            "odontologia",
            "farmácia",
            "biologia",
            "literatura biomédica",
            "pesquisa médica",
            "ensaios clínicos",
            "revisão sistemática",
            "MeSH",
            "Medline",
            "pesquisa científica"
        ],

        descricao:
            "Base de dados especializada em literatura biomédica e ciências da saúde, mantida pelo National Library of Medicine.",

        icone: "imagens/pubmed.png",

        manual: "https://www.ncbi.nlm.nih.gov/guide/training-tutorials/",

        site: "https://pubmed.ncbi.nlm.nih.gov/"
    },

    {
        nome: "Europe PMC",

        categoria: "biomedica",

        palavras: [
            "artigos científicos",
            "biomedicina",
            "ciências da saúde",
            "medicina",
            "biologia",
            "literatura biomédica",
            "pesquisa médica",
            "acesso aberto",
            "open access",
            "citações",
            "ensaios clínicos",
            "preprints",
            "literatura científica"
        ],

        descricao:
            "Plataforma de busca e acesso à literatura científica nas áreas biomédica e das ciências da vida, incluindo artigos, preprints e dados relacionados.",

        icone: "imagens/europePMC.png",

        manual: "https://europepmc.org/help",

        site: "https://europepmc.org/"
    },

    {
        nome: "ERIC",

        categoria: "educacao",

        palavras: [
            "educação",
            "pesquisa educacional",
            "artigos científicos",
            "literatura educacional",
            "pedagogia",
            "ensino",
            "aprendizagem",
            "políticas educacionais",
            "formação docente",
            "educação básica",
            "ensino superior",
            "educação especial",
            "tecnologia educacional",
            "pesquisa acadêmica"
        ],

        descricao:
            "Base especializada em literatura e pesquisas na área da educação, incluindo artigos, relatórios, pesquisas e documentos educacionais.",

        icone: "imagens/eric.png",

        manual: "https://eric.ed.gov/?advanced=true",

        site: "https://eric.ed.gov/"
    },

    {
        nome: "JSTOR",

        categoria: "multidisciplinar",

        palavras: [
            "artigos científicos",
            "periódicos",
            "revistas científicas",
            "livros",
            "humanidades",
            "ciências sociais",
            "história",
            "educação",
            "filosofia",
            "sociologia",
            "literatura científica",
            "pesquisa acadêmica",
            "pesquisa histórica",
            "fontes acadêmicas"
        ],

        descricao:
            "Biblioteca digital acadêmica com ampla coleção de periódicos, livros, fontes primárias e outros conteúdos de pesquisa.",

        icone: "imagens/jstor.svg",

        manual: "https://support.jstor.org/hc/en-us",

        site: "https://www.jstor.org/"
    },

    {
        nome: "Web of Science",

        categoria: "multidisciplinar",

        palavras: [
            "artigos científicos",
            "literatura científica",
            "base bibliográfica",
            "citações",
            "referências",
            "bibliometria",
            "produção científica",
            "periódicos",
            "índices de citação",
            "impacto científico",
            "autores",
            "instituições",
            "pesquisa acadêmica",
            "revisão de literatura"
        ],

        descricao:
            "Plataforma de informação científica e análise de citações que permite pesquisar literatura e acompanhar a produção científica em diversas áreas.",

        icone: "imagens/clarivate.png",

        manual: "https://clarivate.libguides.com/webofscienceplatform",

        site: "https://www.webofscience.com/"
    },

    {
        nome: "ScienceDirect",

        categoria: "editora",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "livros acadêmicos",
            "pesquisa científica",
            "literatura científica",
            "Elsevier",
            "ciência",
            "tecnologia",
            "engenharia",
            "medicina",
            "ciências sociais",
            "pesquisa acadêmica",
            "texto completo",
            "artigos revisados por pares"
        ],

        descricao:
            "Plataforma da Elsevier para acesso e pesquisa em artigos científicos, livros e capítulos acadêmicos de diversas áreas.",

        icone: "imagens/scienceDirect.svg",

        manual: "https://www.elsevier.support/sciencedirect",

        site: "https://www.sciencedirect.com/"
    },

    {
        nome: "Springer Nature Link",

        categoria: "editora",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "livros acadêmicos",
            "Springer",
            "Nature",
            "pesquisa científica",
            "literatura científica",
            "medicina",
            "ciências naturais",
            "engenharia",
            "tecnologia",
            "ciências sociais",
            "humanidades",
            "texto completo"
        ],

        descricao:
            "Plataforma da Springer Nature para pesquisa e acesso a artigos, livros, capítulos e outros conteúdos científicos.",

        icone: "imagens/springerNature.svg",

        manual: "#",

        site: "https://link.springer.com/"
    },

    {
        nome: "Wiley Online Library",

        categoria: "editora",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "livros acadêmicos",
            "pesquisa científica",
            "literatura científica",
            "Wiley",
            "ciências",
            "medicina",
            "engenharia",
            "tecnologia",
            "ciências sociais",
            "humanidades",
            "artigos revisados por pares"
        ],

        descricao:
            "Biblioteca digital da Wiley que reúne periódicos, livros e outros conteúdos acadêmicos e científicos.",

        icone: "imagens/wiley.png",

        manual: "https://authorservices.wiley.com/author-resources/index.html",

        site: "https://onlinelibrary.wiley.com/"
    },

    {
        nome: "Taylor & Francis Online",

        categoria: "editora",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "revistas acadêmicas",
            "pesquisa científica",
            "literatura científica",
            "ciências sociais",
            "educação",
            "humanidades",
            "psicologia",
            "saúde",
            "tecnologia",
            "pesquisa acadêmica",
            "artigos revisados por pares"
        ],

        descricao:
            "Plataforma de periódicos e livros acadêmicos da Taylor & Francis, abrangendo diversas áreas do conhecimento.",

        icone: "imagens/taylorFrancis.svg",

        manual: "https://authorservices.taylorandfrancis.com/",

        site: "https://www.tandfonline.com/"
    },

    {
        nome: "SciELO",

        categoria: "regional",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "revistas científicas",
            "acesso aberto",
            "open access",
            "Brasil",
            "América Latina",
            "literatura científica",
            "pesquisa brasileira",
            "ciências sociais",
            "educação",
            "saúde",
            "humanidades",
            "pesquisa acadêmica"
        ],

        descricao:
            "Biblioteca científica eletrônica que reúne periódicos e artigos científicos, com forte presença da produção científica brasileira e latino-americana.",

        icone: "imagens/scielo.svg",

        manual: "https://www.scielo.org/pt/sobre-o-scielo/scielo-metodologia/",

        site: "https://www.scielo.org/"
    },

    {
        nome: "Redalyc",

        categoria: "regional",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "revistas científicas",
            "acesso aberto",
            "open access",
            "América Latina",
            "América Latina e Caribe",
            "ciências sociais",
            "humanidades",
            "educação",
            "literatura científica",
            "pesquisa acadêmica",
            "produção científica latino-americana"
        ],

        descricao:
            "Sistema de informação científica que reúne periódicos acadêmicos, especialmente da América Latina, Caribe e outras regiões ibero-americanas.",

        icone: "imagens/redalyc.png",

        manual: "#",

        site: "https://www.redalyc.org/"
    },

    {
        nome: "Portal de Periódicos CAPES",

        categoria: "institucional",

        palavras: [
            "artigos científicos",
            "periódicos científicos",
            "bases de dados",
            "literatura científica",
            "pesquisa acadêmica",
            "pesquisa científica",
            "teses",
            "dissertações",
            "livros",
            "normas técnicas",
            "patentes",
            "referências",
            "texto completo",
            "acesso institucional",
            "CAPES",
            "pós-graduação"
        ],

        descricao:
            "Portal brasileiro que reúne periódicos, bases de dados, livros, teses, dissertações, normas, patentes e outros recursos para pesquisa acadêmica.",

        icone: "imagens/periodicosCapes.png",

        manual: "https://www.periodicos.capes.gov.br/index.php/treinamentos",

        site: "https://www.periodicos.capes.gov.br/"
    },

    {
        nome: "BDTD",

        categoria: "institucional",

        palavras: [
            "teses",
            "dissertações",
            "tese de doutorado",
            "dissertação de mestrado",
            "trabalhos acadêmicos",
            "pesquisa acadêmica",
            "pesquisa científica",
            "produção científica brasileira",
            "pós-graduação",
            "metadados",
            "texto completo",
            "Brasil",
            "IBICT",
            "biblioteca digital"
        ],

        descricao:
            "Biblioteca Digital Brasileira de Teses e Dissertações, mantida pelo IBICT, que integra repositórios de instituições de ensino e pesquisa do Brasil.",

        icone: "imagens/bdtd.png",

        manual: "https://www.gov.br/ibict/pt-br/assuntos/informacao-cientifica/bdtd",

        site: "https://bdtd.ibict.br/"
    },

    {
        nome: "Catálogo de Teses e Dissertações da CAPES",

        categoria: "institucional",

        palavras: [
            "teses",
            "dissertações",
            "mestrado",
            "doutorado",
            "pós-graduação",
            "trabalhos acadêmicos",
            "pesquisa acadêmica",
            "pesquisa científica",
            "produção científica brasileira",
            "CAPES",
            "programas de pós-graduação",
            "resumos",
            "autores",
            "orientadores"
        ],

        descricao:
            "Catálogo da CAPES para localizar teses e dissertações produzidas em programas de pós-graduação brasileiros.",

        icone: "imagens/periodicosCapes.png",

        manual: "#",

        site: "https://catalogodeteses.capes.gov.br/"
    },

    {
        nome: "Oasisbr",

        categoria: "institucional",

        palavras: [
            "artigos científicos",
            "teses",
            "dissertações",
            "trabalhos acadêmicos",
            "acesso aberto",
            "open access",
            "produção científica brasileira",
            "repositórios",
            "literatura científica",
            "dados científicos",
            "pesquisa acadêmica",
            "IBICT",
            "documentos científicos"
        ],

        descricao:
            "Portal brasileiro de publicações e dados científicos em acesso aberto que reúne conteúdos provenientes de diferentes repositórios e fontes.",

        icone: "imagens/oasisbr.png",

        manual: "#",

        site: "https://oasisbr.ibict.br/"
    },

    {
        nome: "arXiv",

        categoria: "preprint",

        palavras: [
            "preprints",
            "artigos científicos",
            "pesquisa científica",
            "pesquisa acadêmica",
            "física",
            "matemática",
            "computação",
            "ciência da computação",
            "inteligência artificial",
            "estatística",
            "aprendizado de máquina",
            "machine learning",
            "publicação científica",
            "manuscritos"
        ],

        descricao:
            "Repositório aberto de preprints que disponibiliza trabalhos de pesquisa, especialmente nas áreas de matemática, física, computação e áreas relacionadas.",

        icone: "imagens/arxiv.svg",

        manual: "https://info.arxiv.org/help/index.html",

        site: "https://arxiv.org/"
    },

    {
        nome: "bioRxiv",

        categoria: "preprint",

        palavras: [
            "preprints",
            "biologia",
            "ciências da vida",
            "biomedicina",
            "biologia molecular",
            "genética",
            "neurociência",
            "ecologia",
            "microbiologia",
            "pesquisa científica",
            "manuscritos",
            "artigos científicos",
            "ciências naturais"
        ],

        descricao:
            "Servidor de preprints voltado às ciências da vida, permitindo o compartilhamento de manuscritos científicos antes da publicação formal em periódicos.",

        icone: "imagens/biorxiv.png",

        manual: "https://connect.biorxiv.org/",

        site: "https://www.biorxiv.org/"
    },

    {
        nome: "medRxiv",

        categoria: "preprint",

        palavras: [
            "preprints",
            "medicina",
            "ciências da saúde",
            "saúde",
            "pesquisa médica",
            "pesquisa clínica",
            "epidemiologia",
            "saúde pública",
            "ensaios clínicos",
            "biomedicina",
            "artigos científicos",
            "manuscritos",
            "literatura médica"
        ],

        descricao:
            "Servidor de preprints dedicado às áreas de medicina, saúde e ciências relacionadas, permitindo a divulgação de manuscritos antes da revisão por pares.",

        icone: "imagens/medrxiv.webp",

        manual: "https://connect.medrxiv.org/",

        site: "https://www.medrxiv.org/"
    },

    {
        nome: "Scite.ai",

        categoria: "citacoes",

        palavras: [
            "artigos científicos",
            "citações",
            "análise de citações",
            "referências",
            "citações inteligentes",
            "smart citations",
            "literatura científica",
            "evidências",
            "revisão de literatura",
            "revisão bibliográfica",
            "artigos relacionados",
            "contexto das citações",
            "citações favoráveis",
            "citações contrárias",
            "TCC",
            "dissertação",
            "tese"
        ],

        descricao:
            "Ferramenta de análise de citações que permite investigar como trabalhos científicos são citados e identificar o contexto das citações.",

        icone: "imagens/scite.svg",

        manual: "https://www.scite.ai/help",

        site: "https://scite.ai/"
    },

    {
        nome: "ChatPDF",

        categoria: "leitura",

        palavras: [
            "PDF",
            "artigos científicos",
            "leitura de artigos",
            "análise de PDF",
            "resumo de PDF",
            "resumo de artigos",
            "perguntas sobre PDF",
            "compreensão de artigos",
            "documentos acadêmicos",
            "pesquisa acadêmica",
            "TCC",
            "dissertação",
            "tese",
            "extração de informações",
            "análise documental"
        ],

        descricao:
            "Ferramenta de inteligência artificial que permite conversar com documentos PDF, fazer perguntas, localizar informações e auxiliar na compreensão do conteúdo.",

        icone: "imagens/openia.png",

        manual: "https://www.chatpdf.com/guide",

        site: "https://www.chatpdf.com/"
    }

];

/* =========================================================================================================================================================================================
                                                                            ELEMENTOS DA PÁGINA
========================================================================================================================================================================================= */

const campoBusca =
    document.getElementById("campoBusca");

const botaoBuscar =
    document.getElementById("botaoBuscar");

const listaResultados =
    document.getElementById("listaResultados");

const semResultados =
    document.getElementById("semResultados");

const quantidade =
    document.getElementById("quantidade");

const tituloResultados =
    document.getElementById("tituloResultados");



/* =========================================================================================================================================================================================
                                                                            NORMALIZAR TEXTO
                                                                            Permite encontrar "vídeo" digitando "video"
========================================================================================================================================================================================= */

function normalizar(texto) {

    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

}

/* =========================================================================================================================================================================================
                                                                               EXIBIR RESULTADOS
========================================================================================================================================================================================= */

function exibirResultados(lista) {

    listaResultados.innerHTML = "";


    quantidade.textContent =
        `${lista.length} ferramenta${lista.length !== 1 ? "s" : ""}`;


    if (lista.length === 0) {

        semResultados.style.display = "block";

        return;

    }


    semResultados.style.display = "none";


    lista.forEach(ferramenta => {

        const card =
            document.createElement("article");


        card.className = "card";


        card.innerHTML = `
            <div class="card-topo">
                <div class="icone">
                    <img src="${ferramenta.icone}" alt="Logo ${ferramenta.nome}" />
                </div>
                <span class="tipo">${ferramenta.categoria}</span>
            </div>

            <h3>${ferramenta.nome}</h3>
            <p>${ferramenta.descricao}</p>

            <div class="botoes">
                <a href="${ferramenta.manual}" class="manual">Ver manual</a>
                <a href="${ferramenta.site}" class="site" target="_blank" rel="noopener noreferrer">Acessar sistema</a>
            </div>
        `;


        listaResultados.appendChild(card);

    });

}

/* =========================================================================================================================================================================================
                                                                               REALIZAR PESQUISA
========================================================================================================================================================================================= */

function pesquisar() {

    const termo =
        normalizar(campoBusca.value.trim());


    if (!termo) {

        tituloResultados.textContent =
            "Ferramentas de IA";

        exibirResultados(ferramentas);

        return;

    }


    const encontrados =
        ferramentas.filter(ferramenta => {

            const nome =
                normalizar(ferramenta.nome);

            const categoria =
                normalizar(ferramenta.categoria);

            const descricao =
                normalizar(ferramenta.descricao);

            const palavras =
                ferramenta.palavras
                    .map(normalizar)
                    .join(" ");


            return (
                nome.includes(termo) ||
                categoria.includes(termo) ||
                descricao.includes(termo) ||
                palavras.includes(termo)
            );

        });


    tituloResultados.textContent =
        `Resultados para "${campoBusca.value}"`;


    exibirResultados(encontrados);


    document
        .getElementById("ferramentas")
        .scrollIntoView({
            behavior: "smooth"
        });

}

/* =========================================================================================================================================================================================
                                                                               BOTÃO DE BUSCA
========================================================================================================================================================================================= */

botaoBuscar.addEventListener(
    "click",
    pesquisar
);

/* =========================================================================================================================================================================================
                                                                               ENTER NO CAMPO DE PESQUISA
========================================================================================================================================================================================= */

campoBusca.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            pesquisar();

        }

    }
);

/* =========================================================================================================================================================================================
                                                                               FILTRO POR CATEGORIA
========================================================================================================================================================================================= */

document
    .querySelectorAll(".categoria")
    .forEach(botao => {

        botao.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".categoria")
                    .forEach(item => {

                        item.classList.remove("ativa");

                    });


                this.classList.add("ativa");


                const categoria =
                    this.dataset.categoria;


                const encontrados =
                    ferramentas.filter(
                        ferramenta =>
                            ferramenta.categoria === categoria
                    );


                tituloResultados.textContent =
                    `Ferramentas de ${categoria}`;


                exibirResultados(encontrados);


                document
                    .getElementById("ferramentas")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });



/* =========================================================================================================================================================================================
                                                                               CARREGAR FERRAMENTAS AO ABRIR
========================================================================================================================================================================================= */

exibirResultados(ferramentas);




