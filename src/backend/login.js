class Login extends React.component{// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAUX6LYgq4rQnk0XiFSCz2A2cIcQbowvHI",
    authDomain: "rescueshelter-5cbc9.firebaseapp.com",
    projectId: "rescueshelter-5cbc9",
    storageBucket: "rescueshelter-5cbc9.appspot.com",
    messagingSenderId: "254604268235",
    appId: "1:254604268235:web:e781b5cdbd497d91b8014e",
    measurementId: "G-BTQPHMQDGZ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  const auth = firebase.auth();
;
var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://www.example.com/finishSignUp?cartId=1234',
  // This must be true.
  handleCodeInApp: true,
  iOS: {
    bundleId: 'com.example.ios'
  },
  android: {
    packageName: 'com.example.android',
    installApp: true,
    minimumVersion: '12'
  },
  dynamicLinkDomain: 'example.page.link'
};

  
function signUp(){
    let username= document.getElementById("email").value
    let password= document.getElementById("password").value
   
    const promise = auth.createUserWithEmailAndPassword(username, password);

    promise.catch(e => alert(e.message));
    alert("Signed Up");
    
    firebase.auth().sendSignInLinkToEmail(username, actionCodeSettings)
  .then(() => {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

}

function signIn(){
		
  let username= document.getElementById("email").value
  let password= document.getElementById("password").value
 
  const promise = auth.signInWithEmailAndPassword(username, password);

    promise.catch(e => alert(e.message));
    
    
    alert("Logged In: " +username);
    
}

}
export default Login;