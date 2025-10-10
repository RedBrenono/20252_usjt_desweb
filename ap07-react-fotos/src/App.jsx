import { Button } from 'primereact/button'
import Busca from './components/Busca'
import React from 'react'
import { createClient } from 'pexels'

class app extends React.Component {

  chavePexels = 'w3W5WijiptjOx5adL7S297qBXWOaQPngSps1q7yuh2C7z6ehd4pU7sRk'

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient(this.chavePexels)
  }

  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo 
    })
    .then((result) => console.log(result))
  }

  render() {

    return (
      <div className='grid border-1 justify-content-center border-400 border-round'>
        <div className="col-12">
          <div className='flex mb-3'>
            <i className="pi pi-car mr-3"></i>
            <i className="pi pi-car"></i>
          </div>
        </div>
        <div className="col-12">
          <h1>Exibir uma lista de....</h1>
        </div>
        <div className='col-8'>
          <Busca onBuscaRealizada={this.onBuscaRealizada} />
        </div>

      </div>
    )
  }

}
export default app