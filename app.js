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
    console.log('succ');
    return messaging.getToken();
  })
  .then(function (token) {
    console.log(token);
  })
  .catch(function () {
    console.log('fail');
  });

messaging.onMessage(function (playload) {
  console.log('onMessage:', payload);
});