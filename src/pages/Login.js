import {Link} from 'react-router-dom'

export default function Login() {
    const imgLogo = 'https://apaeleilaoimt.s3.sa-east-1.amazonaws.com/galery/logo-apaeleilao-branco.jpg'
    
    return (
        <>
        <header className='bg-blue-600 flex justify-center p-4 rounded-b-2xl shadow-xl'>
            <img src={imgLogo} alt='logo da APAE leilão' className='w-[200px] self-center md:w-[250px]'/>
        </header>
        <main className="px-4 flex flex-col justify-center">
            <h1 className="text-4xl text-center mt-4 font-medium text-blue-900 md:text-5xl">Login</h1>
            <div className="flex justify-center">
                <div className="w-[90%] h-[2px] bg-gray-200 my-2 md:my-4" />
            </div>

            {/* FORMULARIO DE LOGIN */}
            <form>
                <div className="flex flex-col text-xl gap-2 mb-4 md:items-center">
                    <label className='md:w-1/2' htmlFor="login">Email ou CPF:</label>
                    <input className="bg-gray-200 rounded-full py-1 px-3 md:w-1/2" type="text" name="login" id="login"/>
                </div>

                <div className="flex flex-col text-xl gap-2 mb-4 md:items-center">
                    <label className='md:w-1/2' htmlFor="password">Senha:</label>
                    <input className="bg-gray-200 rounded-full py-1 px-3 md:w-1/2" type="password" name="password" id="password"/>
                    <Link className='underline max-md:self-start md:w-1/2' to="/">Esqueceu sua Senha?</Link>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="w-[90%] h-[2px] bg-gray-200" />
                </div>

                <div className="flex flex-col items-center text-xl gap-4 my-4">
                    <div className='flex items-center max-md:self-start gap-1 md:w-1/2'>
                        <input className="w-4 h-4" type="checkbox" id="conected" name="conected"/>
                        <label htmlFor="conected">Deseja continuar conectado?</label>
                    </div>
                </div>
                
                <div className="flex justify-center mt-4">
                    <button className="bg-yellow-300 py-4 px-16 text-xl rounded-full">LOGIN</button>
                </div>
            </form>
        </main>
        <footer className='fixed bottom-0 mt-8 w-full text-center font-medium py-4 bg-blue-600 shadow-xl'>
            <p className='text-white'>Ainda não possui uma conta? <Link className='text-yellow-400' to="/cadastro">Clique Aqui</Link> </p>
        </footer>
        </>
    )
}