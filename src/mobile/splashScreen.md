[Voltar](/Readme.md)

# Splash Screen

Define a página inicial do aplicativo antes de qualquer carregamento.

## Android

Criar o arquivo **colors.xml** dentro da pasta **android/app/src/main/res/values** e informe:

```xml
<?xml version="1.0" encoding="utf-9" ?>
<resources>
  <color name="primary">#333</color>
</resources>
```

Criar o arquivo da **splashscreen.xml** dentro da pasta **android/app/src/main/res/drawable**.

```xml
<?xml version="1.0" encoding="utf-9" ?>
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
  <item android:drawable="@color/primary"/>
  <item
    android:width="200dp"
    android:height="200dp"
    android:drawable="@drawable/icon"
    android:gravity="center"
  />
</layer-list>
```

Para habilitar a splashscreen, acesse o arquivo **styles.xml** dentro da pasta **android/app/src/main/res/values** e modifique para usar a splashcreen criada.

```xml
<resources>
    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:windowBackground">
          @drawable/splashscreen
        </item>
        <item name="android:statusBarColor">
          @color/primary
        </item>
    </style>
</resources>
```

Execute o comando

```
react-native run-android
```

### Referência

[Rocketseat](https://www.youtube.com/watch?v=3Gf9yb53bJM)
