import './styles.css'
const App = () => {
  const estilosDoBotao ={marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', width: '100%', border: 'none', borderRadius: 8, color: 'white'}
  const textoDoRotulo = 'Nome'
  const obterTextoDoBotao = () => "Enviar"
  const aoClicar = () => alert('Clicou')
  return(
    <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
      <label className='rotulo' htmlFor="nome" style={{display: 'block', marginBottom: 4}}>

        {textoDoRotulo}
      </label>
      
      <input id="nome" style={{paddingTop: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%',}} 
      type="text"></input>
      <button onClick= {() => aoClicar} style={estilosDoBotao}>{obterTextoDoBotao()}</button>
    </div>
  )
}
export default App