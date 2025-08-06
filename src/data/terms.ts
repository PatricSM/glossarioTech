export type Term = {
  id: string
  term: string
  category: string
  explanation: string
  example: string
}

export const termCategories = [
  'Geral',
  'Desenvolvimento Web',
  'Controle de Versão',
  'DevOps',
  'Dados',
  'Frontend',
  'Backend',
  'Adjetivo',
  'Ambiente',
  'Anti-padrão',
  'Arquitetura',
  'Conceito',
  'Convenção',
  'Disciplina',
  'Erro/Site',
  'Estratégia',
  'Fase',
  'Ferramenta',
  'Filosofia',
  'Gíria',
  'Metodologia',
  'Métricas',
  'Padrão',
  'Papel',
  'Plataforma',
  'Prática',
  'Princípio',
  'Princípios',
  'Problema',
  'Processo',
  'Protocolo',
  'Sigla',
  'Sigla/Metodologia',
  'Técnica',
  'Tecnologia',
  'Teorema',
  'Verbo',
  'Verbo/Conceito',
  'Verbo/Gíria',
  'Vulnerabilidade',
] as const

export const initialTerms: Term[] = [
  {
    id: '1',
    term: 'API',
    category: 'Geral',
    explanation:
      'Application Programming Interface. É um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. Uma API é um conjunto de definições e protocolos para construir e integrar software de aplicação.',
    example:
      'O frontend do nosso aplicativo consome dados de uma API REST para exibir as informações do usuário.',
  },
  {
    id: '2',
    term: 'CRUD',
    category: 'Backend',
    explanation:
      'Acrônimo para Create, Read, Update, and Delete. São as quatro operações básicas de armazenamento persistente. CRUD é um modelo para as operações que um sistema deve fornecer para gerenciar dados.',
    example:
      "Implementamos um endpoint CRUD completo para a entidade 'Produtos' em nossa API.",
  },
  {
    id: '3',
    term: 'Git',
    category: 'Controle de Versão',
    explanation:
      'Um sistema de controle de versão distribuído, gratuito e de código aberto, projetado para lidar com tudo, desde projetos pequenos a muito grandes, com velocidade e eficiência. O Git é usado para rastrear alterações no código-fonte durante o desenvolvimento de software.',
    example:
      "Sempre faça um 'git commit' com uma mensagem clara antes de enviar suas alterações para o repositório.",
  },
  {
    id: '4',
    term: 'Framework',
    category: 'Geral',
    explanation:
      'Uma estrutura de software que fornece uma base sobre a qual os desenvolvedores podem construir programas para uma plataforma específica. Um framework pode incluir bibliotecas de código, um compilador e outras ferramentas.',
    example:
      'React e Angular são dois dos frameworks JavaScript mais populares para o desenvolvimento de interfaces de usuário.',
  },
  {
    id: '5',
    term: 'JSON',
    category: 'Dados',
    explanation:
      'JavaScript Object Notation. É um formato leve de troca de dados, fácil para humanos lerem e escreverem e fácil para máquinas analisarem e gerarem. É baseado em um subconjunto da linguagem de programação JavaScript.',
    example: 'A API retornou os dados do usuário no formato JSON.',
  },
  {
    id: '6',
    term: 'SDK',
    category: 'Geral',
    explanation:
      'Software Development Kit. É um conjunto de ferramentas de desenvolvimento de software que permite a criação de aplicativos para uma determinada plataforma de software. SDKs podem incluir APIs, bibliotecas, documentação e exemplos de código.',
    example:
      'Para integrar o login com o Facebook, precisamos usar o SDK oficial do Facebook para JavaScript.',
  },
  {
    id: '7',
    term: 'DevOps',
    category: 'DevOps',
    explanation:
      'Uma cultura e prática de engenharia de software que visa unificar o desenvolvimento de software (Dev) e a operação de software (Ops). O principal objetivo do DevOps é encurtar o ciclo de vida de desenvolvimento de sistemas e fornecer entrega contínua com alta qualidade de software.',
    example:
      'Nossa equipe adotou práticas de DevOps para automatizar o processo de build e deploy da aplicação.',
  },
  {
    id: '8',
    term: 'CI/CD',
    category: 'DevOps',
    explanation:
      'Continuous Integration / Continuous Delivery (ou Continuous Deployment). É uma prática de DevOps que envolve a automação das fases de construção, teste e implantação de software. CI foca em mesclar as alterações de código de todos os desenvolvedores, enquanto CD automatiza a liberação do software para produção.',
    example:
      'Configuramos um pipeline de CI/CD que roda os testes e faz o deploy para o ambiente de staging a cada novo commit na branch principal.',
  },
  {
    id: '9',
    term: 'Frontend',
    category: 'Frontend',
    explanation:
      'A parte de um site ou aplicativo com a qual o usuário interage diretamente. É também conhecido como o "lado do cliente" da aplicação. Envolve tudo o que o usuário experimenta diretamente: cores e estilos de texto, imagens, gráficos e tabelas, botões, cores e um menu de navegação.',
    example:
      'O desenvolvedor frontend é responsável por construir a interface do usuário usando HTML, CSS e JavaScript.',
  },
  {
    id: '10',
    term: 'Backend',
    category: 'Backend',
    explanation:
      'A parte de um site ou aplicativo que o usuário não vê. É o "lado do servidor" e é responsável por armazenar e organizar dados, e garantir que tudo no lado do cliente funcione. O backend se comunica com o frontend, enviando e recebendo informações a serem exibidas como uma página da web.',
    example:
      'Nossa equipe de backend está desenvolvendo uma nova API para suportar as funcionalidades do aplicativo móvel.',
  },
  {
    id: '11',
    term: 'Banco de Dados',
    category: 'Dados',
    explanation:
      'Uma coleção organizada de informações - ou dados - estruturadas, geralmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS).',
    example:
      'Usamos um banco de dados SQL para armazenar os dados dos clientes de forma segura e estruturada.',
  },
  {
    id: '12',
    term: 'HTML',
    category: 'Frontend',
    explanation:
      'HyperText Markup Language. É a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web. Pode ser assistido por tecnologias como Cascading Style Sheets (CSS) e linguagens de script como JavaScript.',
    example: 'A estrutura de todas as páginas da web é construída com HTML.',
  },
  {
    id: '13',
    term: 'CSS',
    category: 'Frontend',
    explanation:
      'Cascading Style Sheets. É uma linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML. CSS é uma tecnologia fundamental da World Wide Web, juntamente com HTML e JavaScript.',
    example:
      'Aplicamos CSS para estilizar os botões e garantir que o site tenha uma aparência consistente.',
  },
  {
    id: '14',
    term: 'JavaScript',
    category: 'Desenvolvimento Web',
    explanation:
      'Uma linguagem de programação que permite implementar itens complexos em páginas da web. Toda vez que uma página da web faz mais do que apenas sentar e exibir informações estáticas para você olhar - exibindo atualizações de conteúdo oportunas, mapas interativos, gráficos 2D/3D animados, etc. - você pode apostar que o JavaScript provavelmente está envolvido.',
    example:
      'Usamos JavaScript para criar a interatividade do menu de navegação e validar os formulários.',
  },
  {
    id: '15',
    term: 'React',
    category: 'Frontend',
    explanation:
      'Uma biblioteca JavaScript de código aberto para construir interfaces de usuário ou componentes de UI. É mantido pelo Facebook e uma comunidade de desenvolvedores e empresas individuais. React pode ser usado como base no desenvolvimento de aplicativos de página única ou móveis.',
    example:
      'Nosso time escolheu React para desenvolver o novo painel de controle devido à sua eficiência e ecossistema robusto.',
  },
    {
        id: '16',
        term: "CRUD",
        category: "Sigla",
        explanation: "Create, Read, Update, Delete - As quatro operações básicas de persistência de dados em sistemas de informação.",
        example: "Em uma API REST:\n• POST /users (Create)\n• GET /users/123 (Read)\n• PUT /users/123 (Update)\n• DELETE /users/123 (Delete)"
    },
    {
        id: '17',
        term: "Cron",
        category: "Ferramenta",
        explanation: "Sistema de agendamento de tarefas baseado em tempo no Unix/Linux. Permite executar comandos automaticamente em horários específicos.",
        example: "Expressão cron: '0 2 * * *'\nSignifica: executar às 2h da manhã todos os dias\n\n0 = minuto (0)\n2 = hora (2h)\n* = qualquer dia do mês\n* = qualquer mês\n* = qualquer dia da semana"
    },
    {
        id: '18',
        term: "API",
        category: "Sigla",
        explanation: "Application Programming Interface - Interface que permite comunicação entre diferentes sistemas de software.",
        example: "Uma API REST para buscar usuários:\nGET https://api.exemplo.com/users\nResposta: [{\"id\": 1, \"nome\": \"João\"}]"
    },
    {
        id: '19',
        term: "Bug",
        category: "Gíria",
        explanation: "Erro ou defeito no código que causa comportamento inesperado no software.",
        example: "\"Encontrei um bug na função de login - ela não valida senhas vazias\"\n\nOrigem: O termo vem de um inseto real encontrado em um computador em 1947!"
    },
    {
        id: '20',
        term: "Debug",
        category: "Verbo",
        explanation: "Processo de encontrar e corrigir bugs no código. Debugar é uma das principais atividades de um programador.",
        example: "\"Vou debugar esse código usando breakpoints\"\n\nFerramentas: console.log(), debugger, DevTools"
    },
    {
        id: '21',
        term: "Deploy",
        category: "Verbo",
        explanation: "Processo de colocar uma aplicação em produção, tornando-a disponível para os usuários finais.",
        example: "\"Vamos fazer o deploy da nova versão na sexta-feira\"\n\nTipos: deploy manual, automático, blue-green, canary"
    },
    {
        id: '22',
        term: "Framework",
        category: "Conceito",
        explanation: "Estrutura de software que fornece uma base para desenvolvimento de aplicações, incluindo bibliotecas e convenções.",
        example: "Frameworks populares:\n• React (frontend JavaScript)\n• Django (backend Python)\n• Laravel (backend PHP)\n• Spring (backend Java)"
    },
    {
        id: '23',
        term: "Git",
        category: "Ferramenta",
        explanation: "Sistema de controle de versão distribuído, essencial para gerenciar mudanças no código e colaboração entre desenvolvedores.",
        example: "Comandos básicos:\ngit add . (adiciona arquivos)\ngit commit -m \"mensagem\" (salva mudanças)\ngit push (envia para repositório remoto)"
    },
    {
        id: '24',
        term: "JSON",
        category: "Sigla",
        explanation: "JavaScript Object Notation - Formato leve de intercâmbio de dados, fácil de ler e escrever.",
        example: "{\n  \"nome\": \"Maria\",\n  \"idade\": 30,\n  \"ativo\": true,\n  \"skills\": [\"JavaScript\", \"Python\"]\n}"
    },
    {
        id: '25',
        term: "Pull Request (PR)",
        category: "Conceito",
        explanation: "Solicitação para incorporar mudanças de código de uma branch para outra, geralmente com revisão de código.",
        example: "\"Criei um PR para adicionar a nova funcionalidade de autenticação\"\n\nFluxo: branch → commit → push → pull request → review → merge"
    },
    {
        id: '26',
        term: "Refatorar",
        category: "Verbo",
        explanation: "Processo de reestruturar código existente sem alterar seu comportamento externo, melhorando legibilidade e manutenibilidade.",
        example: "\"Preciso refatorar essa função - ela está muito complexa\"\n\nObjetivos: código mais limpo, melhor performance, facilitar manutenção"
    },
    {
        id: '27',
        term: "Stack",
        category: "Conceito",
        explanation: "Conjunto de tecnologias usadas para desenvolver uma aplicação (linguagens, frameworks, banco de dados, etc.).",
        example: "MEAN Stack:\n• MongoDB (banco)\n• Express.js (backend)\n• Angular (frontend)\n• Node.js (runtime)\n\nLAMP Stack: Linux, Apache, MySQL, PHP"
    },
    {
        id: '28',
        term: "Hardcode",
        category: "Verbo/Gíria",
        explanation: "Escrever valores fixos diretamente no código, ao invés de usar variáveis ou configurações. Geralmente considerado má prática.",
        example: "❌ Hardcoded:\nconst apiUrl = \"https://api.exemplo.com\"\n\n✅ Melhor:\nconst apiUrl = process.env.API_URL"
    },
    {
        id: '29',
        term: "Legacy",
        category: "Adjetivo",
        explanation: "Sistema ou código antigo que ainda está em uso, mas pode ser obsoleto ou difícil de manter.",
        example: "\"Esse sistema legacy foi feito em PHP 5 e precisa ser modernizado\"\n\nDesafios: documentação limitada, tecnologia antiga, difícil manutenção"
    },
    {
        id: '30',
        term: "Boilerplate",
        category: "Conceito",
        explanation: "Código padrão que é repetido em muitos lugares com pouca ou nenhuma alteração. Template inicial de projeto.",
        example: "\"Usei um boilerplate do React para começar o projeto mais rápido\"\n\nExemplos: create-react-app, templates de projeto"
    },
    {
        id: '31',
        term: "Endpoint",
        category: "Conceito",
        explanation: "Ponto de acesso específico em uma API onde o cliente pode fazer requisições para obter ou enviar dados.",
        example: "Endpoints de uma API de e-commerce:\n• GET /api/products (listar produtos)\n• POST /api/orders (criar pedido)\n• GET /api/users/profile (perfil do usuário)"
    },
    {
        id: '32',
        term: "Middleware",
        category: "Conceito",
        explanation: "Software que atua como intermediário entre diferentes aplicações ou camadas, processando requisições antes que cheguem ao destino final.",
        example: "Middleware de autenticação:\n• Verifica se usuário está logado\n• Valida token JWT\n• Se válido, passa para próxima função\n• Se inválido, retorna erro 401"
    },
    {
        id: '33',
        term: "Cache",
        category: "Conceito",
        explanation: "Armazenamento temporário de dados frequentemente acessados para melhorar performance e reduzir tempo de resposta.",
        example: "Tipos de cache:\n• Browser cache (HTML, CSS, JS)\n• Database cache (consultas frequentes)\n• CDN cache (imagens, arquivos estáticos)\n• Redis cache (sessões, dados temporários)"
    },
    {
        id: '34',
        term: "Rollback",
        category: "Verbo",
        explanation: "Reverter o sistema para uma versão anterior, geralmente após problemas em produção ou deploy com falhas.",
        example: "\"O deploy causou instabilidade, vamos fazer rollback para a versão anterior\"\n\nQuando usar: bugs críticos, performance degradada, falhas de sistema"
    },
    {
        id: '35',
        term: "Hotfix",
        category: "Conceito",
        explanation: "Correção rápida e urgente aplicada diretamente em produção para resolver problemas críticos.",
        example: "\"Descobrimos uma vulnerabilidade de segurança, precisa de hotfix imediato\"\n\nCaracterísticas: urgente, bypass do processo normal, foco em estabilidade"
    },
    {
        id: '36',
        term: "DevOps",
        category: "Sigla/Metodologia",
        explanation: "Development + Operations - Metodologia que integra desenvolvimento e operações para acelerar entrega de software.",
        example: "Práticas DevOps:\n• CI/CD (integração e entrega contínua)\n• Infrastructure as Code\n• Monitoramento automatizado\n• Cultura de colaboração"
    },
    {
        id: '37',
        term: "CI/CD",
        category: "Sigla",
        explanation: "Continuous Integration/Continuous Deployment - Práticas de automatizar integração e entrega de código.",
        example: "Pipeline CI/CD:\n1. Commit code → \n2. Automated tests → \n3. Build application → \n4. Deploy to staging → \n5. Deploy to production"
    },
    {
        id: '38',
        term: "Scrum",
        category: "Metodologia",
        explanation: "Framework ágil para gestão de projetos de software, com sprints, papéis definidos e cerimônias regulares.",
        example: "Papéis no Scrum:\n• Product Owner (define requisitos)\n• Scrum Master (facilita processo)\n• Dev Team (desenvolve produto)\n\nCerimônias: Sprint Planning, Daily, Review, Retrospective"
    },
    {
        id: '39',
        term: "Sprint",
        category: "Conceito",
        explanation: "Período curto de desenvolvimento (1-4 semanas) no Scrum onde a equipe trabalha em um conjunto específico de funcionalidades.",
        example: "\"Nossa sprint atual tem duração de 2 semanas e inclui 8 user stories\"\n\nEntregas: funcionalidades prontas, testadas e potencialmente entregáveis"
    },
    {
        id: '40',
        term: "Backlog",
        category: "Conceito",
        explanation: "Lista priorizada de funcionalidades, melhorias e correções que precisam ser desenvolvidas no produto.",
        example: "Product Backlog:\n• Implementar login social\n• Otimizar performance da busca\n• Corrigir bug do carrinho\n• Adicionar modo escuro"
    },
    {
        id: '41',
        term: "User Story",
        category: "Conceito",
        explanation: "Descrição curta de uma funcionalidade do ponto de vista do usuário, seguindo formato específico para capturar requisitos.",
        example: "Formato: \"Como [tipo de usuário], eu quero [funcionalidade] para [benefício]\"\n\nExemplo: \"Como cliente, eu quero salvar produtos em uma lista de desejos para comprá-los posteriormente\""
    },
    {
        id: '42',
        term: "MVC",
        category: "Padrão",
        explanation: "Model-View-Controller - Padrão arquitetural que separa aplicação em três componentes interconectados.",
        example: "• Model: dados e lógica de negócio\n• View: interface do usuário\n• Controller: mediador entre Model e View\n\nExemplo: Laravel (PHP), ASP.NET MVC, Ruby on Rails"
    },
    {
        id: '43',
        term: "ORM",
        category: "Sigla",
        explanation: "Object-Relational Mapping - Técnica que mapeia dados entre sistemas incompatíveis usando linguagens orientadas a objetos.",
        example: "Sequelize (Node.js):\nUser.findAll() // SELECT * FROM users\nUser.create({name: 'João'}) // INSERT INTO users...\n\nVantagens: abstração SQL, produtividade, segurança"
    },
    {
        id: '44',
        term: "Sandbox",
        category: "Conceito",
        explanation: "Ambiente isolado e seguro para testar código sem afetar o sistema principal ou dados de produção.",
        example: "\"Vou testar essa nova funcionalidade no sandbox antes de subir para produção\"\n\nTipos: desenvolvimento local, staging environment, containers Docker"
    },
    {
        id: '45',
        term: "Localhost",
        category: "Conceito",
        explanation: "Endereço IP 127.0.0.1 que se refere ao próprio computador, usado para desenvolvimento local.",
        example: "URLs comuns em desenvolvimento:\n• http://localhost:3000 (React)\n• http://localhost:8080 (Java)\n• http://localhost:5000 (Python Flask)"
    },
    {
        id: '46',
        term: "SSH",
        category: "Sigla",
        explanation: "Secure Shell - Protocolo de rede criptográfico para comunicação segura entre computadores, muito usado para acesso remoto a servidores.",
        example: "Conectar ao servidor:\nssh usuario@servidor.com\n\nChaves SSH:\nssh-keygen -t rsa (gerar chave)\nssh-copy-id user@host (copiar chave pública)"
    },
    {
        id: '47',
        term: "Docker",
        category: "Ferramenta",
        explanation: "Plataforma de containerização que empacota aplicações com suas dependências em containers portáteis e leves.",
        example: "Dockerfile básico:\nFROM node:16\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD [\"npm\", \"start\"]"
    },
    {
        id: '48',
        term: "Kubernetes (K8s)",
        category: "Ferramenta",
        explanation: "Plataforma de orquestração de containers que automatiza deployment, scaling e gestão de aplicações containerizadas.",
        example: "Conceitos principais:\n• Pods (menor unidade)\n• Services (exposição de rede)\n• Deployments (gestão de réplicas)\n• Namespaces (isolamento lógico)"
    },
    {
        id: '49',
        term: "Microserviços",
        category: "Arquitetura",
        explanation: "Arquitetura que estrutura aplicação como coleção de serviços pequenos, independentes e levemente acoplados.",
        example: "E-commerce com microserviços:\n• Serviço de Usuários\n• Serviço de Produtos\n• Serviço de Pagamentos\n• Serviço de Notificações\n\nCada um com sua própria base de dados"
    },
    {
        id: '50',
        term: "Monolito",
        category: "Arquitetura",
        explanation: "Aplicação desenvolvida como uma única unidade, onde todos os componentes estão interconectados e interdependentes.",
        example: "Características:\n• Um único deploy\n• Banco de dados compartilhado\n• Tecnologia unificada\n• Scaling horizontal de toda aplicação"
    },
    {
        id: '51',
        term: "TDD",
        category: "Sigla/Metodologia",
        explanation: "Test-Driven Development - Metodologia onde testes são escritos antes do código de produção.",
        example: "Ciclo TDD:\n1. Red: escrever teste que falha\n2. Green: escrever código mínimo para passar\n3. Refactor: melhorar código mantendo testes"
    },
    {
        id: '52',
        term: "Regex",
        category: "Conceito",
        explanation: "Regular Expression - Sequência de caracteres que define um padrão de busca, usado para validar e manipular strings.",
        example: "Validar email:\n/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/\n\nValidar telefone brasileiro:\n/^\\(\\d{2}\\)\\s\\d{4,5}-\\d{4}$/"
    },
    {
        id: '53',
        term: "SQL Injection",
        category: "Vulnerabilidade",
        explanation: "Técnica de ataque onde código SQL malicioso é inserido em campos de entrada para manipular banco de dados.",
        example: "❌ Vulnerável:\n\"SELECT * FROM users WHERE id = \" + userId\n\n✅ Seguro (prepared statement):\n\"SELECT * FROM users WHERE id = ?\"\ncom parâmetro sanitizado"
    },
    {
        id: '54',
        term: "Load Balancer",
        category: "Conceito",
        explanation: "Dispositivo que distribui requisições de rede entre múltiplos servidores para otimizar recursos e evitar sobrecarga.",
        example: "Algoritmos de balanceamento:\n• Round Robin (sequencial)\n• Least Connections (menos conexões)\n• IP Hash (baseado no IP do cliente)\n• Weighted (baseado em capacidade)"
    },
    {
        id: '55',
        term: "CDN",
        category: "Sigla",
        explanation: "Content Delivery Network - Rede de servidores distribuídos geograficamente que entregam conteúdo web com maior velocidade.",
        example: "Benefícios:\n• Reduz latência (servidor mais próximo)\n• Diminui carga no servidor principal\n• Melhora experiência do usuário\n\nProviders: Cloudflare, Amazon CloudFront, Google Cloud CDN"
    },
    {
        id: '56',
        term: "Webhook",
        category: "Conceito",
        explanation: "Método de comunicação onde uma aplicação envia dados automaticamente para outra quando um evento específico ocorre.",
        example: "GitHub webhook:\nQuando há push no repositório → GitHub chama URL configurada → Sistema de CI/CD inicia build automaticamente"
    },
    {
        id: '57',
        term: "JWT",
        category: "Sigla",
        explanation: "JSON Web Token - Padrão para criar tokens de acesso que permitem transmitir informações de forma segura entre partes.",
        example: "Estrutura JWT: header.payload.signature\n\nUso típico:\n1. Login → servidor gera JWT\n2. Cliente armazena token\n3. Requisições incluem token no header\n4. Servidor valida token"
    },
    {
        id: '58',
        term: "CORS",
        category: "Sigla",
        explanation: "Cross-Origin Resource Sharing - Mecanismo que permite ou restringe recursos web a serem acessados de outro domínio.",
        example: "Erro comum:\n\"Access blocked by CORS policy\"\n\nSolução no servidor:\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT"
    },
    {
        id: '59',
        term: "Callback",
        category: "Conceito",
        explanation: "Função passada como argumento para outra função, executada em momento específico (geralmente após operação assíncrona).",
        example: "setTimeout(() => {\n  console.log('Executado após 2 segundos');\n}, 2000);\n\nCallback hell: múltiplos callbacks aninhados (resolvido com Promises/async-await)"
    },
    {
        id: '60',
        term: "Promise",
        category: "Conceito",
        explanation: "Objeto que representa eventual conclusão ou falha de operação assíncrona, permitindo encadeamento de operações.",
        example: "fetch('/api/users')\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));\n\nEstados: pending, fulfilled, rejected"
    },
    {
        id: '61',
        term: "Async/Await",
        category: "Conceito",
        explanation: "Sintaxe que simplifica trabalho com Promises, tornando código assíncrono mais legível e similar ao síncrono.",
        example: "async function buscarUsuario(id) {\n  try {\n    const response = await fetch(`/api/users/${id}`);\n    const user = await response.json();\n    return user;\n  } catch (error) {\n    console.error('Erro:', error);\n  }\n}"
    },
    {
        id: '62',
        term: "NPM",
        category: "Sigla",
        explanation: "Node Package Manager - Gerenciador de pacotes para Node.js, permite instalar e gerenciar dependências de projetos JavaScript.",
        example: "Comandos essenciais:\nnpm install express (instalar pacote)\nnpm init (criar package.json)\nnpm run start (executar script)\nnpm audit (verificar vulnerabilidades)"
    },
    {
        id: '63',
        term: "Yarn",
        category: "Ferramenta",
        explanation: "Gerenciador de pacotes alternativo ao NPM, criado pelo Facebook, com foco em velocidade e determinismo.",
        example: "Equivalências:\n• npm install ↔ yarn\n• npm install [pacote] ↔ yarn add [pacote]\n• npm run [script] ↔ yarn [script]\n• npm start ↔ yarn start"
    },
    {
        id: '64',
        term: "Webpack",
        category: "Ferramenta",
        explanation: "Module bundler que empacota arquivos JavaScript e suas dependências em um ou mais bundles otimizados para produção.",
        example: "Funcionalidades:\n• Bundling (agrupa arquivos)\n• Code splitting (divide código)\n• Tree shaking (remove código não usado)\n• Hot Module Replacement (HMR)"
    },
    {
        id: '65',
        term: "Babel",
        category: "Ferramenta",
        explanation: "Transpilador JavaScript que converte código ES6+ para versões mais antigas, garantindo compatibilidade com browsers antigos.",
        example: "ES6+ → ES5:\n// Entrada (ES6)\nconst arrow = () => 'Hello';\n\n// Saída (ES5)\nvar arrow = function arrow() {\n  return 'Hello';\n};"
    },
    {
        id: '66',
        term: "ESLint",
        category: "Ferramenta",
        explanation: "Ferramenta de análise estática que identifica problemas em código JavaScript, ajudando a manter consistência e qualidade.",
        example: "Regras comuns:\n• no-unused-vars (variáveis não usadas)\n• semi (ponto e vírgula obrigatório)\n• indent (indentação consistente)\n• no-console (evitar console.log em produção)"
    },
    {
        id: '67',
        term: "Prettier",
        category: "Ferramenta",
        explanation: "Formatador de código que automaticamente organiza e padroniza a aparência do código segundo regras configuráveis.",
        example: "Antes:\nconst obj={name:'João',age:30};\n\nDepois:\nconst obj = {\n  name: 'João',\n  age: 30\n};"
    },
    {
        id: '68',
        term: "Lint",
        category: "Verbo/Conceito",
        explanation: "Processo de analisar código para encontrar erros de programação, bugs, construções suspeitas e problemas de estilo.",
        example: "\"Rode o linter antes de fazer commit\"\n\nFerramentas: ESLint (JS), PyLint (Python), RuboCop (Ruby), PHP_CodeSniffer (PHP)"
    },
    {
        id: '69',
        term: "Build",
        category: "Verbo/Conceito",
        explanation: "Processo de converter código fonte em uma versão executável, incluindo compilação, bundling e otimização.",
        example: "Processo de build típico:\n1. Instalar dependências\n2. Transpilar código (Babel)\n3. Bundle assets (Webpack)\n4. Minificar arquivos\n5. Gerar arquivos finais"
    },
    {
        id: '70',
        term: "Staging",
        category: "Ambiente",
        explanation: "Ambiente de teste que replica produção, usado para validação final antes do deploy para usuários reais.",
        example: "Ambientes típicos:\n• Development (dev local)\n• Staging (pré-produção)\n• Production (usuários finais)\n\nTestes em staging: funcionalidade, performance, integração"
    },
    {
        id: '71',
        term: "Production",
        category: "Ambiente",
        explanation: "Ambiente onde aplicação está rodando para usuários finais, requerendo máxima estabilidade e performance.",
        example: "Cuidados em produção:\n• Monitoramento 24/7\n• Backups automáticos\n• Logs detalhados\n• Rollback strategy\n• Zero downtime deploys"
    },
    {
        id: '72',
        term: "DRY",
        category: "Princípio",
        explanation: "Don't Repeat Yourself - Princípio que evita duplicação de código, promovendo reutilização e manutenibilidade.",
        example: "❌ Repetitivo:\nfunction calcularAreaQuadrado(lado) {\n  return lado * lado;\n}\nfunction calcularAreaRetangulo(l, a) {\n  return l * a;\n}\n\n✅ DRY:\nfunction calcularArea(forma, ...dimensoes) { ... }"
    },
    {
        id: '73',
        term: "SOLID",
        category: "Princípios",
        explanation: "Cinco princípios de design orientado a objetos: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion.",
        example: "• S: Uma classe deve ter apenas uma razão para mudar\n• O: Aberta para extensão, fechada para modificação\n• L: Objetos derivados devem ser substituíveis\n• I: Interfaces específicas são melhores que genéricas\n• D: Dependa de abstrações, não concretizações"
    },
    {
        id: '74',
        term: "Big O",
        category: "Conceito",
        explanation: "Notação matemática que descreve complexidade de algoritmos em termos de tempo ou espaço conforme entrada cresce.",
        example: "Complexidades comuns:\n• O(1) - Constante (acesso array por índice)\n• O(n) - Linear (busca em lista)\n• O(n²) - Quadrática (bubble sort)\n• O(log n) - Logarítmica (binary search)"
    },
    {
        id: '75',
        term: "Recursão",
        category: "Conceito",
        explanation: "Técnica onde função chama a si mesma para resolver problemas que podem ser divididos em subproblemas similares.",
        example: "Fibonacci recursivo:\nfunction fib(n) {\n  if (n <= 1) return n;\n  return fib(n-1) + fib(n-2);\n}\n\nCuidado: pode causar stack overflow sem caso base adequado"
    },
    {
        id: '76',
        term: "Stack Overflow",
        category: "Erro/Site",
        explanation: "Erro que ocorre quando stack de chamadas excede limite, ou famoso site de Q&A para programadores.",
        example: "Erro por recursão infinita:\nfunction infinita() {\n  return infinita(); // sem caso base\n}\n\nSite: stackoverflow.com - comunidade para tirar dúvidas de programação"
    },
    {
        id: '77',
        term: "GitHub",
        category: "Plataforma",
        explanation: "Plataforma de hospedagem de código que usa Git, oferecendo controle de versão, colaboração e ferramentas de desenvolvimento.",
        example: "Funcionalidades principais:\n• Repositórios (públicos/privados)\n• Issues (rastreamento de bugs)\n• Pull Requests (revisão de código)\n• Actions (CI/CD)\n• Pages (hospedagem estática)"
    },
    {
        id: '78',
        term: "Open Source",
        category: "Conceito",
        explanation: "Software com código fonte disponível publicamente, permitindo que qualquer pessoa veja, modifique e distribua.",
        example: "Projetos famosos:\n• Linux (sistema operacional)\n• React (biblioteca JavaScript)\n• Python (linguagem de programação)\n• MySQL (banco de dados)\n\nLicenças: MIT, GPL, Apache"
    },
    {
        id: '79',
        term: "Agile",
        category: "Metodologia",
        explanation: "Metodologia de desenvolvimento que valoriza indivíduos, software funcionando, colaboração e resposta a mudanças.",
        example: "Valores Agile:\n• Indivíduos > processos e ferramentas\n• Software funcionando > documentação\n• Colaboração > negociação de contratos\n• Responder mudanças > seguir plano"
    },
    {
        id: '80',
        term: "Kanban",
        category: "Metodologia",
        explanation: "Sistema visual de gestão de trabalho que usa quadros com colunas para representar diferentes estágios do fluxo de trabalho.",
        example: "Colunas típicas:\n• Backlog (a fazer)\n• In Progress (em andamento)\n• Review (em revisão)\n• Done (concluído)\n\nLimites WIP (Work In Progress) para controlar fluxo"
    },
    {
        id: '81',
        term: "Mockup",
        category: "Conceito",
        explanation: "Representação visual estática de como uma interface ou produto final deve aparecer, usado no design e planejamento.",
        example: "Tipos de fidelidade:\n• Low-fi: wireframes básicos\n• Mid-fi: mais detalhes, sem cores finais\n• High-fi: design final com cores, tipografia\n\nFerramentas: Figma, Sketch, Adobe XD"
    },
    {
        id: '82',
        term: "Wireframe",
        category: "Conceito",
        explanation: "Esquema visual básico que mostra estrutura e layout de uma página ou aplicação, focando em funcionalidade sobre design.",
        example: "Elementos típicos:\n• Caixas para conteúdo\n• Placeholders para imagens\n• Navegação básica\n• Hierarquia de informações\n\nFoco: layout e fluxo, não cores ou tipografia"
    },
    {
        id: '83',
        term: "MVP",
        category: "Sigla",
        explanation: "Minimum Viable Product - Versão de produto com funcionalidades mínimas suficientes para validar hipóteses com usuários reais.",
        example: "Características do MVP:\n• Funcionalidades core essenciais\n• Rápido de desenvolver\n• Permite feedback do usuário\n• Base para iterações futuras\n\nObjetivo: aprender com menor esforço possível"
    },
    {
        id: '84',
        term: "Tech Debt",
        category: "Conceito",
        explanation: "Débito técnico - Custo de manutenção adicional causado por escolher soluções rápidas ao invés de melhores abordagens.",
        example: "Causas comuns:\n• Código hardcoded\n• Falta de testes\n• Arquitetura inadequada\n• Bibliotecas desatualizadas\n\nConsequências: bugs frequentes, desenvolvimento mais lento"
    },
    {
        id: '85',
        term: "Scalability",
        category: "Conceito",
        explanation: "Capacidade de um sistema lidar com aumento de carga de trabalho adicionando recursos ao sistema.",
        example: "Tipos de scaling:\n• Vertical (scale up): mais CPU/RAM\n• Horizontal (scale out): mais servidores\n\nEstrategias: load balancing, caching, database sharding"
    },
    {
        id: '86',
        term: "Database Schema",
        category: "Conceito",
        explanation: "Estrutura lógica que define organização de dados em banco de dados, incluindo tabelas, campos e relacionamentos.",
        example: "Schema de blog:\n• Users (id, name, email)\n• Posts (id, title, content, user_id)\n• Comments (id, content, post_id, user_id)\n\nRelacionamentos: 1:N (user-posts), 1:N (post-comments)"
    },
    {
        id: '87',
        term: "Migration",
        category: "Conceito",
        explanation: "Script que modifica estrutura de banco de dados de forma controlada e versionada, permitindo evolução do schema.",
        example: "Exemplo de migration:\nCREATE TABLE users (\n  id SERIAL PRIMARY KEY,\n  email VARCHAR(255) UNIQUE,\n  created_at TIMESTAMP DEFAULT NOW()\n);\n\nVantagens: versionamento, rollback, colaboração em equipe"
    },
    {
        id: '88',
        term: "Seed",
        category: "Conceito",
        explanation: "Dados iniciais inseridos em banco de dados para desenvolvimento ou teste, populando tabelas com informações básicas.",
        example: "Seed de usuários:\nINSERT INTO users (name, email) VALUES\n('Admin', 'admin@exemplo.com'),\n('Teste', 'teste@exemplo.com');\n\nUso: desenvolvimento local, demos, testes automatizados"
    },
    {
        id: '89',
        term: "Repository Pattern",
        category: "Padrão",
        explanation: "Padrão que encapsula lógica de acesso a dados, fornecendo interface mais orientada a objetos para acessar camada de dados.",
        example: "interface UserRepository {\n  findById(id): User;\n  save(user): void;\n  delete(id): void;\n}\n\nBenefícios: testabilidade, abstração da fonte de dados, baixo acoplamento"
    },
    {
        id: '90',
        term: "Singleton",
        category: "Padrão",
        explanation: "Padrão de design que garante que classe tenha apenas uma instância e fornece ponto global de acesso a ela.",
        example: "class Database {\n  static instance = null;\n  \n  static getInstance() {\n    if (!this.instance) {\n      this.instance = new Database();\n    }\n    return this.instance;\n  }\n}\n\nUso: conexões de BD, loggers, cache"
    },
    {
        id: '91',
        term: "Factory Pattern",
        category: "Padrão",
        explanation: "Padrão que cria objetos sem especificar classe exata, usando método factory para decidir qual classe instanciar.",
        example: "function createUser(type) {\n  switch(type) {\n    case 'admin': return new AdminUser();\n    case 'guest': return new GuestUser();\n    default: return new RegularUser();\n  }\n}\n\nBenefícios: flexibilidade, baixo acoplamento"
    },
    {
        id: '92',
        term: "Observer Pattern",
        category: "Padrão",
        explanation: "Padrão onde objeto mantém lista de dependentes (observers) e os notifica automaticamente sobre mudanças de estado.",
        example: "Exemplo: sistema de notificações\n• Subject: postagem no blog\n• Observers: subscribers por email\n• Notificação: envio automático quando nova postagem\n\nUso: eventos, MVC, reactive programming"
    },
    {
        id: '93',
        term: "Design Pattern",
        category: "Conceito",
        explanation: "Soluções reutilizáveis para problemas comuns em design de software, fornecendo templates para resolver problemas recorrentes.",
        example: "Categorias principais:\n• Criacionais: Singleton, Factory, Builder\n• Estruturais: Adapter, Decorator, Facade\n• Comportamentais: Observer, Strategy, Command"
    },
    {
        id: '94',
        term: "Refactoring",
        category: "Conceito",
        explanation: "Processo de reestruturar código existente sem alterar comportamento externo, melhorando design interno e legibilidade.",
        example: "Técnicas comuns:\n• Extract Method (extrair método)\n• Rename Variable (renomear variável)\n• Move Method (mover método)\n• Replace Magic Number (substituir número mágico)"
    },
    {
        id: '95',
        term: "Code Review",
        category: "Processo",
        explanation: "Exame sistemático de código por outros desenvolvedores para encontrar erros, melhorar qualidade e compartilhar conhecimento.",
        example: "O que revisar:\n• Lógica e correção\n• Padrões de código\n• Performance\n• Segurança\n• Testes\n• Documentação\n\nFerramentas: GitHub PR, GitLab MR, Bitbucket"
    },
    {
        id: '96',
        term: "Unit Test",
        category: "Conceito",
        explanation: "Teste que verifica comportamento de pequenas unidades de código (funções, métodos) de forma isolada.",
        example: "function sum(a, b) {\n  return a + b;\n}\n\n// Teste\ntest('soma dois números', () => {\n  expect(sum(2, 3)).toBe(5);\n});\n\nFrameworks: Jest, Mocha, JUnit, PyTest"
    },
    {
        id: '97',
        term: "Integration Test",
        category: "Conceito",
        explanation: "Teste que verifica interação entre diferentes módulos ou serviços, validando funcionamento conjunto de componentes.",
        example: "Cenário: API + Database\n• Fazer POST /users\n• Verificar se usuário foi salvo no BD\n• Fazer GET /users/id\n• Validar dados retornados\n\nTesta: integração real entre camadas"
    },
    {
        id: '98',
        term: "E2E Test",
        category: "Sigla",
        explanation: "End-to-End Test - Teste que simula jornada completa do usuário, validando aplicação inteira do início ao fim.",
        example: "Cenário de e-commerce:\n1. Acessar site\n2. Buscar produto\n3. Adicionar ao carrinho\n4. Fazer checkout\n5. Confirmar pagamento\n\nFerramentas: Cypress, Selenium, Playwright"
    },
    {
        id: '99',
        term: "Mock",
        category: "Conceito",
        explanation: "Objeto simulado que imita comportamento de objetos reais de forma controlada, usado em testes para isolar código.",
        example: "// Mock de API\nconst mockApi = {\n  getUser: jest.fn().mockResolvedValue({\n    id: 1, name: 'João'\n  })\n};\n\nBenefícios: testes mais rápidos, controle de cenários, isolamento"
    },
    {
        id: '100',
        term: "Stub",
        category: "Conceito",
        explanation: "Implementação mínima que substitui componente real durante testes, fornecendo respostas pré-definidas.",
        example: "// Stub de serviço de email\nclass EmailStub {\n  send(email) {\n    console.log('Email enviado (simulado)');\n    return true;\n  }\n}\n\nDiferença do Mock: stub é mais simples, mock verifica interações"
    },
    {
        id: '101',
        term: "Polyfill",
        category: "Conceito",
        explanation: "Código que implementa funcionalidade que desenvolvedor espera que browser forneça nativamente, garantindo compatibilidade.",
        example: "Polyfill para Array.includes (IE):\nif (!Array.prototype.includes) {\n  Array.prototype.includes = function(search) {\n    return this.indexOf(search) !== -1;\n  };\n}"
    },
    {
        id: '102',
        term: "Shim",
        category: "Conceito",
        explanation: "Biblioteca que intercepta chamadas de API e as redireciona, fornecendo camada de compatibilidade entre diferentes versões.",
        example: "Shim para console em browsers antigos:\nif (!window.console) {\n  window.console = {\n    log: function() {},\n    error: function() {}\n  };\n}"
    },
    {
        id: '103',
        term: "Transpiler",
        category: "Ferramenta",
        explanation: "Compilador que traduz código de uma linguagem de alto nível para outra linguagem de alto nível.",
        example: "Exemplos:\n• Babel: ES6+ → ES5\n• TypeScript: TS → JS\n• Sass: SCSS → CSS\n• CoffeeScript: Coffee → JS"
    },
    {
        id: '104',
        term: "Bundler",
        category: "Ferramenta",
        explanation: "Ferramenta que combina múltiplos arquivos de código em um ou poucos arquivos otimizados para produção.",
        example: "Bundlers populares:\n• Webpack (mais configurável)\n• Parcel (zero config)\n• Rollup (otimizado para libraries)\n• Vite (desenvolvimento rápido)\n\nBenefícios: menos requests HTTP, otimização"
    },
    {
        id: '105',
        term: "Tree Shaking",
        category: "Conceito",
        explanation: "Técnica de otimização que remove código não utilizado do bundle final, reduzindo tamanho do arquivo.",
        example: "// Importação específica (permite tree shaking)\nimport { debounce } from 'lodash';\n\n// ❌ Importação completa (não permite)\nimport * as _ from 'lodash';\n\nRequisito: ES6 modules e bundler compatível"
    },
    {
        id: '106',
        term: "Code Splitting",
        category: "Conceito",
        explanation: "Técnica que divide código em múltiplos bundles menores, carregados sob demanda para melhorar performance inicial.",
        example: "React.lazy para code splitting:\nconst LazyComponent = React.lazy(() => \n  import('./components/ExpensiveComponent')\n);\n\n<Suspense fallback={<div>Loading...</div>}>\n  <LazyComponent />\n</Suspense>"
    },
    {
        id: '107',
        term: "Lazy Loading",
        category: "Conceito",
        explanation: "Técnica que adia carregamento de recursos não críticos até momento em que são realmente necessários.",
        example: "Imagens lazy:\n<img src=\"placeholder.jpg\" \n     data-src=\"real-image.jpg\" \n     loading=\"lazy\">\n\nBenefícios: carregamento inicial mais rápido, economia de banda"
    },
    {
        id: '108',
        term: "Progressive Web App (PWA)",
        category: "Conceito",
        explanation: "Aplicação web que usa tecnologias modernas para fornecer experiência similar a apps nativos.",
        example: "Características PWA:\n• Service Workers (offline)\n• Web App Manifest (instalável)\n• HTTPS obrigatório\n• Responsive design\n• Push notifications\n\nExemplos: Twitter Lite, Pinterest"
    },
    {
        id: '109',
        term: "Service Worker",
        category: "Conceito",
        explanation: "Script que roda em background, separado da página web, habilitando funcionalidades como cache offline e push notifications.",
        example: "// Registrar service worker\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('/sw.js')\n    .then(reg => console.log('SW registrado'))\n    .catch(err => console.log('Erro SW'));\n}"
    },
    {
        id: '110',
        term: "WebSocket",
        category: "Protocolo",
        explanation: "Protocolo de comunicação que fornece canais full-duplex sobre conexão TCP, permitindo comunicação em tempo real.",
        example: "// Cliente WebSocket\nconst ws = new WebSocket('ws://localhost:8080');\nws.onmessage = (event) => {\n  console.log('Mensagem:', event.data);\n};\nws.send('Hello Server!');\n\nUso: chat, jogos, trading, colaboração"
    },
    {
        id: '111',
        term: "REST",
        category: "Arquitetura",
        explanation: "Representational State Transfer - Estilo arquitetural para sistemas distribuídos, especialmente web services.",
        example: "Princípios REST:\n• Stateless (sem estado)\n• Cacheable (cacheável)\n• Client-server (separação)\n• Uniform interface (interface uniforme)\n\nVerbos HTTP: GET, POST, PUT, DELETE"
    },
    {
        id: '112',
        term: "GraphQL",
        category: "Tecnologia",
        explanation: "Linguagem de consulta e runtime para APIs que permite clientes solicitar exatamente os dados que precisam.",
        example: "Query GraphQL:\nquery {\n  user(id: \"1\") {\n    name\n    email\n    posts {\n      title\n    }\n  }\n}\n\nVantagens: overfetching reduzido, strongly typed, single endpoint"
    },
    {
        id: '113',
        term: "gRPC",
        category: "Tecnologia",
        explanation: "Framework RPC de alta performance que usa HTTP/2 e Protocol Buffers, ideal para comunicação entre microserviços.",
        example: "Características:\n• Binary protocol (mais rápido)\n• Bidirectional streaming\n• Language agnostic\n• Auto-generated code\n\nUso: microserviços, sistemas distribuídos de alta performance"
    },
    {
        id: '114',
        term: "Container",
        category: "Conceito",
        explanation: "Unidade de software que empacota código e dependências, garantindo execução consistente em diferentes ambientes.",
        example: "Docker container:\n• Imagem: template read-only\n• Container: instância executável da imagem\n• Volume: persistência de dados\n• Network: comunicação entre containers"
    },
    {
        id: '115',
        term: "Serverless",
        category: "Arquitetura",
        explanation: "Modelo de computação onde provedor cloud gerencia automaticamente infraestrutura, cobrando apenas por execução.",
        example: "AWS Lambda function:\nexports.handler = async (event) => {\n  const name = event.name || 'World';\n  return {\n    statusCode: 200,\n    body: `Hello ${name}!`\n  };\n};\n\nBenefícios: auto-scaling, pay-per-use"
    },
    {
        id: '116',
        term: "Infrastructure as Code (IaC)",
        category: "Conceito",
        explanation: "Prática de gerenciar e provisionar infraestrutura através de arquivos de código, ao invés de processos manuais.",
        example: "Terraform example:\nresource \"aws_instance\" \"web\" {\n  ami           = \"ami-0c55b159cbfafe1d0\"\n  instance_type = \"t2.micro\"\n  \n  tags = {\n    Name = \"HelloWorld\"\n  }\n}\n\nFerramentas: Terraform, CloudFormation, Ansible"
    },
    {
        id: '117',
        term: "Blue-Green Deployment",
        category: "Estratégia",
        explanation: "Estratégia de deploy que mantém duas versões idênticas do ambiente produção, alternando entre elas para deploys sem downtime.",
        example: "Processo:\n1. Blue (produção atual) serve usuários\n2. Deploy nova versão no Green (inativo)\n3. Teste Green environment\n4. Switch traffic: Blue → Green\n5. Blue fica standby para rollback rápido"
    },
    {
        id: '118',
        term: "Canary Deployment",
        category: "Estratégia",
        explanation: "Estratégia que libera nova versão gradualmente para pequeno subconjunto de usuários antes de rollout completo.",
        example: "Fases Canary:\n1. Deploy para 5% dos usuários\n2. Monitor métricas e erros\n3. Se estável, aumentar para 25%\n4. Continuar até 100%\n5. Se problemas, rollback imediato"
    },
    {
        id: '119',
        term: "Feature Flag",
        category: "Conceito",
        explanation: "Técnica que permite ativar/desativar funcionalidades em tempo de execução sem deploy, controlando quem vê novas features.",
        example: "if (featureFlags.newCheckout) {\n  return <NewCheckoutComponent />;\n} else {\n  return <OldCheckoutComponent />;\n}\n\nBenefícios: rollout gradual, A/B testing, rollback rápido"
    },
    {
        id: '120',
        term: "A/B Testing",
        category: "Metodologia",
        explanation: "Método de comparar duas versões de webpage ou app para determinar qual performa melhor em métricas específicas.",
        example: "Teste de botão:\n• Versão A: botão azul \"Comprar Agora\"\n• Versão B: botão verde \"Finalizar Pedido\"\n• Métrica: taxa de conversão\n• 50% usuários veem cada versão\n• Analisa qual converte mais"
    },
    {
        id: '121',
        term: "Load Testing",
        category: "Conceito",
        explanation: "Tipo de teste que simula carga de trabalho esperada para verificar como sistema se comporta sob condições normais e de pico.",
        example: "Cenários de teste:\n• 100 usuários simultâneos (carga normal)\n• 1000 usuários simultâneos (pico)\n• Crescimento gradual de carga\n\nFerramentas: JMeter, Artillery, k6, LoadRunner"
    },
    {
        id: '122',
        term: "Stress Testing",
        category: "Conceito",
        explanation: "Teste que sobrecarrega sistema além de limites normais para identificar ponto de falha e comportamento sob extrema pressão.",
        example: "Objetivos:\n• Encontrar breaking point\n• Verificar recovery após falha\n• Identificar memory leaks\n• Validar error handling\n\nDiferença: Load test = condições normais, Stress = extremas"
    },
    {
        id: '123',
        term: "Monitoring",
        category: "Processo",
        explanation: "Observação contínua de sistemas em produção para detectar problemas, medir performance e garantir disponibilidade.",
        example: "Métricas importantes:\n• CPU, RAM, Disk usage\n• Response time, throughput\n• Error rate, uptime\n• Business metrics (conversões)\n\nFerramentas: Prometheus, DataDog, New Relic"
    },
    {
        id: '124',
        term: "Logging",
        category: "Processo",
        explanation: "Registro de eventos e informações durante execução de aplicação, essencial para debugging e auditoria.",
        example: "Níveis de log:\n• ERROR: erros que quebram funcionalidade\n• WARN: situações suspeitas\n• INFO: informações gerais\n• DEBUG: detalhes para desenvolvimento\n\nFormato: timestamp + level + message"
    },
    {
        id: '125',
        term: "Metrics",
        category: "Conceito",
        explanation: "Medidas quantitativas que avaliam performance, saúde e uso de sistemas, essenciais para tomada de decisões.",
        example: "Golden Signals:\n• Latency (tempo de resposta)\n• Traffic (requisições por segundo)\n• Errors (taxa de erro)\n• Saturation (utilização de recursos)\n\nBusiness metrics: conversão, retenção, revenue"
    },
    {
        id: '126',
        term: "SLA",
        category: "Sigla",
        explanation: "Service Level Agreement - Acordo que define nível de serviço esperado, incluindo uptime, performance e suporte.",
        example: "SLA típico:\n• 99.9% uptime (8.76 horas downtime/ano)\n• Response time < 200ms\n• Suporte 24/7\n• Recovery time < 1 hora\n\nPenalidades por não cumprimento"
    },
    {
        id: '127',
        term: "SLO",
        category: "Sigla",
        explanation: "Service Level Objective - Objetivo específico e mensurável de performance que serviço deve alcançar.",
        example: "SLOs de uma API:\n• 99.95% das requisições com sucesso\n• 95% das requisições < 100ms\n• 99% das requisições < 500ms\n• Zero data loss\n\nMais específico que SLA"
    },
    {
        id: '128',
        term: "SLI",
        category: "Sigla",
        explanation: "Service Level Indicator - Métrica quantitativa que mede aspecto específico do nível de serviço fornecido.",
        example: "SLIs comuns:\n• Success rate: requests bem-sucedidas / total requests\n• Latency: tempo de resposta das requisições\n• Throughput: requisições processadas por segundo\n• Availability: tempo online / tempo total"
    },
    {
        id: '129',
        term: "Idempotente",
        category: "Conceito",
        explanation: "Operação que pode ser aplicada múltiplas vezes sem alterar resultado além da primeira aplicação.",
        example: "HTTP Methods:\n• GET: idempotente (ler não altera dados)\n• PUT: idempotente (atualizar para mesmo valor)\n• POST: NÃO idempotente (cada call cria novo recurso)\n• DELETE: idempotente (deletar já deletado)"
    },
    {
        id: '130',
        term: "Race Condition",
        category: "Problema",
        explanation: "Situação onde comportamento de software depende de timing relativo de eventos, podendo causar bugs intermitentes.",
        example: "Problema clássico:\n// Thread 1: counter = counter + 1\n// Thread 2: counter = counter + 1\n// Resultado esperado: +2\n// Resultado real: pode ser +1\n\nSolução: locks, semáforos, atomic operations"
    },
    {
        id: '131',
        term: "Deadlock",
        category: "Problema",
        explanation: "Situação onde dois ou mais processos ficam bloqueados indefinidamente, cada um esperando recurso que outro possui.",
        example: "Cenário:\n• Processo A tem Resource 1, quer Resource 2\n• Processo B tem Resource 2, quer Resource 1\n• Ambos ficam esperando eternamente\n\nPrevenção: ordenação de locks, timeouts"
    },
    {
        id: '132',
        term: "Memory Leak",
        category: "Problema",
        explanation: "Bug onde programa falha em liberar memória que não está mais sendo usada, causando consumo crescente de RAM.",
        example: "JavaScript memory leak:\nsetInterval(() => {\n  const div = document.createElement('div');\n  document.body.appendChild(div);\n  // div nunca é removido!\n}, 1000);\n\nDetecção: DevTools Memory tab"
    },
    {
        id: '133',
        term: "Garbage Collection",
        category: "Conceito",
        explanation: "Processo automático de gerenciamento de memória que libera memória ocupada por objetos que não são mais referenciados.",
        example: "Linguagens com GC:\n• JavaScript (V8 engine)\n• Python (reference counting)\n• Java (generational GC)\n• C# (.NET GC)\n\nLinguagens manuais: C, C++, Rust (ownership)"
    },
    {
        id: '134',
        term: "Callback Hell",
        category: "Anti-padrão",
        explanation: "Situação onde múltiplos callbacks aninhados tornam código difícil de ler e manter, criando estrutura piramidal.",
        example: "❌ Callback Hell:\ngetUser(id, (user) => {\n  getPosts(user.id, (posts) => {\n    getComments(posts[0].id, (comments) => {\n      // código muito aninhado...\n    });\n  });\n});\n\n✅ Solução: Promises/async-await"
    },
    {
        id: '135',
        term: "YAGNI",
        category: "Princípio",
        explanation: "You Ain't Gonna Need It - Princípio que aconselha não implementar funcionalidades até que sejam realmente necessárias.",
        example: "❌ Violação YAGNI:\n\"Vou criar sistema completo de permissões, talvez precisemos no futuro\"\n\n✅ Seguindo YAGNI:\n\"Vou implementar apenas login básico, que é o que precisamos agora\""
    },
    {
        id: '136',
        term: "KISS",
        category: "Princípio",
        explanation: "Keep It Simple, Stupid - Princípio que valoriza simplicidade no design, evitando complexidade desnecessária.",
        example: "❌ Complexo:\nclass UberComplexUserManager extends AbstractUserEntityManagerFactoryBean\n\n✅ Simples:\nclass UserService {\n  getUser(id) { ... }\n  saveUser(user) { ... }\n}"
    },
    {
        id: '137',
        term: "Technical Debt",
        category: "Conceito",
        explanation: "Custo implícito de trabalho adicional causado por escolher solução fácil/limitada ao invés de melhor abordagem.",
        example: "Cenário:\n• Pressão para entregar rápido\n• Implementa solução \"gambiarra\"\n• Funciona, mas cria dívida\n• Futuramente: mais tempo para mudanças, mais bugs\n\nGestão: priorizar, medir, pagar gradualmente"
    },
    {
        id: '138',
        term: "Code Smell",
        category: "Conceito",
        explanation: "Indicadores de problemas potenciais no código que sugerem necessidade de refatoração, sem serem bugs tecnicamente.",
        example: "Code smells comuns:\n• Métodos muito longos\n• Classes com muitas responsabilidades\n• Código duplicado\n• Nomes de variáveis ruins\n• Comentários excessivos"
    },
    {
        id: '139',
        term: "Rubber Duck Debugging",
        category: "Técnica",
        explanation: "Método de debug onde programador explica código linha por linha para objeto inanimado (pato de borracha), ajudando a encontrar problemas.",
        example: "Processo:\n1. \"Oi patinho, tenho um bug aqui\"\n2. Explica código passo a passo\n3. \"Esta linha deveria fazer X, mas...\"\n4. Ao explicar, geralmente encontra o problema\n\nFunciona porque força verbalização lógica"
    },
    {
        id: '140',
        term: "Pair Programming",
        category: "Prática",
        explanation: "Técnica ágil onde dois programadores trabalham juntos no mesmo código, um escrevendo (driver) e outro revisando (navigator).",
        example: "Papéis:\n• Driver: escreve código, foca na implementação\n• Navigator: revisa, pensa na estratégia geral\n• Trocar papéis regularmente\n\nBenefícios: menos bugs, conhecimento compartilhado, mentoria"
    },
    {
        id: '141',
        term: "Mob Programming",
        category: "Prática",
        explanation: "Extensão do pair programming onde toda equipe trabalha na mesma coisa, no mesmo computador, ao mesmo tempo.",
        example: "Estrutura:\n• 1 Driver (digitando)\n• Vários Navigators (toda equipe)\n• Rotate driver a cada 15-30 min\n• Decisões tomadas em grupo\n\nQuando usar: problemas complexos, onboarding, knowledge sharing"
    },
    {
        id: '142',
        term: "Tech Stack",
        category: "Conceito",
        explanation: "Combinação de tecnologias (linguagens, frameworks, databases, tools) usadas para construir aplicação completa.",
        example: "MERN Stack:\n• MongoDB (database)\n• Express.js (backend framework)\n• React (frontend library)\n• Node.js (runtime)\n\nJAMstack: JavaScript, APIs, Markup (static site generators)"
    },
    {
        id: '143',
        term: "Full Stack",
        category: "Conceito",
        explanation: "Desenvolvedor que trabalha tanto no frontend (interface) quanto no backend (servidor) de aplicações web.",
        example: "Habilidades Full Stack:\n• Frontend: HTML, CSS, JavaScript, React\n• Backend: Node.js, Python, APIs\n• Database: SQL, NoSQL\n• DevOps: Deploy, monitoring\n• Soft skills: comunicação, problem solving"
    },
    {
        id: '144',
        term: "Frontend",
        category: "Conceito",
        explanation: "Parte da aplicação que usuários interagem diretamente, incluindo interface visual e experiência do usuário.",
        example: "Tecnologias Frontend:\n• HTML (estrutura)\n• CSS (estilo)\n• JavaScript (interatividade)\n• Frameworks: React, Vue, Angular\n• Tools: Webpack, Sass, TypeScript"
    },
    {
        id: '145',
        term: "Backend",
        category: "Conceito",
        explanation: "Parte server-side da aplicação que gerencia dados, lógica de negócio, autenticação e comunicação com databases.",
        example: "Responsabilidades Backend:\n• APIs e endpoints\n• Database operations\n• Authentication/authorization\n• Business logic\n• Security\n• Performance optimization"
    },
    {
        id: '146',
        term: "Database",
        category: "Conceito",
        explanation: "Sistema organizado para armazenar, gerenciar e recuperar dados de forma eficiente e estruturada.",
        example: "Tipos principais:\n• SQL: MySQL, PostgreSQL, SQLite\n• NoSQL: MongoDB, CouchDB, DynamoDB\n• In-memory: Redis, Memcached\n• Graph: Neo4j, Amazon Neptune"
    },
    {
        id: '147',
        term: "NoSQL",
        category: "Conceito",
        explanation: "Not Only SQL - Banco de dados que não usa modelo relacional tradicional, oferecendo maior flexibilidade para dados não estruturados.",
        example: "Tipos NoSQL:\n• Document: MongoDB (JSON-like docs)\n• Key-Value: Redis (chave-valor simples)\n• Column: Cassandra (colunas)\n• Graph: Neo4j (relacionamentos complexos)"
    },
    {
        id: '148',
        term: "Sharding",
        category: "Conceito",
        explanation: "Técnica de particionamento horizontal de banco de dados onde dados são distribuídos entre múltiplas máquinas.",
        example: "Estratégias de sharding:\n• Por ID: users 1-1000 no shard1, 1001-2000 no shard2\n• Por região: users BR no shard1, US no shard2\n• Por hash: hash(user_id) % num_shards\n\nBenefícios: escalabilidade, performance"
    },
    {
        id: '149',
        term: "Replication",
        category: "Conceito",
        explanation: "Processo de manter cópias idênticas de dados em múltiplos servidores para garantir disponibilidade e performance.",
        example: "Tipos:\n• Master-Slave: um escreve, vários leem\n• Master-Master: todos podem escrever\n• Async: replicação posterior\n• Sync: replicação imediata\n\nBenefícios: alta disponibilidade, backup, distribuição geográfica"
    },
    {
        id: '150',
        term: "ACID",
        category: "Sigla",
        explanation: "Atomicity, Consistency, Isolation, Durability - Propriedades que garantem confiabilidade de transações em bancos de dados.",
        example: "• Atomicity: transação completa ou nada\n• Consistency: dados sempre em estado válido\n• Isolation: transações não interferem entre si\n• Durability: dados persistem após commit\n\nEssencial para bancos relacionais"
    },
    {
        id: '151',
        term: "CAP Theorem",
        category: "Teorema",
        explanation: "Teorema que afirma que sistema distribuído não pode garantir simultaneamente Consistency, Availability e Partition tolerance.",
        example: "Escolhas:\n• CP: MongoDB, HBase (consistency + partition)\n• AP: CouchDB, Cassandra (availability + partition)\n• CA: MySQL tradicional (consistency + availability)\n\nNa prática: sempre há partitions, escolha entre C ou A"
    },
    {
        id: '152',
        term: "CRUD Operations",
        category: "Conceito",
        explanation: "Quatro operações básicas de persistência: Create (criar), Read (ler), Update (atualizar), Delete (deletar).",
        example: "SQL equivalentes:\n• CREATE: INSERT INTO\n• READ: SELECT FROM\n• UPDATE: UPDATE SET\n• DELETE: DELETE FROM\n\nHTTP equivalentes: POST, GET, PUT, DELETE"
    },
    {
        id: '153',
        term: "Normalization",
        category: "Conceito",
        explanation: "Processo de organizar dados em banco relacional para reduzir redundância e melhorar integridade dos dados.",
        example: "Formas normais:\n• 1NF: sem grupos repetidos\n• 2NF: sem dependências parciais\n• 3NF: sem dependências transitivas\n\nObjetivo: eliminar redundância, evitar anomalias de atualização"
    },
    {
        id: '154',
        term: "Denormalization",
        category: "Conceito",
        explanation: "Processo intencional de adicionar redundância a banco normalizado para melhorar performance de consultas.",
        example: "Cenário:\n• Tabela orders precisa constantemente de customer_name\n• Ao invés de JOIN custoso\n• Duplica customer_name na tabela orders\n• Trade-off: performance vs consistência"
    },
    {
        id: '155',
        term: "Index",
        category: "Conceito",
        explanation: "Estrutura de dados que melhora velocidade de consultas em banco de dados, criando \"atalho\" para encontrar registros.",
        example: "CREATE INDEX idx_user_email ON users(email);\n\n// Consulta rápida\nSELECT * FROM users WHERE email = 'user@example.com';\n\nTipos: B-tree, Hash, Bitmap, Partial"
    },
    {
        id: '156',
        term: "Query Optimization",
        category: "Conceito",
        explanation: "Processo de melhorar performance de consultas de banco de dados através de técnicas como indexes, reescrita de queries.",
        example: "Técnicas:\n• Usar indexes apropriados\n• Evitar SELECT *\n• Limitar resultados com LIMIT\n• Evitar funções em WHERE\n• Analisar execution plan\n\nFerramentas: EXPLAIN, query profilers"
    },
    {
        id: '157',
        term: "Connection Pooling",
        category: "Conceito",
        explanation: "Técnica que mantém cache de conexões de banco de dados para reutilização, evitando overhead de criar/destruir conexões.",
        example: "Configuração típica:\n• Min connections: 5\n• Max connections: 20\n• Idle timeout: 30 minutos\n• Connection timeout: 5 segundos\n\nBenefícios: performance, controle de recursos"
    },
    {
        id: '158',
        term: "DTO",
        category: "Sigla",
        explanation: "Data Transfer Object - Objeto que carrega dados entre processos, reduzindo número de chamadas remotas.",
        example: "class UserDTO {\n  constructor(id, name, email) {\n    this.id = id;\n    this.name = name;\n    this.email = email;\n    // Sem métodos, apenas dados\n  }\n}\n\nUso: APIs, comunicação entre camadas"
    },
    {
        id: '159',
        term: "VO",
        category: "Sigla",
        explanation: "Value Object - Objeto imutável que representa valor simples, identificado pelo conteúdo, não por identidade.",
        example: "class Money {\n  constructor(amount, currency) {\n    this.amount = amount;\n    this.currency = currency;\n    Object.freeze(this); // imutável\n  }\n  \n  equals(other) {\n    return this.amount === other.amount && \n           this.currency === other.currency;\n  }\n}"
    },
    {
        id: '160',
        term: "Entity",
        category: "Conceito",
        explanation: "Objeto que tem identidade distinta e persiste ao longo do tempo, mesmo quando seus atributos mudam.",
        example: "class User { // Entity\n  constructor(id, name, email) {\n    this.id = id; // identidade única\n    this.name = name; // pode mudar\n    this.email = email; // pode mudar\n  }\n}\n\n// Mesmo user com nome diferente continua sendo mesmo user"
    },
    {
        id: '161',
        term: "Domain Model",
        category: "Conceito",
        explanation: "Representação conceitual de domínio de negócio, incluindo entidades, relacionamentos e regras de negócio.",
        example: "E-commerce domain:\n• Customer (entidade)\n• Order (entidade)\n• Product (entidade)\n• OrderItem (value object)\n• PlaceOrder (domain service)\n• PaymentProcessor (domain service)"
    },
    {
        id: '162',
        term: "Dependency Injection",
        category: "Padrão",
        explanation: "Técnica que fornece dependências de objeto externamente ao invés de criar dentro do próprio objeto, melhorando testabilidade.",
        example: "❌ Sem DI:\nclass UserService {\n  constructor() {\n    this.db = new Database(); // dependência hardcoded\n  }\n}\n\n✅ Com DI:\nclass UserService {\n  constructor(database) {\n    this.db = database; // injetado externamente\n  }\n}"
    },
    {
        id: '163',
        term: "IoC Container",
        category: "Conceito",
        explanation: "Inversion of Control Container - Framework que gerencia criação e ciclo de vida de objetos e suas dependências automaticamente.",
        example: "// Registro\ncontainer.register('database', DatabaseService);\ncontainer.register('userService', UserService, ['database']);\n\n// Resolução automática\nconst userService = container.resolve('userService');\n\nFrameworks: Spring (Java), .NET Core DI"
    },
    {
        id: '164',
        term: "Facade Pattern",
        category: "Padrão",
        explanation: "Padrão que fornece interface simplificada para subsistema complexo, escondendo complexidade interna.",
        example: "class PaymentFacade {\n  processPayment(amount, card) {\n    // Esconde complexidade interna:\n    this.validateCard(card);\n    this.checkFraud(card, amount);\n    this.chargeCard(card, amount);\n    this.sendReceipt();\n    return { success: true };\n  }\n}"
    },
    {
        id: '165',
        term: "Adapter Pattern",
        category: "Padrão",
        explanation: "Padrão que permite que interfaces incompatíveis trabalhem juntas, convertendo interface de classe em outra interface esperada.",
        example: "// API externa usa formato diferente\nclass PaymentAdapter {\n  constructor(externalPaymentApi) {\n    this.api = externalPaymentApi;\n  }\n  \n  pay(amount) {\n    // Adapta nosso formato para formato da API externa\n    return this.api.makePayment(amount * 100, 'USD');\n  }\n}"
    },
    {
        id: '166',
        term: "Strategy Pattern",
        category: "Padrão",
        explanation: "Padrão que define família de algoritmos, encapsula cada um e os torna intercambiáveis durante runtime.",
        example: "class PaymentProcessor {\n  constructor(strategy) {\n    this.strategy = strategy;\n  }\n  \n  process(amount) {\n    return this.strategy.pay(amount);\n  }\n}\n\n// Strategies: CreditCardPayment, PayPalPayment, CryptoPayment"
    },
    {
        id: '167',
        term: "Command Pattern",
        category: "Padrão",
        explanation: "Padrão que encapsula requisição como objeto, permitindo parametrizar clientes com diferentes requisições e operações undo.",
        example: "class SaveCommand {\n  constructor(document, filename) {\n    this.document = document;\n    this.filename = filename;\n  }\n  \n  execute() {\n    // salvar arquivo\n  }\n  \n  undo() {\n    // desfazer salvamento\n  }\n}\n\nUso: undo/redo, macros, queuing"
    },
    {
        id: '168',
        term: "Event Sourcing",
        category: "Padrão",
        explanation: "Padrão que armazena sequência de eventos que levaram ao estado atual, ao invés de armazenar apenas estado final.",
        example: "Conta bancária:\n• Event 1: AccountCreated(balance: 0)\n• Event 2: MoneyDeposited(amount: 100)\n• Event 3: MoneyWithdrawn(amount: 30)\n• Estado atual: balance = 70\n\nBenefícios: audit trail completo, time travel, debugging"
    },
    {
        id: '169',
        term: "CQRS",
        category: "Sigla",
        explanation: "Command Query Responsibility Segregation - Padrão que separa operações de leitura (queries) das de escrita (commands).",
        example: "Separação:\n• Write Model: otimizado para comandos (normalizações)\n• Read Model: otimizado para queries (denormalizado)\n• Sync entre models via eventos\n\nBenefícios: otimização específica, escalabilidade independente"
    },
    {
        id: '170',
        term: "Message Queue",
        category: "Conceito",
        explanation: "Sistema que permite comunicação assíncrona entre serviços através de mensagens em filas, desacoplando produtores de consumidores.",
        example: "Fluxo típico:\n1. Producer envia mensagem para queue\n2. Message broker armazena mensagem\n3. Consumer processa quando disponível\n4. Acknowledge após processamento\n\nFerramentas: RabbitMQ, Apache Kafka, AWS SQS"
    },
    {
        id: '171',
        term: "Pub/Sub",
        category: "Padrão",
        explanation: "Publish/Subscribe - Padrão de mensageria onde publishers enviam mensagens para topics, e subscribers recebem mensagens de interesse.",
        example: "E-commerce events:\n• Topic: 'order.created'\n• Publishers: OrderService\n• Subscribers: EmailService, InventoryService, AnalyticsService\n\nDesacoplamento: publishers não conhecem subscribers"
    },
    {
        id: '172',
        term: "Event-Driven Architecture",
        category: "Arquitetura",
        explanation: "Arquitetura onde componentes comunicam através de eventos, permitindo sistemas mais desacoplados e escaláveis.",
        example: "Fluxo de pedido:\n1. OrderPlaced event\n2. PaymentService processa pagamento\n3. PaymentCompleted event\n4. InventoryService reduz estoque\n5. EmailService envia confirmação\n\nBenefícios: baixo acoplamento, escalabilidade"
    },
    {
        id: '173',
        term: "Eventual Consistency",
        category: "Conceito",
        explanation: "Modelo de consistência que garante que sistema se tornará consistente eventualmente, permitindo inconsistências temporárias.",
        example: "Cenário distribuído:\n• User atualiza perfil no datacenter US\n• Réplica EU ainda tem dados antigos\n• Após alguns segundos/minutos, EU sincroniza\n• Eventual: todos datacenters ficam consistentes\n\nTrade-off: availability vs immediate consistency"
    },
    {
        id: '174',
        term: "Idempotency",
        category: "Conceito",
        explanation: "Propriedade onde operação pode ser aplicada múltiplas vezes sem alterar resultado além da primeira aplicação.",
        example: "Idempotent REST APIs:\n• GET /users/123 (sempre retorna mesmo user)\n• PUT /users/123 (update com mesmo payload)\n• DELETE /users/123 (delete usuário já deletado)\n\nNÃO idempotent: POST /users (cria novo user a cada call)"
    },
    {
        id: '175',
        term: "Rate Limiting",
        category: "Conceito",
        explanation: "Técnica que controla número de requisições que cliente pode fazer em período específico, protegendo APIs de abuso.",
        example: "Implementação:\n• 100 requests por minuto por IP\n• Headers de resposta:\n  X-RateLimit-Limit: 100\n  X-RateLimit-Remaining: 87\n  X-RateLimit-Reset: 1643723400\n\nAlgoritmos: token bucket, sliding window"
    },
    {
        id: '176',
        term: "Circuit Breaker",
        category: "Padrão",
        explanation: "Padrão que previne cascata de falhas em sistemas distribuídos, 'abrindo circuito' quando serviço falha repetidamente.",
        example: "Estados:\n• Closed: requisições passam normalmente\n• Open: requisições falham imediatamente\n• Half-Open: testa se serviço recuperou\n\nConfiguração: 5 falhas em 1 minuto → abre por 30 segundos"
    },
    {
        id: '177',
        term: "Bulkhead Pattern",
        category: "Padrão",
        explanation: "Padrão que isola recursos críticos para prevenir que falha em uma parte do sistema afete outras partes.",
        example: "Thread pools separados:\n• Pool A: 10 threads para operações críticas\n• Pool B: 5 threads para operações secundárias\n• Se Pool B trava, Pool A continua funcionando\n\nInspiração: compartimentos de navios"
    },
    {
        id: '178',
        term: "Graceful Degradation",
        category: "Conceito",
        explanation: "Capacidade de sistema continuar operando em nível reduzido quando alguns componentes falham, ao invés de falhar completamente.",
        example: "E-commerce com falha no serviço de recomendações:\n• Mostra produtos populares padrão\n• Ou esconde seção de recomendações\n• Mantém funcionalidades core (busca, compra)\n• Log da falha para correção posterior"
    },
    {
        id: '179',
        term: "Health Check",
        category: "Conceito",
        explanation: "Endpoint ou mecanismo que verifica se serviço está funcionando corretamente, usado por load balancers e monitoring.",
        example: "GET /health\nResposta:\n{\n  \"status\": \"healthy\",\n  \"database\": \"connected\",\n  \"cache\": \"connected\",\n  \"uptime\": \"2d 5h 30m\",\n  \"version\": \"1.2.3\"\n}\n\nStatus codes: 200 (healthy), 503 (unhealthy)"
    },
    {
        id: '180',
        term: "Feature Toggle",
        category: "Conceito",
        explanation: "Técnica que permite ativar/desativar funcionalidades sem deploy, usando flags de configuração.",
        example: "if (config.features.newUI) {\n  return <NewUserInterface />;\n} else {\n  return <LegacyUserInterface />;\n}\n\nTipos: release toggles, experiment toggles, ops toggles, permission toggles"
    },
    {
        id: '181',
        term: "Blue-Green",
        category: "Estratégia",
        explanation: "Estratégia de deployment que mantém dois ambientes idênticos, alternando entre eles para deploys sem downtime.",
        example: "Processo:\n• Blue: ambiente atual em produção\n• Green: nova versão deployada e testada\n• Switch instantâneo: traffic Blue → Green\n• Blue fica standby para rollback\n• Próximo deploy: Green → Blue"
    },
    {
        id: '182',
        term: "Canary Release",
        category: "Estratégia",
        explanation: "Estratégia que libera nova versão gradualmente para pequena porcentagem de usuários, monitorando métricas antes de rollout completo.",
        example: "Fases:\n1. Deploy para 1% dos usuários\n2. Monitor: errors, latency, business metrics\n3. Se OK, aumenta para 10%\n4. Continua: 25% → 50% → 100%\n5. Rollback automático se métricas degradam"
    },
    {
        id: '183',
        term: "Rolling Deployment",
        category: "Estratégia",
        explanation: "Estratégia que atualiza instâncias gradualmente, uma por vez ou em pequenos grupos, mantendo serviço disponível.",
        example: "Com 6 servidores:\n1. Atualiza servidor 1, tira do load balancer\n2. Testa servidor 1\n3. Coloca de volta no load balancer\n4. Repete para servidores 2, 3, 4, 5, 6\n\nSempre mantém capacidade mínima funcionando"
    },
    {
        id: '184',
        term: "Horizontal Scaling",
        category: "Conceito",
        explanation: "Adicionar mais máquinas ao pool de recursos para lidar com aumento de carga (scale out).",
        example: "Web servers:\n• 1 servidor: 1000 requests/sec\n• 3 servidores: 3000 requests/sec\n• 10 servidores: 10000 requests/sec\n\nRequer: load balancer, stateless design, session externalization"
    },
    {
        id: '185',
        term: "Vertical Scaling",
        category: "Conceito",
        explanation: "Adicionar mais poder (CPU, RAM, storage) a máquina existente para lidar com aumento de carga (scale up).",
        example: "Database server:\n• Atual: 4 CPU cores, 16GB RAM\n• Upgrade: 8 CPU cores, 32GB RAM\n• Resultado: 2x performance\n\nLimitações: limite físico, single point of failure, custo alto"
    },
    {
        id: '186',
        term: "Load Balancing",
        category: "Conceito",
        explanation: "Distribuição de requisições entre múltiplos servidores para otimizar utilização de recursos e maximizar throughput.",
        example: "Algoritmos:\n• Round Robin: A → B → C → A\n• Least Connections: direciona para servidor com menos conexões\n• IP Hash: mesmo IP sempre vai para mesmo servidor\n• Health-based: evita servidores não saudáveis"
    },
    {
        id: '187',
        term: "Session Affinity",
        category: "Conceito",
        explanation: "Técnica que garante que requisições de usuário específico sempre vão para mesmo servidor, mantendo estado de sessão.",
        example: "Implementação:\n• Cookie com server ID\n• Load balancer lê cookie\n• Direciona para servidor correto\n• Fallback se servidor indisponível\n\nDownside: distribuição desigual, problemas se servidor cai"
    },
    {
        id: '188',
        term: "Stateless",
        category: "Conceito",
        explanation: "Design onde servidor não armazena informações sobre estado do cliente entre requisições, cada request é independente.",
        example: "❌ Stateful:\n• Server lembra que user está logado\n• Session data no servidor\n• Problema: não funciona com múltiplos servers\n\n✅ Stateless:\n• Cada request inclui JWT token\n• Server não lembra nada\n• Funciona com qualquer servidor"
    },
    {
        id: '189',
        term: "Stateful",
        category: "Conceito",
        explanation: "Design onde servidor mantém informações sobre estado do cliente entre requisições, lembrando de interações anteriores.",
        example: "Exemplos stateful:\n• Sessões web tradicionais\n• Conexões de database\n• WebSocket connections\n• Game servers (posição do player)\n\nChallenges: scaling, failover, memory usage"
    },
    {
        id: '190',
        term: "Microservice",
        category: "Arquitetura",
        explanation: "Serviço pequeno, independente e focado em uma responsabilidade específica, parte de arquitetura de microserviços.",
        example: "Características:\n• Single responsibility\n• Independently deployable\n• Own database\n• Communicate via APIs\n• Technology agnostic\n\nExemplo: UserService, OrderService, PaymentService"
    },
    {
        id: '191',
        term: "Monorepo",
        category: "Estratégia",
        explanation: "Repositório único que contém código de múltiplos projetos relacionados, facilitando compartilhamento e coordenação.",
        example: "Estrutura típica:\n/monorepo\n  /packages\n    /frontend\n    /backend\n    /shared-lib\n    /mobile-app\n  /tools\n    /build-scripts\n\nFerramentas: Lerna, Nx, Yarn Workspaces"
    },
    {
        id: '192',
        term: "Polyrepo",
        category: "Estratégia",
        explanation: "Estratégia de usar repositórios separados para cada projeto ou serviço, oferecendo isolamento e autonomia de equipes.",
        example: "Estrutura:\n• user-service (repo próprio)\n• order-service (repo próprio)\n• frontend-app (repo próprio)\n• shared-lib (repo próprio)\n\nBenefícios: isolamento, ownership claro, CI/CD independente"
    },
    {
        id: '193',
        term: "Trunk-based Development",
        category: "Estratégia",
        explanation: "Prática onde desenvolvedores colaboram em single branch (trunk/main), fazendo pequenos commits frequentes.",
        example: "Práticas:\n• Commits diretos na main branch\n• Feature flags para funcionalidades incompletas\n• Commits pequenos e frequentes\n• CI/CD robusto\n• Branch life < 1 dia\n\nBenefícios: menos merge conflicts, integração contínua"
    },
    {
        id: '194',
        term: "GitFlow",
        category: "Metodologia",
        explanation: "Modelo de branching para Git que define estrutura rígida de branches para releases e desenvolvimento.",
        example: "Branches:\n• main: produção estável\n• develop: integração de features\n• feature/*: novas funcionalidades\n• release/*: preparação para release\n• hotfix/*: correções urgentes\n\nFluxo: feature → develop → release → main"
    },
    {
        id: '195',
        term: "GitHub Flow",
        category: "Metodologia",
        explanation: "Modelo simples de workflow Git focado em deploy contínuo, usando apenas main branch e feature branches.",
        example: "Fluxo:\n1. Create feature branch from main\n2. Develop and commit changes\n3. Open Pull Request\n4. Review and discuss\n5. Merge to main\n6. Deploy immediately\n\nMais simples que GitFlow"
    },
    {
        id: '196',
        term: "Semantic Versioning",
        category: "Convenção",
        explanation: "Sistema de versionamento que usa três números (MAJOR.MINOR.PATCH) para comunicar tipo de mudanças em software.",
        example: "Formato: 2.1.3\n• MAJOR (2): breaking changes\n• MINOR (1): nova funcionalidade compatível\n• PATCH (3): bug fixes compatíveis\n\nExemplo: 1.0.0 → 1.1.0 (nova feature) → 1.1.1 (bug fix) → 2.0.0 (breaking change)"
    },
    {
        id: '197',
        term: "Breaking Change",
        category: "Conceito",
        explanation: "Mudança em API ou interface que quebra compatibilidade com versões anteriores, requerendo mudanças no código cliente.",
        example: "Exemplos:\n• Remover endpoint: DELETE /api/old-endpoint\n• Mudar formato: {\"name\"} → {\"full_name\"}\n• Mudar comportamento: função retorna array ao invés de objeto\n\nMitigação: versionamento de API, deprecation warnings"
    },
    {
        id: '198',
        term: "Deprecation",
        category: "Conceito",
        explanation: "Processo de marcar funcionalidade como obsoleta, desencorajando uso antes de remoção em versão futura.",
        example: "// @deprecated Use newFunction() instead\nfunction oldFunction() {\n  console.warn('oldFunction is deprecated');\n  return newFunction();\n}\n\nFases: deprecate → remove support → remove code"
    },
    {
        id: '199',
        term: "Legacy Code",
        category: "Conceito",
        explanation: "Código antigo que ainda está em uso mas pode ser difícil de manter devido a tecnologias obsoletas ou má qualidade.",
        example: "Características típicas:\n• Tecnologia antiga (PHP 5, jQuery)\n• Falta de testes\n• Documentação limitada\n• Conhecimento concentrado em poucas pessoas\n• Medo de mexer (\"não toque que funciona\")"
    },
    {
        id: '200',
        term: "Technical Lead",
        category: "Papel",
        explanation: "Desenvolvedor sênior responsável por decisões técnicas, arquitetura e orientação da equipe de desenvolvimento.",
        example: "Responsabilidades:\n• Decisões de arquitetura\n• Code reviews principais\n• Mentoria de desenvolvedores\n• Interface com stakeholders\n• Definição de padrões técnicos\n\nBalance: hands-on coding + liderança técnica"
    },
    {
        id: '201',
        term: "Product Owner",
        category: "Papel",
        explanation: "Pessoa responsável por definir e priorizar requisitos do produto, representando interesses dos stakeholders e usuários.",
        example: "Atividades:\n• Escrever user stories\n• Priorizar backlog\n• Definir critérios de aceitação\n• Validar entregas\n• Interface com business stakeholders\n\n\"Dono\" da visão do produto"
    },
    {
        id: '202',
        term: "Scrum Master",
        category: "Papel",
        explanation: "Facilitador do processo Scrum que ajuda equipe a seguir práticas ágeis e remove impedimentos ao desenvolvimento.",
        example: "Responsabilidades:\n• Facilitar cerimônias Scrum\n• Remover impedimentos\n• Proteger equipe de distrações\n• Coach em práticas ágeis\n• Promover melhoria contínua\n\nNÃO é: gerente de projeto, chefe da equipe"
    },
    {
        id: '203',
        term: "DevOps Engineer",
        category: "Papel",
        explanation: "Profissional que trabalha na intersecção entre desenvolvimento e operações, automatizando e otimizando processos.",
        example: "Skills principais:\n• Infrastructure as Code\n• CI/CD pipelines\n• Containerization (Docker/Kubernetes)\n• Monitoring e logging\n• Cloud platforms (AWS, Azure, GCP)\n• Automation scripting"
    },
    {
        id: '204',
        term: "Site Reliability Engineer (SRE)",
        category: "Papel",
        explanation: "Engenheiro que aplica princípios de software engineering para resolver problemas de infraestrutura e operações.",
        example: "Foco principal:\n• Service Level Objectives (SLOs)\n• Error budgets\n• Automation over manual work\n• Monitoring e alerting\n• Post-mortem sem culpa\n• Capacity planning\n\nOriginado no Google"
    },
    {
        id: '205',
        term: "Spike",
        category: "Conceito",
        explanation: "Time-boxed research ou experimento para reduzir incerteza técnica sobre implementação de user story.",
        example: "Quando fazer spike:\n• Nova tecnologia desconhecida\n• Arquitetura complexa incerta\n• Estimativa muito vaga\n• Riscos técnicos altos\n\nResultado: conhecimento, não código produção"
    },
    {
        id: '206',
        term: "Proof of Concept (PoC)",
        category: "Conceito",
        explanation: "Implementação pequena e incompleta de método ou ideia para demonstrar sua viabilidade.",
        example: "PoC de machine learning:\n• Dataset pequeno\n• Modelo simples\n• Métricas básicas\n• Demo funcional\n• Validação de hipótese\n\nObjetivo: provar que ideia pode funcionar"
    },
    {
        id: '207',
        term: "Prototype",
        category: "Conceito",
        explanation: "Versão inicial e experimental de produto para testar conceitos, design e funcionalidades antes do desenvolvimento completo.",
        example: "Tipos:\n• Paper prototype: desenhos/mockups\n• Interactive prototype: Figma/InVision\n• Code prototype: implementação básica\n• Wizard of Oz: simulação manual\n\nObjetivo: validar ideias rapidamente"
    },
    {
        id: '208',
        term: "Alpha",
        category: "Fase",
        explanation: "Primeira fase de teste de software, geralmente interno e com funcionalidades básicas, focando em detectar bugs maiores.",
        example: "Características alpha:\n• Interno à empresa\n• Funcionalidades core implementadas\n• Muitos bugs esperados\n• Interface pode ser incompleta\n• Foco: funcionalidade básica\n\nPublic alpha: alguns usuários externos selecionados"
    },
    {
        id: '209',
        term: "Beta",
        category: "Fase",
        explanation: "Segunda fase de teste onde software é liberado para grupo limitado de usuários externos para feedback e detecção de bugs.",
        example: "Tipos:\n• Closed beta: usuários convidados\n• Open beta: qualquer um pode participar\n• Public beta: disponível publicamente\n\nObjetivos: feedback real, load testing, bug finding, marketing buzz"
    },
    {
        id: '210',
        term: "GA",
        category: "Sigla",
        explanation: "General Availability - Versão final de software liberada para todos os usuários, considerada estável e pronta para produção.",
        example: "Marcos do desenvolvimento:\n• Alpha: interno, muitos bugs\n• Beta: usuários limitados, poucos bugs\n• Release Candidate: quase pronto\n• GA: produção, estável, suportado\n\nGA = 1.0.0 geralmente"
    },
    {
        id: '211',
        term: "Hotfix",
        category: "Conceito",
        explanation: "Correção urgente aplicada diretamente em produção para resolver bug crítico que não pode esperar próximo release.",
        example: "Cenário típico:\n• Bug crítico em produção\n• Bypass processo normal de desenvolvimento\n• Fix direto na main/master branch\n• Deploy imediato\n• Backport para develop branch depois\n\nPrioridade: estabilidade > processo"
    },
    {
        id: '212',
        term: "Patch",
        category: "Conceito",
        explanation: "Pequena atualização que corrige bugs específicos ou vulnerabilidades de segurança sem adicionar novas funcionalidades.",
        example: "Versioning:\n• 1.0.0 → 1.0.1 (patch)\n• Apenas bug fixes\n• Backward compatible\n• Deploy seguro\n\nConteúdo: security fixes, critical bugs, minor improvements"
    },
    {
        id: '213',
        term: "Minification",
        category: "Conceito",
        explanation: "Processo de remover caracteres desnecessários (espaços, comentários) do código sem alterar funcionalidade, reduzindo tamanho.",
        example: "Antes:\nfunction calculateTotal(price, tax) {\n  // Calculate total with tax\n  return price + (price * tax);\n}\n\nDepois:\nfunction calculateTotal(e,t){return e+e*t}\n\nFerramentas: UglifyJS, Terser, CSS minifiers"
    },
    {
        id: '214',
        term: "Obfuscation",
        category: "Conceito",
        explanation: "Processo de tornar código difícil de entender para humanos, mantendo funcionalidade, usado para proteção de propriedade intelectual.",
        example: "Técnicas:\n• Renomear variáveis: userName → a\n• Control flow obfuscation\n• String encoding\n• Dead code insertion\n\nUso: proteção de código JavaScript client-side"
    },
    {
        id: '215',
        term: "Progressive Enhancement",
        category: "Filosofia",
        explanation: "Estratégia de desenvolvimento web que começa com experiência básica e adiciona camadas de funcionalidade progressivamente.",
        example: "Camadas:\n1. HTML semântico (conteúdo básico)\n2. CSS (apresentação visual)\n3. JavaScript (interatividade)\n4. Advanced features (PWA, WebGL)\n\nPrincípio: funciona em qualquer browser, melhor em browsers modernos"
    },
    {
        id: '216',
        term: "Graceful Degradation",
        category: "Filosofia",
        explanation: "Estratégia que começa com experiência completa e degrada graciosamente em browsers ou dispositivos menos capazes.",
        example: "Website moderno:\n• Chrome: todas animations, WebGL\n• Firefox: animations, fallback para Canvas\n• Safari antigo: static images\n• IE11: layout básico funcional\n\nOposto de Progressive Enhancement"
    },
    {
        id: '217',
        term: "Responsive Design",
        category: "Conceito",
        explanation: "Abordagem de design web que faz páginas renderizarem bem em variedade de dispositivos e tamanhos de tela.",
        example: "Técnicas:\n• Media queries CSS\n• Flexible grid layouts\n• Flexible images\n• Mobile-first approach\n\n@media (max-width: 768px) {\n  .container { width: 100%; }\n}"
    },
    {
        id: '218',
        term: "Mobile First",
        category: "Filosofia",
        explanation: "Estratégia de design que começa com versão mobile e progressivamente adiciona funcionalidades para telas maiores.",
        example: "CSS Mobile First:\n/* Base: mobile styles */\n.header { font-size: 18px; }\n\n/* Tablet and up */\n@media (min-width: 768px) {\n  .header { font-size: 24px; }\n}\n\n/* Desktop and up */\n@media (min-width: 1024px) {\n  .header { font-size: 32px; }\n}"
    },
    {
        id: '219',
        term: "Critical CSS",
        category: "Conceito",
        explanation: "CSS mínimo necessário para renderizar parte visível da página (above-the-fold) sem bloqueios, melhorando perceived performance.",
        example: "Estratégia:\n1. Identificar CSS crítico (above-the-fold)\n2. Inline no <head>\n3. Load resto do CSS assincronamente\n4. Evita flash of unstyled content\n\nFerramentas: Critical, PurgeCSS, UnCSS"
    },
    {
        id: '220',
        term: "Above the Fold",
        category: "Conceito",
        explanation: "Parte da webpage visível sem scroll, prioritária para otimização pois é primeira impressão do usuário.",
        example: "Otimizações:\n• Critical CSS inline\n• Lazy load imagens below-fold\n• Priorizar recursos above-fold\n• Minimize CLS (layout shifts)\n\nMétrica: Largest Contentful Paint (LCP)"
    },
    {
        id: '221',
        term: "Core Web Vitals",
        category: "Métricas",
        explanation: "Conjunto de métricas específicas que Google considera importantes para experiência do usuário em páginas web.",
        example: "Três métricas principais:\n• LCP: Largest Contentful Paint (loading)\n• FID: First Input Delay (interactivity)\n• CLS: Cumulative Layout Shift (visual stability)\n\nThresholds: Good, Needs Improvement, Poor"
    },
    {
        id: '222',
        term: "SEO",
        category: "Sigla",
        explanation: "Search Engine Optimization - Prática de otimizar websites para melhorar ranking em resultados de busca orgânica.",
        example: "Fatores técnicos:\n• Meta tags apropriadas\n• URLs semânticas\n• Site speed\n• Mobile-friendly\n• Schema markup\n• Internal linking\n• HTTPS\n• Core Web Vitals"
    },
    {
        id: '223',
        term: "SSR",
        category: "Sigla",
        explanation: "Server-Side Rendering - Técnica onde HTML é gerado no servidor antes de enviar para cliente, melhorando SEO e performance inicial.",
        example: "Fluxo SSR:\n1. Request chega ao servidor\n2. Servidor executa JavaScript\n3. Gera HTML completo\n4. Envia HTML para cliente\n5. Cliente hidrata para SPA\n\nFrameworks: Next.js, Nuxt.js, SvelteKit"
    },
    {
        id: '224',
        term: "CSR",
        category: "Sigla",
        explanation: "Client-Side Rendering - Técnica onde JavaScript no browser gera conteúdo HTML dinâmicamente após carregamento inicial.",
        example: "Fluxo CSR:\n1. Browser baixa HTML básico\n2. Download JavaScript bundle\n3. JS executa e renderiza conteúdo\n4. Interface fica interativa\n\nExemplos: SPAs tradicionais, React puro"
    },
    {
        id: '225',
        term: "SSG",
        category: "Sigla",
        explanation: "Static Site Generation - Técnica que gera páginas HTML estáticas em build time, combinando performance de sites estáticos com dados dinâmicos.",
        example: "Processo:\n1. Build time: fetch dados de CMS/API\n2. Gera HTML estático para cada página\n3. Deploy arquivos estáticos para CDN\n4. Runtime: serve arquivos pré-gerados\n\nFrameworks: Gatsby, Next.js, Hugo, Jekyll"
    },
    {
        id: '226',
        term: "Hydration",
        category: "Conceito",
        explanation: "Processo onde JavaScript 'rehidrata' HTML estático (de SSR/SSG) para torná-lo interativo no cliente.",
        example: "Processo:\n1. Server envia HTML estático\n2. Browser renderiza conteúdo imediatamente\n3. JavaScript carrega em background\n4. React 'assume controle' do DOM\n5. Interface fica interativa\n\nBenefício: fast first paint + full interactivity"
    },
    {
        id: '227',
        term: "JAMstack",
        category: "Arquitetura",
        explanation: "JavaScript, APIs, Markup - Arquitetura moderna para web que entrega sites mais rápidos, seguros e escaláveis.",
        example: "Componentes:\n• JavaScript: funcionalidade dinâmica\n• APIs: backend via APIs (headless CMS)\n• Markup: HTML pré-gerado (SSG)\n\nExemplos: Gatsby + Contentful, Next.js + Strapi\nBenefícios: performance, segurança, scaling"
    },
    {
        id: '228',
        term: "Headless CMS",
        category: "Conceito",
        explanation: "Sistema de gerenciamento de conteúdo que fornece apenas backend, entregando conteúdo via API para qualquer frontend.",
        example: "Vantagens:\n• Frontend flexível (web, mobile, IoT)\n• Tecnologia agnóstica\n• Developer-friendly\n• Melhor performance\n\nExemplos: Strapi, Contentful, Sanity, Ghost\nvs Traditional CMS: WordPress, Drupal"
    },
    {
        id: '229',
        term: "CDN",
        category: "Sigla",
        explanation: "Content Delivery Network - Rede geograficamente distribuída de servidores que entrega conteúdo web com baixa latência.",
        example: "Funcionamento:\n• Usuário no Brasil acessa site US\n• CDN serve conteúdo do edge server mais próximo\n• Latência: 200ms → 20ms\n• Cached content: images, CSS, JS, videos\n\nProviders: Cloudflare, AWS CloudFront, Azure CDN"
    },
    {
        id: '230',
        term: "Edge Computing",
        category: "Conceito",
        explanation: "Paradigma que processa dados próximo à fonte (edge da rede) ao invés de datacenter centralizado, reduzindo latência.",
        example: "Use cases:\n• CDN com edge functions\n• IoT processing\n• Real-time gaming\n• Video streaming\n• Mobile edge computing\n\nBenefícios: baixa latência, menos bandwidth, privacy"
    },
    {
        id: '231',
        term: "Serverless Functions",
        category: "Conceito",
        explanation: "Funções que executam em response a eventos sem gerenciar servidores, cobrando apenas por execução.",
        example: "// Vercel Edge Function\nexport default function handler(req, res) {\n  const { name } = req.query;\n  res.json({ message: `Hello ${name}!` });\n}\n\nProviders: AWS Lambda, Vercel Functions, Cloudflare Workers"
    },
    {
        id: '232',
        term: "Cold Start",
        category: "Conceito",
        explanation: "Latência adicional que ocorre quando serverless function é invocada após período de inatividade, enquanto container é inicializado.",
        example: "Típicos cold start times:\n• Node.js: 100-300ms\n• Python: 200-500ms\n• Java: 1-3 segundos\n• Go: 50-200ms\n\nMitigação: keep functions warm, choose runtime wisely"
    },
    {
        id: '233',
        term: "Warm Start",
        category: "Conceito",
        explanation: "Execução de serverless function que reutiliza container já inicializado, resultando em latência muito menor.",
        example: "Performance:\n• Cold start: 500ms total (400ms startup + 100ms execution)\n• Warm start: 100ms total (0ms startup + 100ms execution)\n\nContainer reuse window: tipicamente 5-15 minutos"
    },
    {
        id: '234',
        term: "Environment Variables",
        category: "Conceito",
        explanation: "Variáveis do sistema operacional que armazenam valores de configuração, permitindo diferentes configs por ambiente.",
        example: "// Node.js\nconst dbUrl = process.env.DATABASE_URL;\nconst apiKey = process.env.API_KEY;\n\n// .env file\nDATABASE_URL=postgres://localhost:5432/mydb\nAPI_KEY=secret123\nNODE_ENV=development"
    },
    {
        id: '235',
        term: "Configuration Management",
        category: "Conceito",
        explanation: "Prática de gerenciar configurações de aplicação separadamente do código, permitindo mudanças sem redeploy.",
        example: "Hierarquia típica:\n1. Default configs (código)\n2. Environment variables\n3. Config files (.env, config.json)\n4. Command line arguments\n5. Runtime configs (admin panel)\n\nFerramentas: dotenv, config libraries"
    },
    {
        id: '236',
        term: "Feature Flag Service",
        category: "Conceito",
        explanation: "Serviço dedicado que gerencia feature flags/toggles, permitindo controle granular de funcionalidades em runtime.",
        example: "if (await featureFlags.isEnabled('newCheckout', userId)) {\n  return <NewCheckout />;\n}\n\nFuncionalidades:\n• Targeting (% usuários, grupos específicos)\n• A/B testing\n• Gradual rollout\n• Emergency killswitch\n\nServiços: LaunchDarkly, Split.io"
    },
    {
        id: '237',
        term: "Chaos Engineering",
        category: "Disciplina",
        explanation: "Disciplina de experimentar com sistemas distribuídos para construir confiança na capacidade de resistir a condições turbulentas.",
        example: "Experimentos:\n• Derrubar instâncias EC2 aleatoriamente\n• Simular latência de rede alta\n• Corromper dados temporariamente\n• Sobrecarregar CPU/memória\n\nObjectivo: encontrar fraquezas antes que causem outages reais\n\nFerramenta famosa: Netflix Chaos Monkey"
    },
    {
        id: '238',
        term: "Disaster Recovery",
        category: "Conceito",
        explanation: "Conjunto de políticas e procedimentos para recuperar sistemas de TI após eventos catastróficos.",
        example: "Métricas principais:\n• RTO: Recovery Time Objective (tempo máximo de downtime)\n• RPO: Recovery Point Objective (perda máxima de dados)\n\nEstratégias: backup/restore, pilot light, warm standby, multi-site"
    },
    {
        id: '239',
        term: "High Availability",
        category: "Conceito",
        explanation: "Característica de sistema que opera continuamente por período desejadamente longo, minimizando downtime.",
        example: "Níveis típicos:\n• 99% = 3.65 dias downtime/ano\n• 99.9% = 8.76 horas downtime/ano\n• 99.99% = 52.56 minutos downtime/ano\n• 99.999% = 5.26 minutos downtime/ano\n\nTécnicas: redundância, failover, load balancing"
    },
    {
        id: '240',
        term: "Fault Tolerance",
        category: "Conceito",
        explanation: "Capacidade de sistema continuar operando corretamente mesmo quando alguns componentes falham.",
        example: "Implementações:\n• Redundant components\n• Automatic failover\n• Circuit breakers\n• Graceful degradation\n• Error isolation\n\nDiferença: HA foca em uptime, FT foca em continuar funcionando com falhas"
    },
    {
        id: '241',
        term: "Zero Downtime Deployment",
        category: "Conceito",
        explanation: "Estratégia de deploy que atualiza aplicação sem interrupção de serviço para usuários finais.",
        example: "Técnicas:\n• Blue-Green deployment\n• Rolling updates\n• Canary releases\n• Feature flags\n• Database migrations compatíveis\n\nRequisitos: load balancer, health checks, rollback plan"
    }
];

