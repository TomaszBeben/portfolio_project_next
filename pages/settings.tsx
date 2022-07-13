import  {useLanguage}  from "../context/languageContext"

const Setting = () => {
  const {test, setTest} = useLanguage()
  console.log(test);

  return (
    <>
    <button onClick={()=> setTest && setTest('działa?')}>dziala?</button>
    </>
  )
}

export default Setting