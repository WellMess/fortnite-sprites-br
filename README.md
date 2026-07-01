# Fortnite Sprites Checklist BR

Uma lista de verificação interativa de sprites do Fortnite traduzida para português, permitindo aos usuários rastrear sua coleção e salvar como imagem.

## 🎮 Características

- **74 Sprites Únicos**: Todos os sprites do Fortnite com múltiplas variantes
- **6 Variantes por Sprite**: Normal, Gummi, Ouro, Galáxia, Gema e Holo
- **Filtros Avançados**: Filtre por variante ou status (Todos, Coletados, Faltando)
- **Persistência Local**: Seu progresso é salvo automaticamente no navegador
- **Design Gaming**: Interface escura com acentos neon cyan e magenta
- **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile

## 🚀 Deploy na Vercel

### Opção 1: Deploy Automático (Recomendado)

1. Acesse [Vercel Dashboard](https://vercel.com/dashboard)
2. Clique em "Add New..." → "Project"
3. Selecione o repositório `fortnite-sprites-br`
4. Clique em "Import"
5. Vercel detectará automaticamente as configurações do Vite
6. Clique em "Deploy"

### Opção 2: Deploy via CLI

```bash
npm install -g vercel
vercel
```

Siga as instruções interativas para conectar sua conta Vercel e fazer o deploy.

## 🛠️ Desenvolvimento Local

### Requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
git clone https://github.com/WellMess/fortnite-sprites-br.git
cd fortnite-sprites-br
pnpm install
```

### Executar Localmente

```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
pnpm build
pnpm preview
```

## 📁 Estrutura do Projeto

```
client/
  src/
    pages/
      Home.tsx          # Página principal com grid de sprites
    components/
      ui/              # Componentes shadcn/ui
    index.css          # Estilos globais e temas
package.json           # Dependências e scripts
vercel.json           # Configuração de deploy
```

## 🎨 Design

O projeto utiliza:

- **React 19** com Hooks
- **Tailwind CSS 4** para estilização
- **shadcn/ui** para componentes UI
- **Lucide React** para ícones
- **Vite** como bundler

### Paleta de Cores

- **Fundo**: `#0a0e27` (Azul muito escuro)
- **Accent Primário**: `#00d9ff` (Cyan neon)
- **Accent Secundário**: `#ff006e` (Magenta)
- **Destaque**: `#ffbe0b` (Amarelo vibrante)

## 📝 Uso

1. **Marcar Sprites**: Clique em qualquer sprite para marcá-lo como coletado
2. **Filtrar por Variante**: Use as abas no topo para alternar entre variantes
3. **Filtrar por Status**: Use os botões "Todos", "Coletados" ou "Faltando"
4. **Inserir Nome**: Digite seu nome de Fortnite (opcional) para personalizar
5. **Baixar como Imagem**: Clique no botão para salvar sua coleção como imagem

## 🔧 Modificações Disponíveis

Você pode facilmente modificar:

- **Sprites**: Edite o array `SPRITES` em `client/src/pages/Home.tsx`
- **Cores**: Modifique as variáveis CSS em `client/src/index.css`
- **Textos**: Todos os textos estão em português e podem ser alterados
- **Layout**: Ajuste o grid responsivo em `client/src/pages/Home.tsx`

## 📄 Licença

Este projeto é uma ferramenta não oficial de fãs. Fortnite é marca registrada da Epic Games, Inc.

## 🤝 Contribuições

Sinta-se livre para fazer fork e enviar pull requests com melhorias!

## 📧 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Criado com ❤️ para colecionadores de Fortnite Sprites**
