import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ShowToast = () => {

    const handleToast = () => {
          toast('verification successful')
    }

    return (
        <div>
            <button onClick={handleToast} >Send Email</button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ShowToast;