# Getting Started with Create React App

demo: https://master--fluffy-tiramisu-c64e55.netlify.app/

Api Key: cfa7be7e6a98bcd9e6bab490d923e87c

Kullandığım Tüm Kütüphane Ve Teknolojiler 

- typescript
- react 
- redux
- redux-saga
- react-router-dom
- formik
- yup 
- testing-library/react
- node-sass
- react-icon
- axios

# Docker ile başlamak için

Bu projeyi Docker ile çalıştırmanın iki yolu vardır:

1- docker deposundan resmi olarak indirebilirsiniz;

docker pull ismailbecit/weather-api

İndirdiğiniz imajı çalıştırmak için;

docker run -d -p 3000:3000 ismailbecit/weather-api


-d, konteynerin arka planda çalışmasını sağlamaktır.
-p kullanacağınız portları belirlemektir.
ve son olarak resmin adı.

2- dockerfile dosyasını image'e dönüştürebilirsiniz.

docker build -t weather-api .


-t, kapsayıcıya veya etiketlere de ad verir.
. dockerfile'ın nerede olduğunu göstermektir.

oluşturduğunuz görüntüyü çalıştırmak için;

docker run -d -p 3000:3000 ismailbecit/weather-api

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
