import { 
    FormContainer,
    Input,
    Submit
} from "../styledComponents"
import { submitText } from "../envVariables"
import EmailIcon from '@mui/icons-material/Email'

export const Form = ({

}) => {


    return (
        <FormContainer>
            <Input onChange={null}/>
            <Input onChange={null}/>
            <Submit 
                variant="contained"
            >
                {submitText}
            </Submit>
        </FormContainer>
    )
}