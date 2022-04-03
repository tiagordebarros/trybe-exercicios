### Parte 1 - Instalação e configuração

Vamos começar realizando a instalação e configuração do ***Git*** . Siga o passo a passo para deixar o ***Git*** pronto em seu ambiente.

#### Instalação

##### Linux

Para instalar o ***Git*** abra o seu terminal e digite o seguinte comando:

Copiar

```shell
sudo apt-get install git-all
```

##### macOS

Para instalar o ***Git*** abra o seu terminal e digite o seguinte comando:

Copiar

```shell
brew install git
```

Caso você não possua o `brew` instalado digite o comando abaixo no seu terminal e após a instalação execute novamente o comando acima:

Copiar

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

#### Configuração

O ***Git*** vem com uma ferramenta chamada `git config` que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o ***Git*** aparece e opera.

##### Identidade

O primeiro passo é configurar sua identidade, seu nome e endereço de e-mail, isso é importante pois cada commit usa esta informação, e ela é carimbada de forma imutável nos commits que você criar. Para configurar isso digite o comando abaixo em seu terminal:

> É preciso que o e-mail informado seja o mesmo que você utilizará para criar a sua conta no GitHub

Copiar

```shell
git config --global user.name "Seu nome"
git config --global user.email seuemail@exemplo.br
```

##### Editor

Um outro ponto legal de se configurar é o editor onde você poderá abrir o arquivo de configuração do ***Git*** , `.gitconfig` , fica fácil de você visualizar as configurações do ***Git*** e também adicionar outras que julgue necessário. Para isso execute o comando à seguir no seu terminal:

Copiar

```shell
git config --global core.editor "code --wait"
```

> Esse comando define o editor do `.gitconfig` como o `VS Code` , que é o editor que você usará ao longo curso. Caso queira abrir o arquivo de configuração no `VS Code` basta executar em seu terminal o comando abaixo. Para isso certifique-se que você se encontra no diretório onde o arquivo `.gitconfig` está localizado.

Copiar

```shell
code .gitconfig
```

#### Verificando a instalação e a configuração

Agora que você já configurou tudo, vamos fazer uma validação e verificar se tudo está certinho! 😉

No terminal:

- Digite

   

  ```
  git --version
  ```

   

  para saber qual versão do git está instalada.

  - Seu terminal deve conter algo parecido com:

Copiar

```shell
git version 2.x.y
```

- Digite

   

  ```
  git config --list
  ```

  - Seu terminal deve conter algo similar a isso:

Copiar

```shell
user.email=seuemail@gmail.com
user.name=seunome
```

- O email deve ser o mesmo que você utilizou para se registrar no GitHub

Pronto, agora que tudo está devidamente instalado e configurado, vamos ao próximo passo.

------

### Parte 2 - Criar conta no ***GitHub***

