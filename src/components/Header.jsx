import LogoImg from '../assets/logo.jpg';

export default function Header(){
    return(
        <header>
            <img src={LogoImg} alt="A form and Pencil" />
            <h1>React Forms</h1>
        </header>
    );
}