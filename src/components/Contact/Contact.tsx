import React from 'react'

interface FormFields {
  subject?: string
  message?: string
}

const Contact: React.FC = () => {
  const [formFields, dispatch] = React.useReducer(
    (prev: FormFields, next: FormFields) => {
      return { ...prev, ...next }
    },
    {
      subject: '',
      message: '',
    }
  )

  const mail = React.useMemo(
    () =>
      formFields?.subject &&
      formFields?.message &&
      `mailto:samcarvalhos@hotmail.com?Subject=${encodeURI(
        formFields?.subject
      )}&body=${encodeURI(formFields?.message)}`,
    [formFields]
  )

  return (
    <>
      <div className="flex flex-col flex-1 space-y-4">
        <h4 className="text-3xl font-bold">Contact</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in ex in mi semper porttitor. Nam non tortor non metus aliquam
          hendrerit sit amet id quam.
        </p>
      </div>

      <div className="flex-1 space-y-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="">Assunto</label>
          <input
            type="text"
            placeholder="Digite aqui..."
            value={formFields.subject}
            onChange={(e) => dispatch({ subject: e.target.value })}
            className="outline-none border-none rounded-md px-6 py-4 backdrop-blur-sm bg-zinc-900 bg-opacity-40"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="">Mensagem</label>
          <textarea
            cols={30}
            rows={6}
            placeholder="Digite aqui..."
            value={formFields.message}
            onChange={(e) => dispatch({ message: e.target.value })}
            className="outline-none border-none rounded-md px-6 py-4 backdrop-blur-sm bg-zinc-900 bg-opacity-40"
          />
        </div>

        <div className="flex justify-end">
          <a
            href={mail}
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-tr from-pink-500 to-purple-600 px-6 py-2 rounded-full w-fit"
          >
            Enviar
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
