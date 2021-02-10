import {
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  FieldError,
} from '@redwoodjs/forms'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <MainLayout>
      <main>
        <section id="contact">
          <header className="my-5">
            <h2 className="text-white text-3xl font-semibold">Contact Me</h2>
            <hr className="w-20" />
          </header>
          <section>
            <Form onSubmit={onSubmit} className="contact-form">
              <section id="name-email">
                <article>
                  <Label name="name" errorClassName="text-red-600 block">
                    Name
                  </Label>
                  <TextField
                    name="name"
                    validation={{ required: true }}
                    errorClassName="text-red-600 block"
                  />
                  <FieldError name="name" className="text-red-600 block" />
                </article>
                <article>
                  <Label name="email" errorClassName="text-red-600 block">
                    Email
                  </Label>
                  <TextField
                    name="email"
                    validation={{ required: true }}
                    errorClassName="text-red-600 block"
                  />
                  <FieldError name="email" className="text-red-600 block" />
                </article>
              </section>
              <section className="my-5">
                <Label name="message" errorClassName="text-red-600 block">
                  Message
                </Label>
                <TextAreaField
                  name="message"
                  validation={{ required: true }}
                  errorClassName="text-red-600 block"
                />
                <FieldError name="message" className="text-red-600 block" />
              </section>
              <Submit>Save</Submit>
            </Form>
          </section>
        </section>
      </main>
    </MainLayout>
  )
}

export default ContactPage
