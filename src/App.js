import React, { useState } from 'react';
import Button from './components/Button';
import Tela from './components/Tela'
import { TelaInteira, TecladoLinha, Teclado } from './components/styles';


export default function App() {

  const [telaValor, setTelaValor] = useState('')
  const [telaResult, setTelaResult] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operador, setOperador] = useState(false)

  
  //FUNCTIONS
 
  const addDigito = (d) => {


    if ((d == '+' || d == '-' || d == '*' || d == '/') && operador) {
      
      setOperador(false)
      setTelaValor(telaResult + d)
      return
    }

    if (operador) {
      setTelaValor(d)
      setOperador(false)
      return
    }

    const valoDigitado = telaValor + d
    setTelaValor(valoDigitado)
  }

  const limparTela = () => {
    setOperador(false)
    setTelaValor('')
    setTelaResult(0)
    setAcumulador(0)
    return
  }

  const operadores = (operator) => {
    if (operator == '<') {
      let valorTela = telaValor
      valorTela = valorTela.substring(0,(valorTela.length - 1))
      setTelaValor(valorTela)
      setOperador(false)
      return
      
    }

    try {
      const resultado = eval(telaValor)
      setAcumulador(resultado)
      setTelaResult(resultado)
      setOperador(true)
    } catch {
      setTelaResult('ERROR')
    }
  }

  return (

    <TelaInteira>

      <Tela valor={telaValor} res={telaResult} />

      <Teclado>

        <TecladoLinha>
          <Button style={{color:'red'}} label={'C'} onClick={limparTela} />
          <Button style={{color:'green'}} label={'('} addDigito={addDigito}  />
          <Button style={{color:'green'}} label={')'} addDigito={addDigito}  />
          <Button style={{color:'green'}} label={'/'} addDigito={addDigito}  />
        </TecladoLinha>

        <TecladoLinha>
          <Button label={'7'} addDigito={addDigito} />
          <Button label={'8'} addDigito={addDigito}  />
          <Button label={'9'} addDigito={addDigito}  />
          <Button style={{color:'green'}} label={'*'} addDigito={addDigito}  />
        </TecladoLinha>

        <TecladoLinha>
          <Button label={'4'} addDigito={addDigito}  />
          <Button label={'5'} addDigito={addDigito}  />
          <Button label={'6'} addDigito={addDigito}  />
          <Button style={{color:'green'}} label={'-'} addDigito={addDigito}/>
        </TecladoLinha>

        <TecladoLinha>
          <Button label={'1'} addDigito={addDigito}  />
          <Button label={'2'} addDigito={addDigito}  />
          <Button label={'3'} addDigito={addDigito}  />
          <Button style={{color:'green'}} label={'+'} addDigito={addDigito}  />
        </TecladoLinha>

        <TecladoLinha>
          <Button label={'.'} addDigito={addDigito}  />
          <Button label={'0'} addDigito={addDigito}  />
          <Button label={'<'} onClick={() => operadores('<')} />
          <Button style={{backgroundColor:'green',color:'white'}} label={'='} onClick={() => operadores('=')} />
        </TecladoLinha>

      </Teclado>

    </TelaInteira>


  )
}