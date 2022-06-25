![](https://i.imgur.com/xG74tOh.png)

# Exercício 08

## Meus pets

1. Abaixo, temos uma lista de pessoas, onde cada pessoa, possui uma lista com um, vários ou nenhum pet. Percorra cada pessoa da lista e imprima uma mensagem de acordo com as condições a seguir.

a. Se a pessoa não tiver pets, a mensagem deve ser: `Sou João e não tenho pets`.

b. Se a pessoa tiver apenas um pet, a mensagem deve ser: `Sou João e tenho 1 pet`.

c. Se a pessoa tiver mais de um pet, a mensagem deve ser: `Sou João e tenho 3 pets`.

```javascript
const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
```

Obs.: O nome da pessoa e a a qantidade de pets deve ser dinâmico, de acordo com as informações de cada objeto.

_Dica: a desestruturação pode facilitar a escrita do código, além de torná-lo mais legível._

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
