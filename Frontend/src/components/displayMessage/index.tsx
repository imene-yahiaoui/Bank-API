import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const DisplayMessage = (text:string, background:string) => {
  Toastify({
    text: text,
    close: true,
    duration: 3000,
    style: {
      background: background,
    },
  }).showToast();
};
export default DisplayMessage;
