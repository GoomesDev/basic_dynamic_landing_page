import styled from "styled-components"
import { 
    TextField,
    Paper,
    Button
} from "@mui/material"
import {
    mainColor,
    submitTextColor,
    submitBackgroundColor
} from "./envVariables"

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid;
`

export const FormContainer = styled(Paper)({
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '26px',
    marginTop: '-106px',
    position: 'absolute',
    right: '46px',
    zIndex: 2
})

export const Input = styled(TextField)`
    font-size: 22px;
    width: 426px;
    border-color: lightgray;
    & .MuiOutlinedInput-root {
        &:hover fieldset {
            border-color: ${mainColor};
        }
        &.Mui-focused fieldset {
            border-color: ${mainColor};
        }
    }
`

export const Submit = styled(Button)`
    background-color: ${submitBackgroundColor ?? mainColor};
    font-weight: 900;
    color: ${submitTextColor};
`