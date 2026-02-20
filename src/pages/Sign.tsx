function Sign() {
    return (
        <>
            <div className='h-180'>
                <p className ='mt-10 text-xl text-center font-bold'>Регистрация</p>
                <form className ='text-center mt-8'>
                    <input placeholder="Фио" className='border-3 italic'></input>
                    <input placeholder="Адрес эл почты" className='border-3 italic'></input>
                    <input placeholder="Пароль" className='border-3 italic'></input>
                </form>
            </div>
        </>
    )
}

export default Sign;