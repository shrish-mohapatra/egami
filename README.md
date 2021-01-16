# Egami
![Node.js](https://img.shields.io/badge/-Node.js-000?style=flat&logo=node.js)
![React](https://img.shields.io/badge/-React-000?style=flat&logo=React)
![MongoDB](https://img.shields.io/badge/-MongoDB-000?style=flat&logo=mongodb)
![Express](https://img.shields.io/badge/-Express-000?style=flat&logo=Express)
![Firebase](https://img.shields.io/badge/-Firebase-000?style=flat&logo=Firebase)

<img src="https://i.imgur.com/lgdp2RK.jpg">

> A web based image repository developed for Summer 2021 Shopify Developer Intern Challenge.

## Features

### Cloud Storage for Images
<img src="https://media.giphy.com/media/ybdLSug1TLUOxavIMd/giphy.gif">

Users can upload locally stored images to **egami**, adding information regarding title, description, and whether or not they wish the picture to be public. The images are processed by the server and then uploaded to Google Cloud Storage.

### Secure Authentication
<img src="https://media.giphy.com/media/tHovtv8jae8LVm56uW/giphy.gif">

Users can register for accounts to login and start uploading pictures.


## REST API
| Route        | Method         | Params  | Return  |
| ------------- |:-------------:| -----:| -----:|
| /api/users/signup | POST | {name, email, password} | {token**, user, message}    |
| /api/users/login  | POST | {email, password} | {token**, user, message}    |
| | | |
| /api/images/get | GET | {title*, tags*, private*} | {results}    |
| /api/images/create | POST | {upload***, title, description*, tags*} | {message, image}    |
| /api/images/edit | PUT | {imageID, title*, tags*, public*} | {message, image}    |
| /api/images/remove | DELETE | {imageID} | {message}    |

*optional fields

**note that tokens are required in subsequent request headers (key is `token`)

***upload can be a .png or .jpg file


## Running application (development)
### Setup services
1. Create Firebase project from [here](https://console.firebase.google.com/)
2. Download `service-account-file.json`.
3. Select **Storage** from left panel and click *Get Started*.
4. Create a MongoDB Atlas cluster and select **Connect**.

### Running server
1. Clone repository: `git clone https://github.com/shrish-mohapatra/egami.git`
2. Create the following file in `/config/keys.js`:
    ```js
    module.exports = {
        bucketName: "<YOUR_GOOGLE_STORAGE_BUCKET_NAME>",
        firebaseKeyDirectory: "./config/service-account-file.json",
        database: "<YOUR_MONGO_DB_ATLAS_URI>",
        key: "<RANDOM_KEY>",
    }
    ```
3. Run the following commands:
    ```bash
    cd egami
    npm i
    npm run dev
    ```