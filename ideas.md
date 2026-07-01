# Fortnite Sprites BR - Conceito de Design

## Referência Original
O site original (https://addi.yt/sprites) é uma **Sprite Checklist** para Fortnite com:
- Design escuro com acentos em cyan/amarelo
- Grade de sprites com checkboxes
- Filtros por tipo (Normal, Gummi, Gold, Galaxy, Gem, Holo)
- Contador de progresso
- Opção de download como imagem
- Modo colecionador com rastreamento de Level/Mastery/Revive

## Design Escolhido: Gaming Dark Aesthetic

### Design Movement
Cyberpunk/Gaming UI — inspirado em interfaces de jogos modernos com elementos neon, contraste alto e tipografia ousada.

### Core Principles
1. **Alto Contraste**: Fundo escuro com acentos neon (cyan, magenta, amarelo)
2. **Hierarquia Clara**: Tipografia em camadas com pesos variados
3. **Interatividade Visual**: Feedback imediato em hover/click com efeitos de glow
4. **Densidade Informativa**: Máximo de dados em espaço mínimo sem parecer poluído

### Color Philosophy
- **Fundo Principal**: `#0a0e27` (azul muito escuro, quase preto)
- **Accent Primário**: `#00d9ff` (cyan neon)
- **Accent Secundário**: `#ff006e` (magenta)
- **Destaque**: `#ffbe0b` (amarelo vibrante)
- **Texto Primário**: `#ffffff` (branco puro)
- **Texto Secundário**: `#a0aec0` (cinza claro)

### Layout Paradigm
- Header sticky com navegação e filtros
- Grid responsivo de sprites (4-6 colunas em desktop, 2-3 em mobile)
- Sidebar colapsável para filtros avançados
- Footer com informações e links sociais

### Signature Elements
1. **Glow Effect**: Sprites ganham glow cyan ao passar o mouse
2. **Checkbox Animado**: Check com efeito de "pop" ao clicar
3. **Gradient Dividers**: Separadores com gradiente cyan→magenta

### Interaction Philosophy
- Cliques devem ter feedback imediato (scale + glow)
- Transições suaves entre estados (150-200ms)
- Hover states com mudança de cor e elevação
- Animações de entrada em cascata

### Animation
- Sprites entram com fade + scale (staggered 30ms)
- Checkboxes com bounce ao marcar
- Filtros com transição suave de opacidade
- Contador com efeito de "flip" ao atualizar

### Typography System
- **Display**: Poppins Bold 700 (títulos principais)
- **Heading**: Poppins SemiBold 600 (subtítulos)
- **Body**: Inter Regular 400 (texto padrão)
- **Small**: Inter Regular 400 com opacity reduzida (labels)

### Brand Essence
**Posicionamento**: Ferramenta essencial para colecionadores de Fortnite Sprites que querem rastrear progresso e compartilhar suas coleções com estilo.

**Personalidade**: Competitivo, Moderno, Gamer

### Brand Voice
- Headlines: "Completa Sua Coleção" (ação, urgência)
- CTAs: "Marcar como Coletado" (direto, empoderador)
- Microcopy: "Você tem 24 de 74 sprites" (informativo, sem fluff)

### Wordmark & Logo
Um ícone de sprite/pokémon estilizado em cyan com contorno magenta, sem texto.

### Signature Brand Color
**Cyan Neon** (`#00d9ff`) — cor primária que aparece em borders, glow effects e acentos principais.

---

## Estrutura de Dados

### Sprites
Cada sprite tem:
- `id`: identificador único
- `name`: nome em português
- `type`: tipo base (água, fogo, etc)
- `variants`: [normal, gummy, gold, galaxy, gem, holo]
- `collected`: boolean (armazenado em localStorage)

### Filtros
- Por tipo (Água, Fogo, Terra, etc)
- Por variante (Normal, Gummy, Gold, etc)
- Status (Todos, Coletados, Faltando)

### Modo Colecionador
- Level por sprite (1-10)
- Mastery (0-3 estrelas)
- Revive (sim/não)
