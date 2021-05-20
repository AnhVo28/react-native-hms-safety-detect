## React Native: How to check whether the device running your app is secure, for example, whether it is rooted via HMS Safety Detect?


## Introduction
HUAWEI Safety Detect builds robust security capabilities, including system integrity check (SysIntegrity), app security check (AppsCheck), malicious URL check (URLCheck), fake user detection (UserDetect), and malicious Wi-Fi detection (WifiDetect), into your app, effectively protecting it against security threats.

This demo project will focus on using SysIntegrity API.


## Run the app

Install libs in react native

    ```
    npm install
    ```
    
    or
    
    ```
    yarn install
    ```
    

then run the app

    ```
    npx react-native run-android