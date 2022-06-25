![](https://i.imgur.com/xG74tOh.png)

# Exercício 04

## Timer

Desenvolva um programa que simula um timer simples.

Logo após iniciar, o seu programa deverá imprimir na tela uma mensagem de início do timer: "`Timer iniciado, disparando alarme em X segundos!`". Note que `X` corresponde ao tempo em que o seu programa irá aguardar para enfim despertar.

O seu programa deverá aguardar o tempo em segundos especificado na variável `tempoParaAlarmarEmSegundos`, só então irá despertar mostrando repetidamente a mensagem "`Beep beep!`", uma mensagem a cada segundo, até que o tempo da variável `tempoAlarmandoEmSegundos` se esgote.

Por fim, o programa é finalizado.

Exemplo:

```javascript
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
```

Para os valores atribuídos as variáveis acima, o seu programa deverá imprimir:

```
Timer iniciado, disparando alarme em 10 segundos!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
```

Fique a vontade para criar outras variáveis ou constantes caso julgue necessário.

Dica: Utilizar `setTimeout()`, `setInterval()`.

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [ ] Resolver o exercício revendo a aula se necessário
-   [ ] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [ ] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [ ] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)

###### tags: `backend` `lógica` `exercício de classe` `nodeJS` `JavaScript`
