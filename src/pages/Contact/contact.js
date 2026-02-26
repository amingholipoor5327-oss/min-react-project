import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import "./contact.css"

export const Contact = () => {

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(4, "Name must be at least 4 characters" )
      .max(20, "Name is too long")
      .required("Name is required"),

    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
  })

  const {register , handleSubmit , formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })

  const handleForm = (data) => {
    console.log(data)
  }

  return (
    <div className="contact-container">

      <h1>Contact Me</h1>
      <p className="contact-subtitle">
        Feel free to reach out for collaboration or questions.
      </p>

      <form className="contact-form" onSubmit={handleSubmit(handleForm)}>

        <input
          type="text"
          placeholder="Name..."
          {...register("name")}
        />
        {errors.name && <p className="error">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="Email..."
          {...register("email")}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}

        <textarea
          placeholder="Your Message"
          rows="5"
        ></textarea>

        <button type="submit">Send Message</button>

      </form>

      <span>call number : 0917-803-6862</span>

    </div>
  )
}