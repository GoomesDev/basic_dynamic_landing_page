import { 
    FormContainer,
    Input,
    Submit
} from "../styledComponents"
import { 
    submitText,
    emailPlaceholder,
    namePlaceholder
} from "../envVariables"
import { InputAdornment } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import { sendContact } from "../service/actions"
import { useState } from "react"

export const Form = ({

}) => {
    const [leads, setLeads] = useState({
        subscribers: null,
        position: null
    })
    const [contact, setContact] = useState({
        email: '',
        name: ''
    })

    const handleChange = (field, value) => {
        setContact(prevState => ({
            ...prevState,
            [field]: value
        }))
    }

    const handleSubmit = async() => {
        try {
            const response = await sendContact(contact)
            console.log("Contato enviado com sucesso:", response)
            setLeads(prevState => ({
                ...prevState,
                subscribers: response?.updatedAddressBooks[0]?.all_email_qty
            }))
        } catch (error) {
            console.error("Erro ao enviar contato:", error)
        }
    }

    console.log({leads})

    return (
        <FormContainer elevation={10}>
            <Input 
                onChange={e => handleChange('email', e.target.value)}
                placeholder={emailPlaceholder}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon style={{color: 'lightgray'}}/>
                      </InputAdornment>
                    ),
                }}
            />
            <Input 
                onChange={e => handleChange('name', e.target.value)}
                placeholder={namePlaceholder}
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <PersonIcon style={{color: 'lightgray'}}/>
                      </InputAdornment>
                    ),
                }}
            />
            <Submit 
                variant="contained"
                onClick={handleSubmit}
            >
                {submitText}
            </Submit>
        </FormContainer>
    )
}