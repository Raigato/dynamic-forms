import type { FormData } from '@/types/FormData'
import Form from '@/components/Form'

/* Example case:
   - First Name (TextField required)
    - Last Name (TextField required)
    - Email (TextField required)
    - Role (SelectField)
        - Manager
        - Developer
        - Designer
        - Other
    - Company (TextField)
*/

const formData: FormData = {
  fields: [
    //TODO: fill out form data
  ],
}

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl">Home Page</h1>
      <Form form={formData} />
    </div>
  )
}

export default HomePage
