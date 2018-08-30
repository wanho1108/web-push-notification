importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');

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

/*

curl -X POST -H "Authorization: key=AIzaSyAOx-I5-5_cwFP5dlRzwSASC14Ir59Tw1k" -H "Content-Type: application/json" -d '{
  "notification": {
    "title": "Portugal vs. Denmark",
    "body": "5 to 1",
    "icon": "firebase-logo.png",
    "click_action": "http://localhost:3000"
  },
  "to": "cYfICUq5PL4:APA91bGJnhT9lbsP-j3_VwZ2xCgINjIbTbi88wvrDP2tkk0aWoRo6uvdLkuL0cARTzZMWCGxXkGwjuRwF5eeTowkkEONYtCUfRRu35hDk3TzFV-IJhwCSAo5JIwnvIgl8TA3cMRz7Kg9"
}' "https://fcm.googleapis.com/fcm/send"

*/