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

export const Form = ({

}) => {


    return (
        <FormContainer elevation={10}>
            <Input 
                onChange={null}
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
                onChange={null}
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
            >
                {submitText}
            </Submit>
        </FormContainer>
    )
}