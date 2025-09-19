import Pedido from "./assets/Pedido"
import Cartao from "./Cartao"
import Hippo from "./Hippo"
import Feedback from "./Feedback"
const App = () => {
    const funcaoOK = () => alert('Agradecemos o feedback')
    const funcaoNOK = () => alert('Verificaremos')
    const textoOK = 'Pedido chegou'
    const textoNOK = 'Ainda não chegou'
    const pedidos = [
        {
            data: '15/09/2025',
            icone: 'car',
            titulo: 'Carro',
            descricao: 'Porche Amarelo'
        },
        {
            data: '12/09/2025',
            icone: 'house',
            titulo: 'Casa',
            descricao: 'Casa Amarelo'
        }
    ]
    const expressaoFeedback = (
        <Feedback
            funcaoOK={funcaoOK}
            funcaoNOK={funcaoNOK}
            textoOK={textoOK}
            textoNOK={textoNOK} />
    )
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    {/* .d-flex.flex-column */}
                    <Cartao cabecalho="Família de animais peculiar">
                        <div className="d-flex-flex-columm">
                            <div className="d-flex justify-content-center align-items-end mb-5">
                                <Hippo
                                    tipo="cat"
                                    tamanho="3" />
                                <Hippo
                                    tipo="cat"
                                    tamanho="2"
                                    espelhamento="flip-horizontal" />
                                <Hippo
                                    tipo="cat"
                                    tamanho="1"
                                    espelhamento="flip-horizontal" />
                                <Hippo
                                    tipo="cat"
                                    tamanho="1"
                                    espelhamento="flip-horizontal" />
                                <Hippo
                                    tipo="hippo"
                                    tamanho="1"
                                    espelhamento="flip-horizontal" />
                            </div>
                            <Feedback
                                textoOK="Adotar uma lontra"
                                textoNOK="Não adotar!"
                                funcaoOK={() => alert('Oba')}
                                funcaoNOK={() => alert('Ahhh')} />
                        </div>
                    </Cartao>
                </div>
            </div>
            <div className="row mt-2">
                {
                    pedidos.map(({data, icone, titulo, descricao}) => {
                        return (
                            <div className="col-sm-12 col-md-6 col-xl-4">
                                <Cartao
                                    cabecalho={data}>
                                    <Pedido
                                        icone={icone}
                                        titulo={titulo}
                                        descricao={descricao} />
                                    <div className="mt-3"></div>
                                    {expressaoFeedback}
                                </Cartao>
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}

export default App