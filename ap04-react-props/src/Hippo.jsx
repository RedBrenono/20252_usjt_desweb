const Hippo = ({tipo, tamanho, espelhamento}) => {
    return (<div className="d-flex ">
        <i className={`fa-${tipo} fa-${tamanho}x fa-solid fa-${espelhamento}`}></i>
    </div>
    )
}
export default Hippo