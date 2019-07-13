[Voltar](/Readme.md)

# Ícone da Aplicação (launch Icon)

Para configurar o ícone da aplicação, será necessário alterar os arquivos da pasta do sistema operacional da sua aplicação. Localizado na pasta Android e/ou iOS.

Para criar os ícons da aplicação, acesse o site [Ape Tools](https://apetools.webprofusion.com/#/tools/imagegorilla), informe o ícone 1024x1024, selecione (include in bundle) o Android e iOS e clique em **kapow** depois clique em DownloadZip.

Nesse arquivo estará todos os tamanhos dos ícones da aplicação.

## Android

Copiar as pastas de dentro da pasta **android**, do arquivo baixado, para a pasta **android/app/src/main/res** e apague as pastas **mipmap**.

Altere a referência dos ícones para a nova pasta. Abra o arquivo **androidManifest.xml** da pasta **android/app/src/main** e altere a referência do **android:icon** e **android:roundIcon** para @drawable/icon.
