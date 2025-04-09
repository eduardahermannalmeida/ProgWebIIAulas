import { PlusCircle } from "@phosphor-icons/react"
import './styles.css';

export function Form(){
    return(
        <form>
        <input type="text" placeholder="Adicione uma nova tarefa"/>
        <button type="submit">
        Criar
        <PlusCircle size={26} />
        </button>
        </form>
    )
}