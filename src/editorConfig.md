[Voltar](/Readme.md)

# EditorConfig

EditorConfig é um arquivo que adicionado ao projeto, garante que o desenvolvedor que estiver utilizando o editor, tenha as mesmas configurações de linha, espaçamentos, salto de linha, isso indepentemente de qual editor esteja utilizando, seja vscode, sublime, etc.

## Configurando

- Adicionar extensão do editorconfig.

Adicionar o arquivo **.editorconfig** na raiz do projeto com as seguintes informações:

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
end_of_line = lf
```
