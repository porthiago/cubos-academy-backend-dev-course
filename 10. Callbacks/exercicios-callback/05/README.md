![](https://i.imgur.com/xG74tOh.png)

# Exercício 05

## Timer 2.0

Agora vamos melhorar o nosso timer da questão anterior! E para isso vamos implementar a função soneca.

Logo após iniciar, o seu programa deverá imprimir na tela uma mensagem de início do timer: "`Timer iniciado, disparando alarme em X segundos!`". Note que `X` corresponde ao tempo em que o seu programa irá aguardar para enfim despertar.

O seu programa deverá aguardar o tempo em segundos especificado na variável `tempoParaAlarmarEmSegundos`, só então irá despertar mostrando repetidamente a mensagem "`Beep beep!`", uma mensagem a cada segundo, até que o tempo da variável `tempoAlarmandoEmSegundos` se esgote.

Após o fim do despertar o seu programa deverá imprimir em tela a mensagem "`Soneca ativada, próximo alarme em X segundos`", onde `X` corresponde ao tempo em que o seu programa permanecerá em modo soneca e é determinado pela variável `tempoSonecaEmSegundos`, passado este tempo o seu programa deverá despertar novamente e assim sucessivamente até que se cumpram o número de sonecas definido na variável `numeroDeSonecas`.

Por fim, é necessário imprimir na tela a mensagem "`Fim do Timer!`" e o programa é finalizado.

Exemplo:

```javascript
let tempoParaAlarmarEmSegundos = 10;
let tempoAlarmandoEmSegundos = 5;
let tempoSonecaEmSegundos = 10;
let numeroDeSonecas = 2;
```

Para os valores atribuídos as variáveis acima, o seu programa deverá imprimir:

```
Timer iniciado, disparando alarme em 10 segundos!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Soneca ativada, próximo alarme em 10 segundos
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Soneca ativada, próximo alarme em 10 segundos
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Beep beep!
Fim do Timer!
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
