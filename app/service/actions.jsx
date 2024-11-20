import axios from "axios"
import { 
    serviceApiAdress,
    serviceApiPort
} from "../envVariables"

export const sendContact = async (contact) => {
  try {
    const response = await axios.post(`${serviceApiAdress}:${serviceApiPort}/add-emails`,{
        emails: [{
            email: contact.email,
            variables: {
                name: contact.name
            }
        }]
    })
    return response.data
  } catch (error) {
    console.error("Erro ao enviar os dados:", error)
    throw error
  }
}
