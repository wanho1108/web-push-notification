// Initialize Firebase
var config = {
  apiKey: "AIzaSyAOx-I5-5_cwFP5dlRzwSASC14Ir59Tw1k",
  authDomain: "web-push-notification-ed87d.firebaseapp.com",
  databaseURL: "https://web-push-notification-ed87d.firebaseio.com",
  projectId: "web-push-notification-ed87d",
  storageBucket: "web-push-notification-ed87d.appspot.com",
  messagingSenderId: "308094456605"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
  .then(function () {
    console.log('permission Ok');
    return messaging.getToken();
  })
  .then(function (token) {
    console.log('token:', token);
  })
  .catch(function () {
    console.log('permission Fail');
  });

messaging.onMessage(function (payload) {
  console.log('onMessage:', payload);
});