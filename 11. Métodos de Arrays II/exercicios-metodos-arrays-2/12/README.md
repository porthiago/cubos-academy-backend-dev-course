![](https://i.imgur.com/xG74tOh.png)

# Exercício 12

## Filtro de usuários

Analise o array abaixo e faça um sistema que atenda os requisitos abaixo.

```javascript
const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]
```

Filtre o array e retorne apenas os `programadores` que sejam maiores de `20 anos`;

Para o requisito acima, o resultado deve ser:

```
[
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
]
```

Filtre o array e retorne apenas os `jornalistas` que tenha mais de `30 anos`;

Para o requisito acima, o resultado deve ser:

```
[
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    }
]
```

Filtre o array e retorne os `jornalistas` e `programadores` que sejam jovens. Sabendo que, segundo o IBGE, é considerado jovem aquele que tem até `29 anos`;

Para o requisito acima, o resultado deve ser:

```
[
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    }
]
```

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício` `nodeJS` `JavaScript`
