[Voltar](/Readme.md)

# Publicando

Recompilar 
```
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```

Apagar a pasta Debug

Gerar os APKs
```
cd android && ./gradlew clean && ./gradlew assembleDebug && cd ..
```
