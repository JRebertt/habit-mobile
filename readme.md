[![Cover.png](https://i.postimg.cc/brVcT7Nj/Cover.png)](https://postimg.cc/1VFjRYqW)

### ⚠️ Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Expo](https://expo.dev/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

### :white_check_mark: Getting Started

```bash
# Clone este repositório
$ git clone <https://github.com/JRebertt/habit-mobile>

# Acesse a pasta do projeto no terminal/cmd
$ cd habit-mobile

# Instale as dependências
$ npm install

```

### :space_invader: Axios

- Antes de executar o projeto, precisamos fazer algumas configurações!

- Existe alguns conflitos entre o `react-native` e o `axios`, o native não reconhe o `localhost` como o servidor local, para isso precisamos definir o ` baseUrl` do `axios` como o nosso ip local.

```shell
# Caminho para a conexão com a api!

src
  ├── lib
  │   └── axios.ts
```

- Caso você não saiba qual o seu ip local, basta executar!

```bash
ipconfig
```

### Atenção!

- Lembre-se de apontar para porta `:3333`

[![axios-base-Url.png](https://i.postimg.cc/PxtM05JK/axios-base-Url.png)](https://postimg.cc/Ty4mDGrW)

### WSL2

- Para usuarios do WSL infelizmente fica um pouco mais complicado, para isso recomendo da uma lida nesse post no [medium](https://medium.com/@nailsonisrael/rodando-react-native-expo-no-wsl2-5b3f501c1c2a).
