import React from 'react';
import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const atualizarEvento = useAtualizarEvento()

  const alterarStatus = () => {
    const eventoAlterado = {
      ...evento
    }
    eventoAlterado.completo = !eventoAlterado.completo
    atualizarEvento(eventoAlterado)
  }
  
  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox