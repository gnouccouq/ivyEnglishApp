// Sử dụng firebase/app thay vì đường dẫn CDN
import { initializeApp } from 'firebase/app';
// Sử dụng react-native-async-storage để lưu đăng nhập
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAREfErrNqreMGKPzROSYDg2UqFKjXmBvU",
    authDomain: "ivyenglish-chinese-web-project.firebaseapp.com",
    projectId: "ivyenglish-chinese-web-project",
    storageBucket: "ivyenglish-chinese-web-project.firebasestorage.app",
    messagingSenderId: "974411213659",
    appId: "1:974411213659:web:4bf823b46924a9d159487e",
    measurementId: "G-6MXGKCSLSK"
};

const app = initializeApp(firebaseConfig);

// Cấu hình Auth để nhớ đăng nhập trên điện thoại
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
