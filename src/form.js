import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSub = (dataBody) => {
        delete dataBody.phone2;
        console.log(dataBody);
    };

    const nameRef = register('name', { required: true, minLength: 2 });
    const phoneRef = register('phone', { required: true, minLength: 5 });
    const emailRef = register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
    const colorRef = register('color', { required: true });
    const phone2Ref = register('phone2', {
        required: true,
        validate: (val) => {
            return val === getValues('phone');
        }
    });

    return (
        <div className='container'>
            <h2>Form in react</h2>
            <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-2'>
                <label>Name:</label>
                <input {...nameRef} type="text" className='form-control' />
                {errors.name && <div className='text-danger'>* Enter valid name: min 2 chars</div>}

                <label>Phone:</label>
                <input {...phoneRef} type="text" className='form-control' />
                {errors.phone && <div className='text-danger'>* Enter valid phone: min 5 chars</div>}

                <label>Email:</label>
                <input {...emailRef} type="text" className='form-control' />
                {errors.email && <div className='text-danger'>* Enter a valid email address</div>}

                <label>Color:</label>
                <input {...colorRef} type="text" className='form-control' />
                {errors.color && <div className='text-danger'>* Color is required</div>}

                <label>Confirm Phone:</label>
                <input {...phone2Ref} type="text" className='form-control' />
                {errors.phone2 && <div className='text-danger'>* Phone numbers do not match</div>}

                <button className='btn btn-info mt-3'>Send</button>
            </form>
        </div>
    );
};

export default Form;