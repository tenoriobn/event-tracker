import { useRecoilValue } from "recoil"
import { eventosFiltradosState } from "../seletores"

const useListaDeEventos = () => {
  return useRecoilValue(eventosFiltradosState)
}

export default useListaDeEventos