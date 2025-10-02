# 💊 Site de Suplementos para Iniciantes

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Concluído-success?style=for-the-badge)

**Plataforma web informativa sobre suplementação para iniciantes na academia!**

</div>

---

## 📌 Sobre o Projeto

Este é um **site informativo e educacional** desenvolvido para ajudar iniciantes na academia a entenderem sobre suplementação alimentar. O projeto apresenta informações sobre diferentes tipos de suplementos, seus benefícios, como usar e para quais objetivos são indicados, de forma clara e acessível.

## 🎯 Objetivo

O site foi criado com os seguintes objetivos:

- 📚 **Educar**: Fornecer informações confiáveis sobre suplementação
- 🎯 **Orientar**: Ajudar na escolha de suplementos conforme objetivos pessoais
- 💪 **Facilitar**: Simplificar a busca por informações para quem não tem tempo
- 🔍 **Organizar**: Categorizar suplementos por objetivos específicos

## ✨ Funcionalidades

### 🏠 Página Inicial (Home)
- Apresentação do projeto
- Descrição da proposta do site
- Call-to-action para visualizar produtos
- Design responsivo e moderno

### 🛒 Página de Produtos
- **4 categorias de objetivos**:
  - 💪 Massa Muscular
  - 🏃 Emagrecimento
  - ⚡ Energia
  - 🍊 Vitaminas
- Sistema de cards clicáveis
- Navegação intuitiva por categorias

### 📄 Páginas de Suplementos

Cada categoria possui sua própria página detalhada:

#### 💪 Massa Muscular
- **Whey Protein**: Proteína para crescimento muscular e recuperação
- **Maltodextrina**: Carboidrato de rápida absorção (10-30g por dose)

#### 🏃 Emagrecimento
- **Quitosana**: Fibras para prolongar saciedade (3g por dia)
- **Creatina**: Produção de energia durante exercícios (3-5g por dia)

#### ⚡ Energia
- **Cafeína**: Ação ergogênica e redução do cansaço (200-400mg por dia)
- **Beta-Alanina**: Reduz fadiga muscular (3-6g por dia)

#### 🍊 Vitaminas
- **Vitamina D**: Força muscular e recuperação (1000-4000 UI)
- **Vitamina C**: Sistema imunológico e recuperação (500-1000mg por dia)

### 📝 Formulário de Contato
- Cadastro com validação JavaScript
- Campos: nome, e-mail, sexo
- Seleção de objetivos (checkbox)
- Área para sugestões e dúvidas
- Validação completa de todos os campos
- Mensagens de erro personalizadas

## 🏗️ Estrutura do Projeto

```
projeto/
│
├── home.html                      # Página inicial
├── produtos.html                  # Catálogo de categorias
├── formulario_projeto.html        # Formulário de contato
│
├── Páginas de Suplementos:
│   ├── pagina_massa.html          # Massa muscular
│   ├── pagina_emagrecimento.html  # Emagrecimento
│   ├── pagina_energia.html        # Energia
│   └── pagina_vitaminas.html      # Vitaminas
│
├── Estilos CSS:
│   ├── estilo_home.css            # Estilo da home
│   ├── estilo_produtos.css        # Estilo do catálogo
│   ├── estilo_formulario.css      # Estilo do formulário
│   └── suplementosgeral.css       # Estilo das páginas de suplementos
│
└── img/                           # Imagens e logo
```

## 🎨 Design e Layout

### Paleta de Cores
- **Background**: `#E2E3DC` (bege claro)
- **Cards**: `#dbc2c2` (rosé claro)
- **Header/Footer**: `rgba(0, 0, 0, 0.05)` (cinza suave)
- **Botões**: Preto com hover `#333`

### Características de Design
- **Layout Flexbox**: Design responsivo e adaptável
- **Cards Interativos**: Efeito hover com elevação
- **Tipografia**: Segoe UI, Arial - fontes limpas e legíveis
- **Imagens**: Centralizadas e com bordas arredondadas
- **Navegação**: Footer fixo em todas as páginas

## 🛠️ Tecnologias Utilizadas

### Front-End
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna
  - Flexbox para layouts
  - Transições e efeitos hover
  - Border-radius para elementos arredondados
- **JavaScript**: Validação de formulário

### Recursos CSS Aplicados
- Reset CSS (`* { margin: 0; padding: 0; }`)
- Box-sizing: border-box
- Flexbox para layouts responsivos
- Efeitos de transição (transform, hover)
- Object-fit para controle de imagens


### Visualizar Online
Se o projeto estiver hospedado, acesse:
👉 [Link do GitHub Pages](https://bragatto-tec.github.io/HTML5-CSS-JSS/projeto-final/projeto/home.html)

**Fluxo de Navegação:**
1. Usuário acessa a **Home**
2. Clica em **"Produtos"**
3. Escolhe uma das 4 categorias (Massa, Emagrecimento, Energia, Vitaminas)
4. Visualiza suplementos detalhados com dosagens
5. Pode acessar o **Formulário de Contato** de qualquer página

## 💡 Validação do Formulário

O formulário possui validação JavaScript que verifica:

✅ Nome preenchido  
✅ E-mail preenchido  
✅ Sexo selecionado  
✅ Pelo menos um objetivo marcado  
✅ Mensagem escrita  

**Mensagens de erro personalizadas** para cada campo não preenchido.

## 📊 Informações Apresentadas

Cada suplemento contém:
- **Nome e Categoria**
- **Descrição dos Benefícios**
- **Imagem Ilustrativa**
- **Como Usar** (dosagem e frequência)
- **Recomendações de Uso**

## 👥 Autor

**Guilherme Miyamoto Bragatto** 

- 📧 Email: guimbragatto@gmail.com
- 💼 LinkedIn: [Guilherme Miyamoto Bragatto](https://www.linkedin.com/in/guilherme-miyamoto-bragatto-2102b4355)
- 🐙 GitHub: [@bragatto-tec](https://github.com/bragatto-tec)

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:

- Reportar bugs
- Sugerir novos suplementos
- Melhorar o design
- Adicionar funcionalidades
- Corrigir informações

---

<div align="center">

*Desenvolvido com 💪 e 💻 *

</div>
