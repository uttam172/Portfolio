import { Suspense, useRef, useState } from "react"
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import LoaderX from "../components/LoaderX"

import Fox from "../models/Fox"
import useAlert from "../hooks/useAlert"
import Alert from "../components/Alert"

const Contact = () => {

    const formRef = useRef(null)
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [isLoading, setisLoading] = useState(false)
    const [currentAnimation, setCurrentAnimation] = useState('idle')

    const { alert, showAlert, hideAlert } = useAlert()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setisLoading(true)
        setCurrentAnimation('hit')

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Uttam",
                from_email: form.email,
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY

        ).then(() => {
            setisLoading(false)
            showAlert({
                show: true,
                text: 'Message sent successfully!',
                type: 'success'
            })
            setTimeout(() => {
                hideAlert()
                setCurrentAnimation('idle')
                setForm({ name: '', email: '', message: '' })
            }, 3000)

        }).catch((error) => {
            setisLoading(false)
            setForm({ name: '', email: '', message: '' })
            setCurrentAnimation('idle')
            console.log(error)
            showAlert({
                show: true,
                text: "I didn't received your message...",
                type: 'danger'
            })            
            setTimeout(() => {
                hideAlert()
                setCurrentAnimation('idle')
            }, 3000)
        })
    }

    const handleFocus = (e) => setCurrentAnimation('walk')

    const handleBlur = (e) => setCurrentAnimation('idle')

    return (
        <section className="relative flex lg:flex-row flex-col max-container gap-20 h-full pb-28">

            {alert.show && <Alert {...alert} />}

            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">Get in Touch</h1>

                <form
                    className="w-full flex flex-col gap-7 mt-14"
                    onSubmit={handleSubmit}
                >
                    <label className="text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="john"
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="john@gmail.com"
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className="text-black-500 font-semibold">
                        Leave a Message
                        <textarea
                            name="message"
                            rows={4}
                            className="textarea"
                            placeholder="Let me know how i can help you!..."
                            required
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn"
                        disabled={isLoading}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>

            <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight intensity={2.5} position={[0, 0, 1]} />
                    <ambientLight intensity={0.5} />

                    <Suspense fallback={<LoaderX />} >
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, -1]}
                            rotation={[12.6, -0.65, 0]}
                            scale={[0.7, 0.7, 0.7]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact


