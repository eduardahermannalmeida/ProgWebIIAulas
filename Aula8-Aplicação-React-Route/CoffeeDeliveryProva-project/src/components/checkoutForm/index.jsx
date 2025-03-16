import "./styles.css";
import { MapPin } from "lucide-react";
import { DollarSign } from "lucide-react";
import { CreditCard } from "lucide-react";
import { Landmark } from "lucide-react";
import { Banknote } from "lucide-react";

export function CheckoutForm({
  cep,
  rua,
  numero,
  complemento,
  bairro,
  cidade,
  uf
}) {
  return (
    <>
      <div className="addressNPayment">
        <h1 id="title"> Complete seu pedido </h1>

        <div className="address">
          <div className="addressInfo">
            <div>
              <MapPin />
              <p id="title2"> Endereço de Entrega </p>
            </div>

            <p id="subtext">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>

          <div>
            <form>
              <input
                type="text"
                maxLength="9"
                onInput={(cepcontent) =>
                  (cepcontent.target.value = cepcontent.target.value.replace(
                    /\D/g,
                    ""
                  ))
                }
                id="cep"
                placeholder="CEP"
              value={cep}/>
              <input type="text" id="rua" placeholder="Rua"
                value={rua}/>

              <div>
                <input type="number" id="numero" placeholder="Número" value={numero}/>

                <input type="text" id="complemento" placeholder="Complemento" value={complemento}/>
              </div>

              <div>
                <input type="text" id="bairro" placeholder="Bairro" value={bairro}/>
                <input type="text" id="cidade" placeholder="Cidade" value={cidade}/>
                <input type="text" id="uf" placeholder="UF" value={uf}/>
              </div>
            </form>
          </div>
        </div>

        <div className="payment">
          <div className="paymentInfo">
            <div>
              <DollarSign />
              <p id="title2"> Endereço de Entrega </p>
            </div>

            <p id="subtext">
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>

          <div className="btns">
            <button>
              <CreditCard />
              <span>Cartão de Crédito</span>
            </button>
            <button>
              <Landmark />
              <span>Cartão de Débito</span>
            </button>
            <button>
              <Banknote />
              <span>Dinheiro</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
