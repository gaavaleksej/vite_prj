function Login() {
    return (
        <>
            <div className='h-180'>
                <p className ='mt-10 text-xl text-center font-bold'>Вход</p>
                <form className ='text-center mt-8'>
                    <input placeholder="Адрес эл почты" className='border-3 italic'></input>
                    <input placeholder="Пароль" className='border-3 italic'></input>
                </form>
            </div>
        </>
    )
}

export default Login;