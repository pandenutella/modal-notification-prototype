import axios from "axios";

const firebaseClient = axios.create({
  baseURL:
    "https://modal-notification-prototype-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default firebaseClient;
