import Pedido from "./assets/Pedido"
import Cartao from "./Cartao"
import Hippo from "./Hippo"
const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-xl-3">
                    <Cartao>
                    <Hippo
                        tipo="cat"
                        tamanho="3" />
                    <Hippo
                        tipo="cat"
                        tamanho="3"
                        espelhamento="flip-horizontal" />
                    <Hippo
                        tipo="cat"
                        tamanho="2"
                        espelhamento="flip-horizontal" />
                    <Hippo
                        tipo="cat"
                        tamanho="2"
                        espelhamento="flip-horizontal" />
                    </Cartao>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-xl-3">
                    <Pedido
                        data="12/09/2025"
                        icone="car"
                        titulo="Carro"
                        descricao="Porsche Amarelo" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Pedido
                        data="12/09/2025"
                        icone="tractor"
                        titulo="Trator"
                        descricao="Trator Amarelo" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Pedido
                        data="12/09/2025"
                        icone="house"
                        titulo="Casa"
                        descricao="Casa Amarelo" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-3">
                    <Pedido
                        data="14/09/2025"
                        icone="computer"
                        titulo="Computador"
                        descricao="Computador Amarelo" />
                </div>
            </div>

        </div>
    )
}

export default App