import { useState } from "react"
import { Link } from "react-router-dom"

export default function Principal() {
    const imgLogo = 'https://apaeleilaoimt.s3.sa-east-1.amazonaws.com/galery/logo-apaeleilao-branco.jpg'
    const [menu, setMenu] = useState(false)

    return (
        <>
        <header className="bg-blue-600 p-4 flex justify-between items-center">
            <img className="w-[200px]" src={imgLogo} alt="Logo da APAE"/>
            <ul className={`flex gap-16 text-3xl text-white ${menu ? 'max-lg:absolute max-lg:bg-black max-lg:flex-col max-lg:bottom-0 max-lg:left-0 max-lg:w-full max-lg:h-full max-lg:justify-center max-lg:items-center' : 'max-lg:hidden'}`}>
                <li className="text-yellow-400 border-b-2 border-yellow-400"><Link to='/'>Início</Link></li>
                <li><Link to='/leiloes'>Leilões</Link></li>
                <li><Link to='/participados'>Leilões Participados</Link></li>
                <li className="absolute top-5 right-5 hidden max-lg:block"><label onClick={(e)=>{setMenu(!menu)}}><i className="fa-solid fa-x"></i></label></li>
                <Link className="bg-yellow-300 text-black py-4 px-5 text-2xl rounded-full font-semibold" to='/login'><i class="fa-regular fa-circle-user"></i> Login</Link>
            </ul>
            <div className="flex items-center justify-center gap-4">
                <label className="text-4xl hidden text-white max-lg:block" onClick={(e) => {setMenu(!menu)}}><i class="fa-solid fa-bars"></i></label>
            </div>
        </header>

        <main>
            <section className="px-4 py-8 flex flex-col gap-8 items-center">
                <h1 className="text-4xl text-center">Leilão Ativo</h1>
                {/* CARD LEITAO ATIVO */}
                <div className="flex border-2 border-black rounded-xl max-md:flex-col">
                    <img className="rounded-l-xl w-[200px] max-md:w-full max-md:h-[300px]" src="http://via.placeholder.com/500x500" alt="Imagem do Leilão"/>
                    <div className="flex w-full items-end gap-12 p-4 max-md:flex-col max-md:items-center">
                        <div className="flex flex-col self-start text-lg">
                            <h2 className="text-2xl">Fusca 3 portas</h2>
                            <p className="text-xl">Usado</p>
                            <p>Informações</p>
                            <p className="font-bold text-3xl">Valor: R$18.000,00</p>
                        </div>
                        <div>
                            <label className="bg-yellow-300 text-xl rounded-full py-2 px-5 font-medium max-md:text-3xl"><i class="fa-solid fa-gavel"></i> Dar Lance</label>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-white bg-blue-500 py-4">
                <h1 className="text-center text-4xl underline">Próximos Leilões</h1>
                <div>
                    carrossel
                </div>
            </section>
        </main>
        <footer className="bg-blue-600 text-6xl text-center text-white">
            RODAPE
        </footer>
        </>
    )
}