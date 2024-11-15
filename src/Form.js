import React, { Component } from 'react';

class Form extends Component {
  state = {
    Nome: '',
    NomeEnviado: '',
    Endereco: '',
    EnderecoEnviado: '',
    Bairro: '',
    BairroEnviado: '',
    Cidade: '',
    CidadeEnviado: '',
    Pais: '',
    PaisEnviado: ''
  };

 
  handleSubmitNome = (e) => {
    e.preventDefault();
    let { Nome } = this.state;
    this.setState({
      NomeEnviado: Nome, 
      Nome: '' 
    });
  };

  handleInputChangeNome = (e) => {
    this.setState({
      Nome: e.target.value 
    });
  };

  o
  handleSubmitEndereco = (e) => {
    e.preventDefault();
    let { Endereco } = this.state;
    this.setState({
      EnderecoEnviado: Endereco, 
      Endereco: ''
    });
  };

  handleInputChangeEndereco = (e) => {
    this.setState({
      Endereco: e.target.value 
    });
  };

 
  handleSubmitBairro = (e) => {
    e.preventDefault();
    let { Bairro } = this.state;
    this.setState({
      BairroEnviado: Bairro, 
      Bairro: '' 
    });
  };

  handleInputChangeBairro = (e) => {
    this.setState({
      Bairro: e.target.value 
    });
  };

 
  handleSubmitCidade = (e) => {
    e.preventDefault();
    let { Cidade } = this.state;
    this.setState({
      CidadeEnviado: Cidade, 
      Cidade: '' 
    });
  };


  handleInputChangeCidade = (e) => {
    this.setState({
      Cidade: e.target.value 
    });
  };

  handleSubmitPais = (e) => {
    e.preventDefault();
    let { Pais } = this.state;
    this.setState({
      PaisEnviado: Pais,
      Pais: '' 
    });
  };

  handleInputChangePais = (e) => {
    this.setState({
      Pais: e.target.value 
    });
  };

  render() {
    const { Nome, NomeEnviado, Endereco, EnderecoEnviado, Bairro, BairroEnviado, Cidade, CidadeEnviado, Pais, PaisEnviado } = this.state;

    return (
      <section>

        {}
        <form onSubmit={this.handleSubmitNome}>
          <label>
            Nome:
            <input
              value={Nome} 
              onChange={this.handleInputChangeNome} 
              type="text"
              placeholder="Digite seu nome"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {NomeEnviado && <h3>{NomeEnviado}</h3>} {}

        {}
        <form onSubmit={this.handleSubmitEndereco}>
          <label>
            Endereço:
            <input
              value={Endereco} 
              onChange={this.handleInputChangeEndereco} 
              type="text"
              placeholder="Digite seu endereço"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {EnderecoEnviado && <h3>{EnderecoEnviado}</h3>} {}

        {}
        <form onSubmit={this.handleSubmitBairro}>
          <label>
            Bairro:
            <input
              value={Bairro} 
              onChange={this.handleInputChangeBairro} 
              type="text"
              placeholder="Digite seu bairro"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {BairroEnviado && <h3>{BairroEnviado}</h3>} {}

        {}
        <form onSubmit={this.handleSubmitCidade}>
          <label>
            Cidade:
            <input
              value={Cidade}
              onChange={this.handleInputChangeCidade} 
              type="text"
              placeholder="Digite sua cidade"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {CidadeEnviado && <h3>{CidadeEnviado}</h3>} {}

        {}
        <form onSubmit={this.handleSubmitPais}>
          <label>
            País:
            <input
              value={Pais} 
              onChange={this.handleInputChangePais} 
              type="text"
              placeholder="Digite seu país"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
        {PaisEnviado && <h3>{PaisEnviado}</h3>} {}

      </section>
    );
  }
}

export default Form;
