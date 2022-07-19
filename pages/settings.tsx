import LanguageSelect from "../components/dashboard/header/LanguageSelect"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

const Setting = () => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Language
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <LanguageSelect />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  )
}

export default Setting