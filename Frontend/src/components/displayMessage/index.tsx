import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
const DisplayMessage=(text)=>{

    Toastify({

        text: text,
          close: true,
        duration: 3000
        
        }).showToast();
        
        
}
export default DisplayMessage;