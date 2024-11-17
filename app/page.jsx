"use client"
import {
  mainColor,
  secondaryColor,
  headerText,
  headerTextColor
} from "./envVariables"
import { MainContainer } from "./styledComponents"
import { Container } from "./components/Container"
import { Header } from "./components/Header"
import { Form } from "./components/Form"
import { useState } from "react"

export default function Home() {
  const [data, setData] = useState({
    email: '',
    name: ''
  }
  )

  return (
    <Container backgroundColor={secondaryColor}>
        <Header
          backgroundColor={mainColor} 
          text={headerText}
          textColor={headerTextColor}
        />
        <Form />
    </Container>
  )
}
