import React,{useState} from 'react'

export const Register = () => {
  
    const [register, setRegister] = useState({

        username:'',
        password:'',
        confirmPassword:'',
        email:''

    })

    const {username,password,confirmPassword,email} = register
    
    const onChange = (e) => {

        setRegister((prevState)=>{

            return({
            ...prevState,
            [e.target.name]:e.target.value
            })

        })

    }

    const onSubmit = (e) =>{

        e.preventDefault()

    } 

return (
    <>
    <div>

        <h1>Register</h1>

    </div>

    <div className='form'>

        <form onSubmit={onSubmit}>

            <div className='form-group'>
                <label type="text" htmlFor='username'>Username : </label>
                <input 
                type="text"
                className='form-control'
                id='username'
                name='username'
                value={username}
                plaseholder="Please enter name"
                onChange={onChange}
                />

            </div>
            <div className='form-group'>
            <label type="email" htmlFor='email'>E-mail : </label>
                <input 
                type="email"
                className='form-control'
                id='email'
                name='email'
                value={email}
                plaseholder="Please enter email"
                onChange={onChange}
                />

            </div>
            <div className='form-group'>
                <label type="password" htmlFor='password'>Password : </label>
                <input 
                type="password"
                className='form-control'
                id='password'
                name='password'
                value={password}
                plaseholder="Please enter password"
                onChange={onChange}
                />

            </div>
            <div className='form-group'>
            <label type="password" htmlFor='password2'> Confirm password : </label>
                <input 
                type="password"
                className='form-control'
                id='password2'
                name='password2'
                value={confirmPassword}
                plaseholder="Please enter confirm password"
                onChange={onChange}
                />

            </div>
            <div className='form-group'>

                <button type='submit'>

                    submit

                </button>

            </div>



        </form>

    </div>
    </>
  )
}
