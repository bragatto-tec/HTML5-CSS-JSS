# 🎨 Portfólio Beatriz Bragatto - Design & Social Media

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)

**Portfólio profissional de Design Gráfico e Social Media desenvolvido com HTML, CSS e JavaScript!**

[🌐 Ver Portfólio Online](#) | [📧 Contato](mailto:guimbragatto@gmail.com)

</div>

---

## 📌 Sobre o Projeto

Este é o **portfólio profissional** de Beatriz Miyamoto Bragatto, estudante de Publicidade e Propaganda. O site foi desenvolvido para apresentar trabalhos de design gráfico, estratégias de social media e projetos de branding, demonstrando habilidades em criação visual e comunicação estratégica.

## 🎯 Objetivo

O portfólio foi criado com os seguintes objetivos:

- 🎨 **Apresentação Profissional**: Showcase de trabalhos em design e social media
- 💼 **Atração de Clientes**: Plataforma para captar novos projetos
- 📱 **Presença Digital**: Fortalecer marca pessoal online
- 🚀 **Networking**: Conectar com profissionais da área

## ✨ Funcionalidades

### 🏠 Página Inicial (Home)
- Apresentação pessoal com foto de perfil
- Design dark mode com efeitos neon roxos
- Animação de brilho (glow effect) na imagem
- Layout responsivo e moderno
- Navegação intuitiva

### 📂 Página de Portfólio
- **Grid de 6 Projetos** organizados em cards
- Animação de entrada sequencial (fade-in)
- Hover effects com brilho roxo
- Categorias diversificadas:
  - 🥗 Nutrição e Emagrecimento
  - ⚖️ Direitos Previdenciários
  - 🏨 Hospedagem
  - 🥬 Horti-Fruti
  - 📸 Fotografia
  - 💆 Fisioterapia

### 📄 Páginas Individuais de Projetos
Cada projeto possui sua própria página detalhada com:
- Imagens dos trabalhos realizados
- Descrição completa do projeto
- Objetivos alcançados
- Estratégias utilizadas
- Layout em grid (imagem + descrição)

### 📧 Página de Contato
- **Formulário com validação JavaScript**:
  - Campo de nome
  - Campo de e-mail
  - Campo de mensagem
- **Seção "Sobre Mim"** com biografia profissional
- **Links para redes sociais**:
  - Instagram
  - TikTok
  - E-mail
- Design responsivo e acessível

## 🏗️ Estrutura do Projeto

```
portfolio/
│
├── index.html                    # Página inicial
├── portifolio.html              # Grid de projetos
├── contato.html                 # Formulário de contato
│
├── Páginas de Projetos (6):
│   ├── projeto1.html            # Nutrição/Emagrecimento
│   ├── projeto2.html            # Direitos Previdenciários
│   ├── projeto3.html            # Hospedagem
│   ├── projeto4.html            # Horti-Fruti
│   ├── projeto5.html            # Fotógrafos
│   └── projeto6.html            # Fisioterapia
│
├── Estilos CSS:
│   ├── estilo_index.css         # Estilo da home
│   ├── style_portifolio.css     # Estilo do grid de projetos
│   ├── projetos.css             # Estilo das páginas individuais
│   └── style_contato.css        # Estilo do formulário
│
├── Scripts JavaScript:
│   ├── portifolio.js            # Animação dos cards
│   └── formulario.js            # Validação do formulário
│
└── imgs/                        # Imagens dos projetos
```

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Background Principal**: `#121212` (preto profundo)
- **Texto**: `#ffffff` (branco)
- **Texto Secundário**: `#cccccc` (cinza claro)
- **Accent Color**: `#a855f7` (roxo vibrante)
- **Hover Glow**: `rgba(170, 0, 255, 0.7)` (roxo neon)

### Efeitos Visuais
- **Neon Glow Effect**: Brilho roxo em imagens e bordas
- **Smooth Transitions**: Transições suaves em todos os elementos
- **Fade-in Animations**: Cards aparecem sequencialmente
- **Box Shadow**: Sombras com efeito de profundidade
- **Transform Effects**: Elevação e escala em hover

### Tipografia
- **Fonte Principal**: Poppins (Google Fonts)
- **Fonte de Títulos**: League Gothic, Oswald
- **Tamanhos Responsivos**: Adaptados para cada breakpoint

## 🛠️ Tecnologias Utilizadas

### Front-End
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização avançada
  - Flexbox e Grid Layout
  - CSS Variables (`:root`)
  - Media Queries (responsividade total)
  - Animations e Transitions
  - Box-shadow com múltiplas camadas
- **JavaScript**: Interatividade
  - DOM Manipulation
  - Event Listeners
  - Form Validation
  - Sequential Animations

### Recursos Externos
- **Google Fonts**: Poppins, League Gothic, Oswald, Inter
- **Font Awesome**: Ícones de redes sociais (Instagram, TikTok, Email)

## 📱 Responsividade

O portfólio é totalmente responsivo com **3 breakpoints principais**:

| Dispositivo | Resolução | Características |
|-------------|-----------|-----------------|
| 📱 **Mobile** | < 600px | Layout em coluna, fonte reduzida |
| 📱 **Tablet** | 600px - 900px | Grid adaptado, navegação otimizada |
| 💻 **Desktop** | > 900px | Grid completo, efeitos visuais plenos |

### Adaptações Mobile
- Header com logo reduzida
- Menu de navegação compacto
- Grid de 1 coluna (projetos)
- Formulário em largura total
- Imagens otimizadas

## 💡 Funcionalidades JavaScript

### 1. Animação Sequencial de Cards (`portifolio.js`)
```javascript
// Cards aparecem um por vez com delay de 150ms
setTimeout(() => {
    card.classList.add('visible');
}, i * 150);
```

### 2. Validação de Formulário (`formulario.js`)
- Verifica campos vazios
- Previne envio sem preenchimento
- Exibe alertas personalizados
- Reset do formulário após envio

## 📊 Projetos Apresentados

### 1. 🥗 Nutrição e Emagrecimento
Carrosséis informativos e visuais para Instagram focados em alimentação saudável e comparativos de calorias.

### 2. ⚖️ Direitos Previdenciários
Conteúdos estratégicos para advogada, com identidade visual elegante e profissional.

### 3. 🏨 Hospedagem - Chalé de Canoa
Conteúdos digitais para promover hospedagem em Canoa Quebrada, destacando conforto e experiências.

### 4. 🥬 Horti-Fruti
Artes vibrantes para promover mercado, destacando ofertas, qualidade e hábitos saudáveis.

### 5. 📸 Casal de Fotógrafos
Parceria para valorizar trabalho fotográfico, fortalecer autoridade e atrair clientes ideais.

### 6. 💆 Fisioterapia - Coluna
Designs educativos para fisioterapeuta especialista em coluna, transmitindo profissionalismo.

## 🎯 Diferenciais do Portfólio

✅ **Design Dark Moderno**: Estética profissional e contemporânea  
✅ **Efeitos Neon**: Visual único com brilho roxo característico  
✅ **100% Responsivo**: Perfeito em todos os dispositivos  
✅ **Animações Suaves**: UX premium com transições fluidas  
✅ **Validação Completa**: Formulário funcional com feedback  
✅ **SEO Friendly**: Estrutura semântica otimizada  
✅ **Performance**: Código limpo e otimizado  

## 📫 Redes Sociais

- 📷 **Instagram**: [@bia.bragatto](https://www.instagram.com/bia.bragatto)
- 🎵 **TikTok**: [@bia.bragatto](https://www.tiktok.com/@bia.bragatto)
- 📧 **E-mail**: bia.bragatto@gmail.com


## 🤝 Contribuições

Este é um projeto pessoal, mas feedbacks e sugestões são bem-vindos!

## 👨‍💻 Desenvolvedor

**Desenvolvido por**: Guilherme Miyamoto Bragatto

- 📧 Email: guimbragatto@gmail.com
- 💼 LinkedIn: [Guilherme Miyamoto Bragatto](https://www.linkedin.com/in/guilherme-miyamoto-bragatto-2102b4355)
- 🐙 GitHub: [@bragatto-tec](https://github.com/bragatto-tec)

---

<div align="center">



*Desenvolvido com 🎨 e 💻 *



</div>
