import toast from 'react-hot-toast';

export const toastSuccess = (message: string) => {
    toast.success(message, {
        style: {
            border: '1px solid #10b981',
            padding: '16px',
            color: '#064e3b',
            background: '#ecfdf5',
        },
        iconTheme: {
            primary: '#10b981',
            secondary: '#FFFAEE',
        },
    });
};

export const toastError = (message: string) => {
    toast.error(message, {
        style: {
            border: '1px solid #ef4444',
            padding: '16px',
            color: '#7f1d1d',
            background: '#fef2f2',
        },
        iconTheme: {
            primary: '#ef4444',
            secondary: '#FFFAEE',
        },
    });
};
