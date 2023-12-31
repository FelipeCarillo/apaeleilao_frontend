import { Link } from "react-router-dom";
import logoApae from './logoApae.jpg'

export default function Footer(){
    return (
        <footer className="bg-rodape bg-no-repeat bg-cover h-full p-32">
            <div className="flex flex-wrap gap-8 justify-around items-start border-b-2 border-dotted border-yellow-500 pb-8 mb-8 max-md:justify-start">
                <img src={logoApae} width='300' alt="Logo da APAE"/>
                <div className="text-yellow-500">
                    <h2 className="text-2xl font-bold">Navegação</h2>
                    <div className="flex flex-col text-xl">    
                        <Link to='/' className=" hover:underline"><i className="fa-solid fa-check text-green-500"></i> Início</Link>
                        <Link to={localStorage.getItem('token') ? '/participados' : '/login'} className=" hover:underline"><i className="fa-solid fa-check text-green-500"></i> Leilões Participados</Link>
                        <Link to='/login' className=" hover:underline"><i className="fa-solid fa-check text-green-500"></i> Login</Link>
                        <Link to='/admin/login' className=" hover:underline"><i className="fa-solid fa-check text-green-500"></i> Login administrativo</Link>
                        <Link to='/feedback' className=" hover:underline"><i className="fa-solid fa-check text-green-500"></i> Feedback</Link>
                    </div>
                </div>
                <div className="text-yellow-500 self-start">
                    <h2 className="text-2xl font-bold">Contato</h2>
                    <p><i className="fa-solid fa-location-dot"></i> Alameda São Caetano, 2772 Bairro Santa Maria São Caetano do Sul - SP</p>
                    <p><i className="fa-solid fa-envelope"></i> apaescsul@apaescsul.org.br</p>
                </div>
            </div>
            <p className="text-xl text-center text-yellow-500 font-bold">&copy; Copyright 2023. Todos os Direitos Reservados. Site feito em parceria com o <label className="text-yellow-600 hover:underline">IMT</label></p>
        </footer>
    )
}