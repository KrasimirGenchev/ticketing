import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { doRequest, errors } = useRequest({
        url: '/api/users/signin',
        method: 'post',
        body: {
            email, password
        },
        onSuccess: () => Router.push('/')
    })

    // const showErrors = (errors) => (
    //     <div className='alert alert-danger'>
    //         <h4>Ooops...</h4>
    //         <ul className='my-0'>
    //             {errors.map(error => <li key={error.message}>{error.message}</li>)}
    //         </ul>
    //     </div>
    // );

    const onSubmit = async (event) => {
        event.preventDefault();

        doRequest();
    };

    return (
        <form onSubmit={onSubmit}>
            <h1>Sign in</h1>
            <div className="form-group">
                <label>Email Adress</label>
                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            {errors}
            <button className="btn btn-primary">Sign In</button>
        </form>
    )
};

export default Signup;