
# Especificação dos Formulários

## Cadastro de voluntário (voluntariado.html)
Campos: nome (text), cpf (masked), telefone (masked), email (email), cep (masked), endereço (text), habilidades (text), disponibilidade (select), motivação (textarea).
Validação: `required`, `type="email"`, `pattern` no CPF, máscaras JS.

## Inscrição em projetos (inscricao.html)
Campos: projeto (select), experiência (textarea), motivação (textarea).
Validação: `required`.

## Contato institucional (contato.html)
Campos: assunto (text), mensagem (textarea), anexos (file, múltiplos).
Validação: `required` para assunto/mensagem.

## Newsletter (template)
<form class="js-demo-submit">
  <label for="nemail">E-mail</label>
  <input id="nemail" type="email" required>
  <fieldset>
    <legend>Preferências</legend>
    <label><input type="checkbox"> Projetos</label>
    <label><input type="checkbox"> Voluntariado</label>
    <label><input type="checkbox"> Transparência</label>
  </fieldset>
  <button class="btn" type="submit">Assinar</button>
</form>
