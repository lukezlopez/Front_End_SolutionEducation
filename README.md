# 📄 README - Front-end

## 🖥️ Descrição do Projeto
Este projeto é a interface front-end de uma aplicação de blog, construída com **React** e estilizada com **TailwindCSS**, consumindo uma API RESTful construída em Node.js.  
O front permite criar, visualizar, editar e excluir posts, além de realizar busca e filtragem.  

---

## ⚙️ Tecnologias Utilizadas
- **React**  
- **TailwindCSS**  
- **React Router DOM**  
- **Axios** (para requisições HTTP)  
- **Framer Motion** (para animações)  
- **Docker** (opcional, para deploy)  

---

## 🚀 Setup Inicial

### Pré-requisitos
- Node.js >= 18  
- NPM ou Yarn  
- Acesso à API (backend rodando em ambiente local ou remoto)  

### Passos
Clonar o repositório  
```bash
git clone https://github.com/seu-usuario/front-end.git
cd front-end

Instalar dependências

npm install

Configurar arquivo .env na raiz:

VITE_API_URL=http://localhost:3000
Ajuste a URL da API conforme seu backend.

Rodar o projeto

npm run dev

```
---

## 📦 Scripts Disponíveis

| Comando           | Descrição                                   |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Inicia o projeto em modo de desenvolvimento |
| `npm run build`   | Gera build otimizada para produção          |
| `npm run preview` | Visualiza o build final localmente          |

---

## 🏗 Arquitetura da Aplicação

O front é baseado em Single Page Application com React Router.
Cada página corresponde a uma rota principal:

- / → Home

- /create → Criar post

- /post/:id → Detalhes do post

- /edit/:id → Editar post

- /admin → Administração de posts

Os componentes são reutilizados para garantir consistência e evitar duplicação de código.

## 🎯 Uso da Aplicação

- **Home:** Exibe todos os posts, com busca e filtragem.

- **Criar Post:** Permite adicionar novos posts.

- **Visualizar Post:** Exibe detalhes completos do post.

- **Editar Post:** Permite alterar dados de um post existente.

- **Administração:** Lista todos os posts com opção de deletar.

## 📦 Deploy com Docker

O projeto possui suporte para Docker.
Para rodar em ambiente containerizado


## 💡 Desafios e Aprendizados

- Integração com API RESTful

- Gerenciamento de estado e navegação com React Router

- Organização da arquitetura de componentes

- Uso de TailwindCSS para estilização rápida

- Implementação de dockerização para deploy