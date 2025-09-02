# AutoFluxo IA - Site Institucional

Site institucional da AutoFluxo IA, empresa especializada em soluções de automação inteligente com IA para otimizar processos empresariais.

## 🚀 Sobre o Projeto

Este é um site estático responsivo desenvolvido com HTML5, CSS3 (Tailwind CSS) e JavaScript vanilla. O site apresenta os serviços da AutoFluxo IA, cases de sucesso e formulário de contato com chatbot integrado.

### ✨ Características

- Design moderno e responsivo
- Animações suaves com AOS (Animate On Scroll)
- Chatbot interativo
- Otimização para SEO
- Performance otimizada com lazy loading
- Compatível com acessibilidade

## 📁 Estrutura do Projeto

```
site-autofluxoia/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos customizados
├── js/
│   └── script.js       # JavaScript da aplicação
├── imagens/
│   └── favicon.ico     # Ícone do site
├── .prettierrc         # Configuração do Prettier
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização com Tailwind CSS
- **JavaScript** - Interatividade e funcionalidades
- **Tailwind CSS** - Framework CSS utilitário
- **AOS** - Biblioteca de animações
- **Feather Icons** - Ícones vetoriais
- **Google Analytics** - Rastreamento de visitantes

## 🚀 Como Fazer Deploy

### Opção 1: GitHub Pages

1. Faça upload do projeto para um repositório no GitHub
2. Vá para Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha a branch `main` e pasta `/ (root)`
5. Clique em "Save"

**URL do site:** `https://seu-usuario.github.io/nome-do-repositorio`

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta
3. Clique em "Deploy manually" ou conecte seu repositório Git
4. Arraste a pasta do projeto ou faça upload dos arquivos
5. O site será implantado automaticamente

### Opção 3: Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Faça login ou crie uma conta
3. Clique em "Import Project"
4. Conecte seu repositório Git ou faça upload manual
5. Configure o domínio (opcional)

### Opção 4: Hospedagem Tradicional

Para hospedagem em provedores como HostGator, Locaweb, etc.:

1. Compacte todos os arquivos em um ZIP
2. Faça upload via FTP ou painel de controle
3. Extraia os arquivos na pasta `public_html` ou equivalente
4. Certifique-se de que o `index.html` está na raiz

## 🔧 Configurações Personalizáveis

### Google Analytics

Para configurar o Google Analytics:

1. Substitua `G-RBJSN3GT0R` no `index.html` pelo seu Tracking ID
2. Linha 19: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-RBJSN3GT0R"></script>`
3. Linha 23: `gtag('config', 'G-RBJSN3GT0R');`

### Contato e Informações

Atualize as informações de contato no arquivo `index.html`:

- **Email:** Linha 500
- **Telefone:** Linha 505
- **Localização:** Linha 510

### Redes Sociais

Configure os links das redes sociais na seção footer:

- **LinkedIn:** Linha 603
- **Twitter:** Linha 607
- **Instagram:** Linha 611
- **WhatsApp:** Linha 612

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Dispositivos móveis (320px+)
- 📟 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `index.html` (linha 36-51):

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#FC4B08',    // Cor principal (laranja)
                dark: '#000000',       // Fundo escuro
                light: '#E5E7EB',      // Texto claro
                card: '#111827',       // Cards
            }
        }
    }
}
```

### Tipografia

- **Títulos:** Poppins (Google Fonts)
- **Corpo do texto:** Inter (Google Fonts)

## 🔍 SEO e Performance

### Meta Tags

As meta tags estão configuradas para otimização SEO:

- Título otimizado
- Descrição rica em palavras-chave
- Open Graph para compartilhamento
- Twitter Cards

### Performance

- **Lazy Loading:** Imagens carregam sob demanda
- **CDNs:** Recursos externos via CDN para velocidade
- **Compressão:** Arquivos otimizados
- **Cache:** Headers apropriados para cache

## 🐛 Suporte e Manutenção

Para suporte técnico ou customizações:

- **Email:** contato@autofluxoia.com
- **WhatsApp:** +55 (27) 99695-9928
- **Site:** https://autofluxoia.com

## 📄 Licença

Este projeto é propriedade da AutoFluxo IA. Todos os direitos reservados.

---

**AutoFluxo IA** - Transformando negócios através da automação inteligente desde 2023.