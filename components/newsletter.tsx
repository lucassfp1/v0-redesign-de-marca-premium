"use client"

import { ArrowRight } from "lucide-react"
import { useState, type FormEvent } from "react"
import { Reveal } from "@/components/reveal"

export function Newsletter() {
  const [message, setMessage] = useState("")

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const email = new FormData(form).get("email")?.toString().trim() ?? ""
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setMessage("Digite um e-mail válido para continuar.")
      return
    }
    setMessage("Cadastro demonstrativo concluído. Nenhum dado foi enviado.")
    form.reset()
  }

  return (
    <section className="newsletter section-pad" id="newsletter" aria-labelledby="newsletter-title">
      <div className="section-shell newsletter__grid">
        <Reveal>
          <p className="eyebrow">Correspondência ROSÉ</p>
          <h2 id="newsletter-title">Entre no universo<br /><em>ROSÉ.</em></h2>
        </Reveal>
        <Reveal className="newsletter__content" delay={90}>
          <p>Novas edições, leituras e notas de formulação — com tempo e intenção.</p>
          <form onSubmit={submit} noValidate>
            <label htmlFor="newsletter-email">Seu e-mail</label>
            <div className="newsletter__field">
              <input id="newsletter-email" name="email" type="email" inputMode="email" placeholder="nome@email.com" aria-describedby="newsletter-message" />
              <button type="submit" aria-label="Inscrever e-mail"><ArrowRight aria-hidden="true" /></button>
            </div>
            <p id="newsletter-message" className="form-message" role="status">{message || "Ao continuar, você concorda com a política de privacidade conceitual."}</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
