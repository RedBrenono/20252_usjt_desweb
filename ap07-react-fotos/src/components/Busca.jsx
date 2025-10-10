import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputIcon } from 'primereact/inputicon'
import { IconField } from 'primereact/iconfield'

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (event) => {
        // console.log(event.target.value);
        //this.state.termoDeBusca = event.target.value
        this.setState({
            termoDeBusca: event.target.value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }
    

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField
                        className='w-full'
                        iconPosition='left'>
                        <InputIcon className='pi pi-search'></InputIcon>
                        <InputText
                            value={this.state.termoDeBusca}
                            onChange={this.onTermoAlterado}
                            className='w-full'
                            placeholder={this.props.dica}/>
                    </IconField>
                    <Button
                        className='mt-3'
                        label='OK' />
                </div>
            </form>
        )
    }
}

Busca.defaultprops = {
    dica: 'Buscar'
}