- [Crie sua conta no ***GitHub\*** usando seu e-mail pessoal ](https://github.com/join)🐙

------

### Parte 3 - Adicionando uma chave SSH na sua conta do ***GitHub***

Neste passo, vamos aprender como adicionar uma chave SSH à sua conta do ***GitHub\*** , o que vai te permitir fazer *pushes* e *pulls* sem ter que ficar digitando usuário e senha, como já explicamos. É de extrema importância que você siga **TODOS** os passos apresentados no artigo, apenas dessa forma você obterá o resultado esperado.

#### Gerando uma chave SSH

Abra seu terminal e digite o comando abaixo. Ele cria uma nova chave SSH, usando o seu email como rótulo.

> É preciso que o e-mail informado seja o mesmo que você utilizou para criar a sua conta no GitHub

Copiar

```shell
ssh-keygen -t rsa -b 4096 -C "seuemail@gmail.com"
```

Durante o processo irá aparecer escrito no terminal `Enter a file in which to save the key` , quando isso acontecer pressione `Enter` para aceitar a localização padrão `/home/you/.ssh/id_rsa` .

Copiar

```shell
Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]
```

Agora você deve digitar uma senha segura.

Copiar

```shell
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```

#### Adicionando sua chave SSH ao ssh-agent

Primeiro você deve iniciar o `ssh-agent` em background:

Copiar

```shell
eval "$(ssh-agent -s)"
```

Agora você deve adicionar sua chave privada SSH ao `ssh-agent` . Para isso execute o comando abaixo no terminal:

Copiar

```shell
ssh-add ~/.ssh/id_rsa
```

#### Adicionando a chave SSH na sua conta do GitHub

Antes de tudo você deve copiar a sua chave SSH. Para isso, você vai aprender um comando bem útil, mas que nem sempre vem instalado nativamente no Linux: o `xclip` .

Para entender como funciona o `xclip` , temos que nos perguntar uma coisa: como se copia um texto ou uma parte dele quando estamos trabalhando com um ambiente de terminal? Provavelmente a primeira coisa que se passou pela sua cabeça foi abrir o arquivo em um editor de texto, selecionar aquilo que você deseja copiar, fechar o editor de texto e depois colar em outro lugar.

Não há nada de errado com essa lógica: ela funciona, mas convenhamos que dá pra ser um pouquinho mais eficiente, né? Aí entra o tal do `xclip` . Usando esse comando podemos fazer uma ponte diretamente entre os comandos que serão utilizados no terminal e a área de transferência do Linux, ou seja, dá pra copiar a saída de um comando de forma direta pelo terminal!

Vamos ver como funciona? Execute a sequência de comandos abaixo:

Copiar

```shell
# Como o xclip não vem instalado por padrão na maioria das distribuições,
# precisaremos instalá-lo usando o comando a seguir:
sudo apt-get install xclip

# Agora utilize o comando abaixo para copiar o conteúdo da sua chave id_rsa.pub
# Para garantir que o conteúdo foi copiado dê Ctrl + V em um editor de texto
xclip -sel clip < ~/.ssh/id_rsa.pub
```

Caso o `xclip` não funcione, execute o comando abaixo e copie manualmente a saída do terminal.

Copiar

```shell
cat ~/.ssh/id_rsa.pub
```

Entre no seu ***GitHub*** e siga os passos abaixo:

- No canto superior direito do ***GitHub\*** , clique na sua foto de perfil e clique em **Settings** ;
- Na barra lateral esquerda, clique em **SSH and GPG keys** ;
- Clique em **New SSH key** ou **Add SSH key** ;
- No campo `Título` , adicione um descrição para a nova chave;
- Cole sua chave dentro do campo `Key` ;
- Clique em **Add SSH key** ;
- Caso seja solicitado, confirme sua senha do Github.

Se tiver problemas ao seguir o tutorial acima, consulte a [documentação oficial do ***GitHub\*** ](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

------

### Parte 4 - O seu repositório no ***GitHub***

Pronto! Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o ***GitHub*** , é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre [Portfólio de Exercícios ](https://app.betrybe.com/course/real-life-engineer/exercise-portfolio/)para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na *Trybe* , seus projetos serão entregues através de `pushes` nos repositórios do ***GitHub*** . Para podermos simular um exercício feito, você criará um arquivo `.txt` com um nome de sua escolha (Exemplo: `trybe-skills.txt` ) e utilizará o conteúdo abaixo.

Copiar

```txt
O que eu vou aprender na Trybe:

- Unix
- Bash
- Git
```

No final, ao executar o comando `ls -l` na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

Copiar

```sh
ls -l

total 0
-rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt
```

Agora vamos transformar essa pasta em um repositório ***Git\*** :

- Retorne para a raiz da pasta de exercícios;
- Inicialize o repositório com `git init` ;
- Crie um arquivo de `README` utilizando o comando `touch README.md` ;
- Crie um `commit` inicial utilizando:

Copiar

```sh
git add .
git commit -m "Initial commit"
```

- Vá até o seu *GitHub* e [crie um repositório público ](https://help.github.com/en/github/getting-started-with-github/create-a-repo), onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
  - Dê ao repositório um nome descritivo, como por exemplo `trybe-exercicios` ;
  - ⚠️ Lembre-se de **não** inicializar o repositório com um arquivo `README.md` , pois você já criou um nos passos anteriores! 😉
- Clique no botão **SSH** e então copie a *URL* do repositório;
  - Execute o comando para adicionar a *URL* ao repositório local `git remote add origin "URL_DO_REPOSITÓRIO"` ;
- Verifique se tudo está certo com sua *URL* remota utilizando o comando `git remote -v` . Seu terminal deve conter algo similar a isso:

Copiar

```shell
origin  git@github.com:john-snow/know-nothing.git (fetch)
origin  git@github.com:john-snow/know-nothing.git (push)
```

- Em que `john-snow` corresponde ao seu username e `know-nothing` ao nome que você deu ao seu repositório;
- Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro `commit` para o ***GitHub\*** ! 🤩
- Execute o comando `git push origin master` no terminal;
- Vá até o seu GitHub e verifique as novas alterações.

Agora que tal adicionar uma descrição do que é seu repositório no `README.md` ? 💪🏼.

- O `README.md` que você recriou é referente ao repositório `trybe-exercicios` , tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
- Uma outra coisa interessante a se fazer é adicionar um `README.md` dentro do **diretório de exercícios do dia** para colocar a descrição dos exercícios que você desenvolveu;
- Lembre-se de fazer um *commit* quando terminar de alterar os arquivos;
- Depois do *commit* , faça sempre um *push* ;
- Confira as alterações no **GitHub** .

------

### Parte 5 - Habilitando Two Factor Authentication no seu ***GitHub***

Você pode estar se perguntando, o que é Two Factor Authentication?

Se for o caso ainda bem que você está aqui e podemos te ajudar com isso. Two Factor Authentication ou 2fa (autenticação de dois fatores) é um processo de autenticação que combina dois ou mais fatores. Legal, mas isso não explica muita coisa, né?

Bom, pense que você está acessando sua conta em algum lugar, você precisa digitar sua senha, não é mesmo? Isso é um processo de autenticação, mas quando falamos de 2FA queremos uma outra camada de autenticação. Mas por que? Segurança, fica muito mais difícil acessarem sua conta se precisarem passar por mais processos, concorda?

Hoje queremos que você habilite isso em seu github, afinal mais segurança sempre cai bem, não é mesmo?

Existem vários processos possíveis para usarmos no 2FA, mas vamos falar sobre TOTP's apps (time-based one-time password) que geram um token de uso único com validade determinada.

Caso se sinta confortável, há um guia do próprio github ensinando como fazer esse processo [neste link ](https://docs.github.com/pt/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication), porém ele ainda não está traduzido, mas vamos explicar passo a passo como fazer esse processo por aqui.

#### 1 - Baixe um aplicativo TOTP

Em seu celular, escolha um aplicativo dessa categoria, recomendamos os seguintes:

- [Authy](https://authy.com/guides/github/)
- [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)

#### 2 - Faça essas alterações na sua conta do Github

Acesse qualquer página do github. Na parte superior direita clique em sua imagem de perfil, e então clique em "Settings";

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/GithubProfilePicture-6ed1e22a47b1d7d0691b9a74007751fc.png)

Clique na foto de perfil e então em settings

Feito isso, você estará na página de configurações do seu perfil no Github. Agora, no menu lateral esquerdo clique em "Account security";

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/GithubYourProfile-136deb7ea11ffc7398725bc8c91734c2.png)

No menu lateral esquerdo, clique em Account Security

Localize na página que foi aberta a parte que diz "Two-factor authentication" ou "Autenticação de dois fatores" e clique no botão verde escrito "Enable two-factor authentication" ou "Habilitar autenticação de dois fatores";

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/GithubAccountAndSecurity-1884e18cd61bbd13bb597088c6cd1235.png)

Clique em Enable two-factor authentication

Estamos quase lá, você deve cair numa página com um QR code. Abra o aplicativo que você baixou em seu celular e escaneie esse QR-code. Se não conseguir escanear, clique em "enter this text code" e adicione manualmente o código mostrado em seu app.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/githubVerifyAuthentication-5ab66e215ede38534512b50dce1cc192.png)

Escaneie o QR code ou clique em enter this text code

Um código de 6 dígitos será mostrado em seu app. Digite no espaço abaixo do QR code;

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/githubAppEnteCode-9e2f00efe40fb1f8fad6975a5f48e22f.png)

Digite o código exibido pelo seu app

Estamos quase acabando, agora você verá algo semelhante a imagem abaixo. São códigos de recuperação de sua conta caso você perca o acesso a mesma. Clique em download e salve esse arquivo em algum lugar seguro. Se tiver alguma maneira de backup pode ser legal salvar lá também.

![img](https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/fundamentals/git/images/GithubSaveYourVerificationCodes-abbe2ad3dfeed2cb33ace5810cf8f6f6.png)

Salve seus códigos de recuperação de conta

Clique em "I have saved my recovery codes". Isso habilitará a 2fa em sua conta, mas recomendamos que você saia e entre de volta em sua conta do github. Em caso de qualquer problema você terá seus códigos para recuperação da mesma.

Agora sua conta está muito mais segura!!!