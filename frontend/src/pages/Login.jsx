import React,{useState} from 'react'

export const Login = () => {
  
    const [login, setLogin] = useState({

        password:'',
        email:''

    })

    const {password,email} = login
    
    const onChange = (e) => {

        setLogin((prevState)=>{

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

        <h1>Login</h1>

    </div>

    <div className='form'>

        <form onSubmit={onSubmit}>

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

                <button type='submit'>

                    submit

                </button>

            </div>



        </form>

    </div>
    </>
  )
}
