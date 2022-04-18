import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ShowToast = () => {
    const [toasts , setToasts] = useState('')

    const handleToast = () => {
          toast('verification successful')
    }

    return (
        <div>
             <>
              handleToast()
              </>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowToast;