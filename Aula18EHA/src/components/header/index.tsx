import logoImg from '../../assets/logo.svg';
import { Form } from '../form';
import './styles.css';

export function Header(){
    return(
        <header>
            <img src={logoImg} alt ="to do logo"/>
            <Form />
        </header>
    );
}