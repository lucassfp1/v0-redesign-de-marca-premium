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
          <p className="eyebrow">ROSÉ List</p>
          <h2 id="newsletter-title">Be first to<br /><em>wear it.</em></h2>
        </Reveal>
        <Reveal className="newsletter__content" delay={90}>
          <p>Novas cores, campanhas e beauty notes. Sem excesso na sua caixa de entrada.</p>
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
