import {useState} from 'react'

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async({fullName, username, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, username, password, confirmPassword, gender}) 
        if(!success) return;
        
        }
}

export default useSignup
