import React, { useState } from 'react';
import './App.css';
import Button from './components/button';
import Input from './components/input';
import Form from './components/form';
import Select from './components/select';
import Card from './components/card';
import ICep from './Interfaces/ICep';
import ClipLoader from "react-spinners/ClipLoader";
import {Override} from './CssSpinner';
function App() {
  const [rua, setRua] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [dados, setDados] = useState<ICep[]>([]);
  const [carregando, setCarregando] = useState(false);
  function handleFormSubmit(e: any) {
    e.preventDefault();
    let ruaArr: any = rua.split(' ');
    let ruaTratado: string = "";
    ruaArr.forEach((element: any) => {
      ruaTratado += element + "+"
    });
    let cidadeArr: any = cidade.split(' ');
    let cidadeTratado: string = "";
    cidadeArr.forEach((element: any) => {
      cidadeTratado += element + "%20"
    });
    setDados([]);
    setCarregando(true);
    fetch('https://viacep.com.br/ws/' + uf + '/' + cidadeTratado + '/' + ruaTratado + '/json/')
      .then(response => {
        response.json().then(element => {
          setDados(element);
          setCarregando(false);
        })
      })
  }
  return (
    <div className="container">
      <div className="bloco">
        <h3>Descubra aqui seu cep...</h3>
        <hr />
        <Form onSubmitForm={handleFormSubmit} class="alinhar-centro">
          <Input onChangeText={e => setRua(e.target.value)} value={rua} placeholder="Digite a rua" required />
          <Input onChangeText={e => setCidade(e.target.value)} value={cidade} placeholder="Digite a sua cidade" required />
          <Select onChangeText={e => setUf(e.target.value)} value={uf} required>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </Select>
          <div className="alinhar-centro">
            <Button>Enviar</Button>
          </div>
        </Form>
        <hr />
        Resultados:
        {carregando ?
          <ClipLoader
            css={Override}
            size={150}
            color={"#9b59b6"}
            loading={carregando}
          />
          : ''}
        {dados.map(element => (
          <Card key={element.cep} titulo={element.cep}>
            <p>Bairro: {element.bairro}</p>
            <p>Cidade: {element.localidade}</p>
            <p>Rua: {element.logradouro}</p>
            <p>Estado: {element.uf}</p>
          </Card>

        ))}
      </div>
    </div>
  );
}

export default App;

