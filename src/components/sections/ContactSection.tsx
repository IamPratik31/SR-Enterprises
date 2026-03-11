 import { Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { SectionHeading } from "../ui/SectionHeading"
import { Reveal } from "../ui/Reveal"

const PHONE_NUMBER = "9665352211"
const EMAIL = "[sunilrathod1087@gmail.com](mailto:sunilrathod1087@gmail.com)"
const ADDRESS = "DURVANKUR SRISHTI, Narhe, Pune, Maharashtra 411041"

export function ContactSection() {

const [name, setName] = useState("")
const [phone, setPhone] = useState("")
const [message, setMessage] = useState("")

function onSubmit(e: React.FormEvent) {
e.preventDefault()


if (!name.trim() || !phone.trim() || !message.trim()) {
  alert("Please fill all fields")
  return
}

const text = `New Project Inquiry


Name: ${name}
Phone: ${phone}
Message: ${message}`


const whatsappURL =
  `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(text)}`

window.open(whatsappURL, "_blank")

setName("")
setPhone("")
setMessage("")


}

return ( <section id="contact" className="bg-white">


  <div className="mx-auto max-w-[1280px] px-6 py-16 md:py-20">

    <SectionHeading
      title="Let's Build Something Exceptional Together"
      subtitle="We welcome new project inquiries and collaborations. Share your requirements and let’s turn your vision into a strong, well-built reality."
    />

    <div className="mt-10 grid gap-8 lg:grid-cols-2">

      {/* Contact Info */}
      <div className="grid gap-6">

        <Reveal>
          <div className="rounded-xl bg-gray-50 p-6 shadow-sm">

            {/* Phone */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
                <Phone className="h-5 w-5" />
              </span>

              <div>
                <div className="font-semibold">Phone</div>
                <div>{PHONE_NUMBER}</div>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
                <Mail className="h-5 w-5" />
              </span>

              <div>
                <div className="font-semibold">Email</div>
                <div>{EMAIL}</div>
              </div>
            </a>

            {/* Address */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 text-white">
                <MapPin className="h-5 w-5" />
              </span>

              <div>
                <div className="font-semibold">Address</div>
                <div>{ADDRESS}</div>
              </div>
            </div>

          </div>
        </Reveal>

      </div>

      {/* Contact Form */}
      <div>

        <Reveal>

          <form
            onSubmit={onSubmit}
            className="rounded-xl bg-gray-50 p-6 shadow-sm"
          >

            <div className="grid gap-4">

              <div>
                <label className="font-semibold">
                  Name *
                </label>

                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="font-semibold">
                  Phone Number *
                </label>

                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
                  placeholder="9665352211"
                />
              </div>

              <div>
                <label className="font-semibold">
                  Message *
                </label>

                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-4 w-4" />
                SEND MESSAGE
              </motion.button>

            </div>

          </form>

        </Reveal>

      </div>

    </div>

  </div>

</section>


)
}
