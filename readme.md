# React Native Create Auth App with Expo

User Login & Logout with Firebase Authentication 

## User Login!

![login-form](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_400,w_300/v1500284453/auth-expo/login-form.jpg)

## User Logout!

![logout](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_400,w_300/v1500302449/auth-expo/logout.jpg)

Open Expo Desktop

Create new project

    beri nama: auth-expo-almaksum atau authExpoAlmaksum

atau dari Terminal (CLI) exp init authExpoAlmaksum

Share view dengan Android atau iOS

Open file project with editor

Create readme file --> readme.md

Work with GIT, [Install Git di Windows](https://git-for-windows.github.io/), [my GIT notes](https://github.com/vanbumi/CodeJournal/tree/master/GIT)

Create repository [Github](https://github.com/)

Push file ke repository

## 1. App Introduction

![3-diagram-app](http://res.cloudinary.com/medioxtra/image/upload/c_scale,h_351,w_300/v1500363795/auth-expo/3-diagram-app.jpg)

## 2. Root Component

Buka expo dan buka folder project 

Share pada device anda.

Buka folder dengan Visual Code Studio anda.

App.js --> default code:

    import React from 'react';
    import { StyleSheet, Text, View } from 'react-native';

    export default class App extends React.Component {
      render() {
        return (
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app! oke bro!</Text>
          </View>
        );
      }
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

Ganti dengan **Hello, world!**    

## 3. Copy reusable Component dan tempatkan di folder common:

* Button
* Card
* CardSection
* Header

Membuat file baru common/index.js :

    export * from './Button';
    export * from './Card';
    export * from './CardSection';
    export * from './Header';
    export * from './Input';
    export * from './Spinner';

Fungsi dari file index ini adalah untuk menghilangkan repetisi import saat menggungunakn component. Jadi import hanya ditulis 1 baris saja:

    import { Header, Button dll } from './components/common';

## 4. What is Firebase?

## 5. Setup Firebase 

  npm install --save firebase

## 6. Login Form

## 7. Handle User Input

## 8. More Handle User Input

## 9. Making text input 

## 10. Create text input from scratch

## 11. Passing props

## 12. Input style

## 13. Wrap up Input

## 14. Password Input

## 15. Login User

## 16. Error handling

## 17. Auth Flow

## 18. Menambahkan Spinner.

Import spinner "ActivityIndicator" from react-native;

## 19. Membuat kondisi Spinner & Button.

## 20. Menambahkan Logic untuk Spinner.

Membuat helper methode untuk mengatur login success

## 21. Handle Authentication Event

Tambahkan pada root file --> App.js

  firebase.auth().onAuthStateChanged(() => {

  });

## 22. Conditional rendering and finish.

## Howe Work

1. Clone dari repo saya.
2. Tempatkan di folder kerja anda.
3. Jalankan dengan Expo.
4. Apa yang terjadi?
5.  
