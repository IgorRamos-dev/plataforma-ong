# Validação W3C (Entrega I)

Este repositório contém um workflow do GitHub Actions que valida **todos os arquivos HTML** automaticamente a cada `push` e `pull_request`.

## Como usar
1. Faça **push** deste código para um repositório no GitHub (público de preferência).
2. Acesse a aba **Actions** do repositório: você verá a execução **"W3C HTML Validation"**.
3. Clique na execução para ver os resultados (erros/avisos e linhas afetadas).

> Se o seu branch padrão for `master` (e não `main`), edite `.github/workflows/w3c.yml` e troque:
> ```yaml
> branches: [ "master" ]
> ```

## Dica extra (validação por URL)
Ative o **GitHub Pages** em **Settings → Pages → Branch: main → /(root)** e use o link do site no **https://validator.w3.org/** (aba "Validate by URL").
