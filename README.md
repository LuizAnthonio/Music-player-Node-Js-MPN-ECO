# Music Player Node.js (MPN-ECO)

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

Um player de música simples desenvolvido em Node.js com Express e MongoDB, permitindo upload e reprodução de músicas em um servidor local.

## 🚀 Funcionalidades
- ✅ Upload de músicas (MP3 ou similar)
- ✅ Listagem de músicas do banco de dados
- ✅ Reprodução de áudio no navegador
- ✅ Exclusão de músicas (CRUD completo)

## 🛠️ Tecnologias
- **Backend:** Node.js + Express
- **Banco de Dados:** MongoDB (Mongoose)
- **Upload de Arquivos:** Multer
- **Frontend:** HTML + CSS básico

## 🔧 Instalação

**Clone o repositório**
   ```sh
   git clone https://github.com/LuizAnthonio/Music-player-Node-Js-MPN-ECO.git

   cd Music-player-Node-Js-MPN-ECO
````

**Instale as dependências**
```sh
  npm install
````


Configure o MongoDB

Certifique-se de que o MongoDB está rodando localmente ou configure uma string de conexão no arquivo .env.
Inicie o servidor

````sh
npm start
````
Acesse a aplicação
Abra no navegador:

````text
http://localhost:3000
````
## 📂 Estrutura do Projeto
````plaintext
Music-player-Node-Js-MPN-ECO/
├── models/
│   └── Musica.js          # Modelo do MongoDB
├── public/
│   ├── uploads/           # Pasta de uploads de músicas
│   └── styles.css         # Estilos básicos
├── views/
│   └── index.ejs          # Página principal (EJS)
├── app.js                 # Configuração do Express
├── package.json
└── README.md
````
## 🌐 Rotas da API

O sistema oferece os seguintes endpoints:


### 📌 Rotas Básicas
| Método | Rota            | Descrição                     | Parâmetros       |
|--------|-----------------|-------------------------------|------------------|
| `GET`  | `/`             | Lista todas as músicas        | -                |
| `GET`  | `/musica/:id`   | Detalhes de uma música        | `id` (ObjectId)  |

### 🎧 Álbuns
| Método | Rota          | Descrição               | Parâmetros        |
|--------|---------------|-------------------------|-------------------|
| `GET`  | `/album/:ab`  | Músicas de um álbum     | `ab` (nome álbum) |

### 🎶 Playlists
| Método | Rota                     | Descrição                          | Parâmetros               |
|--------|--------------------------|------------------------------------|--------------------------|
| `GET`  | `/playlist/:id`          | Detalhes da playlist               | `id` (ObjectId)          |
| `GET`  | `/playlist/:id/:index`   | Playlist com música específica     | `id` + `index` (número)  |

### 🔍 Exemplos Práticos
```bash
# Listar músicas
GET /

# Buscar música
GET /musica/507f1f77bcf86cd799439011

# Ver álbum
GET /album/Teste

# Acessar playlist (música 3)
GET /playlist/611f.../2
