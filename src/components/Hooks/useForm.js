import { useState } from 'react';

const useForm = (formData) => {
    const [values, setValues] = useState(formData)

    return [values,
    e => setValues({
        ...values,
        [e.target.name]: e.target.value
    })]
}

export default useForm
