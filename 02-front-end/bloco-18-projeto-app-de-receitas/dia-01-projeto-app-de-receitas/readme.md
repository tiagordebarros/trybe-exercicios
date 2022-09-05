# App de Receitas (Projeto) 📚

Projeto desenvolvido em React, com o uso de Context API e React Hooks. Testado com  React Testing Library. Analisado com ESLint e StyleLint. Clique [aqui](https://tiagordebarros.github.io/projetos/recipes-app/index.html) para visualizá-lo.

**Requisitos:**

- [ ] 1 - Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%
- [x] 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login
- [x] 3 - Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha
- [x] 4 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos
- [x] 5 - Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave user e os tokens nas chaves mealsToken e cocktailsToken
- [x] 6 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login
- [x] 7 - Implemente o header de acordo com a necessidade de cada tela
- [x] 8 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil
- [x] 9 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la
- [x] 10 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo
- [x] 11 - Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter
- [x] 12 - Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas
- [x] 13 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL
- [ ] 14 - Mostre as receitas em cards, caso mais de uma receita seja encontrada
- [x] 15 - Exiba um alert caso nenhuma receita seja encontrada
- [x] 16 - Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas
- [x] 17 - Exiba o menu inferior apenas nas telas indicadas pelo protótipo
- [x] 18 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior
- [x] 19 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card
- [x] 20 - Implemente os botões de categoria para serem utilizados como filtro
- [x] 21 - Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria
- [x] 22 - Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro
- [x] 23 - Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL
- [x] 24 - Realize uma request para a API passando o id da receita que deve estar disponível nos parâmetros da URL
- [x] 25 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações
- [x] 26 - Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida
- [x] 27 - Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um carousel
- [x] 28 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo
- [x] 29 - Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça
- [ ] 30 - Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"
- [ ] 31 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso
- [x] 32 - Implemente um botão de compartilhar e um de favoritar a receita
- [x] 33 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer
- [x] 34 - Salve as receitas favoritas no localStorage na chave favoriteRecipes
- [x] 35 - Implemente o ícone do coração (favorito) de modo que: deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário
- [ ] 36 - Implemente a lógica no botão de favoritar. Caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa
- [x] 37 - Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções
- [x] 38 - Desenvolva um checkbox para cada item da lista de ingredientes
- [ ] 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista
- [ ] 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita
- [ ] 41 - Desenvolva a lógica de favoritar e compartilhar. A lógica da tela de detalhes de uma receita se aplica aqui
- [ ] 42 - Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem "checkados" (marcados)
- [ ] 43 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser /done-recipes
- [x] 44 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo
- [x] 45 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar
- [x] 46 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
- [x] 47 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
- [x] 48 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
- [x] 49 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita
- [x] 50 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo
- [x] 51 - Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"
- [x] 52 - Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
- [x] 53 - Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
- [x] 54 - Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do localStorage e da tela
- [x] 55 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
- [x] 56 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita
- [x] 57 - Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo
- [x] 58 - Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
- [x] 59 - Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"
- [x] 60 - Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas
- [x] 61 - Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas
- [ ] 62 - Redirecione a pessoa usuária que ao clicar no botão de "Logout", o localStorage deve ser limpo e a rota deve mudar para a tela de login

---

