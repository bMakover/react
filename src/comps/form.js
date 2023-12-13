import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors }, getValues } = useForm();

    const onSub = (dataBody) => {
        
        console.log(dataBody);
    };

    const nameRef = register('name', { required: true, minLength: 2 });
    const emailRef = register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i });
    const passwordRef = register('password', { required: true });
    const email2Ref = register('email2', {
        required: true,
        validate: (val) => {
            return val === getValues('email');
        }
    });

    return (
        <div className='container'>
          
            <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-2'>
                <label>Name:</label>
                <input {...nameRef} type="text" className='form-control' />
                {errors.name && <div className='text-danger'>* Enter valid name: min 2 chars</div>}

                <label>Email:</label>
                <input {...emailRef} type="text" className='form-control' />
                {errors.email && <div className='text-danger'>* Enter valid email</div>}

                <label>Confirm Email:</label>
                <input {...email2Ref} type="text" className='form-control' />
                {errors.email2 && <div className='text-danger'>* email address do not match</div>}

                <label>password:</label>
                <input {...passwordRef} type="text" className='form-control' />
                {errors.password && <div className='text-danger'>* Password is required</div>}

                

                <button className='btn btn-info mt-3'>Send</button>
            </form>
        </div>
    );
};

export default Form;