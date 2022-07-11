import Dashboard from '../components/dashboard/dashboard'

import { useLanguage } from '../context/languageContext'

const Setting = () => {
const test = useLanguage()
console.log(test);

  return (
    <Dashboard>
      settings
    </Dashboard>
  )
}

export default Setting