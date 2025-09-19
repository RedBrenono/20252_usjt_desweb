//rafce, significa react arrow function export, precisa baixar a extensão ES7 + React/Redux/React-Native snippets
import React from 'react'
//Usando desestruturação, coloque os props nos parametros, que são funções
//funcção feedback é de alta ordem, pois essa funçõa recebe uma função ou devolve uma função, manipulando funções
const Feedback = ({textoOK, textoNOK, funcaoOK, funcaoNOK}) => {
  return (
    <div className='d-flex justify-content-evenly'>
        {/* button[type=button].btn.btn-*2 */}
        <button 
            type="button"
            onClick={funcaoOK} 
            className="btn btn-primary">
                {/* chaves para trocar de contexto de jsx para js */}
                {textoOK}
        </button>
        <button 
            type="button" 
            onClick={funcaoNOK}
            className="btn btn-danger">
                {textoNOK}
        </button>

    </div>
  )
}

export default Feedback