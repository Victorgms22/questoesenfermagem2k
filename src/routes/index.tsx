import { createFileRoute } from "@tanstack/react-router";
import {
  Files, BookOpen, CheckCircle2, Brain, Target, Smartphone, GraduationCap, Clock,
  BarChart3, BriefcaseMedical, Stethoscope, ShieldCheck, ChevronDown, Check, HeartPulse,
} from "lucide-react";
import hero from "@/assets/hero-mockup.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2000 Questões de Enfermagem | Pratique e Revise" },
      { name: "description", content: "Material digital com 2000 questões de enfermagem para estudo, revisão e preparação para provas e concursos." },
      { property: "og:title", content: "2000 Questões de Enfermagem" },
      { property: "og:description", content: "Pratique, revise e fortaleça sua preparação para provas e concursos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const conteudo = [
  [Files, "2000 questões de enfermagem", "Uma coleção de questões para praticar e revisar os conhecimentos da área."],
  [BookOpen, "Conteúdos para revisar", "Questões organizadas por temas, conforme a estrutura real do material."],
  [CheckCircle2, "Prática de questões", "Treine a interpretação dos enunciados e a análise das alternativas."],
  [Brain, "Fixação do conhecimento", "Use a resolução de questões como parte da sua rotina de estudos."],
  [Target, "Identifique suas dificuldades", "Perceba quais assuntos precisam de mais revisão."],
  [Smartphone, "Material digital", "Consulte o material nos dispositivos compatíveis com seu formato."],
] as const;
const beneficios = [
  [GraduationCap, "Aprendizado ativo", "Pratique a aplicação dos conhecimentos estudados."],
  [Clock, "Revisão prática", "Inclua sessões de resolução de questões na sua rotina."],
  [BarChart3, "Acompanhe sua evolução", "Registre seus acertos e erros para orientar suas revisões."],
  [Target, "Mais foco nos estudos", "Direcione sua atenção aos temas que exigem maior preparação."],
] as const;
const publico = [
  [BookOpen, "Estudantes de enfermagem", "Para quem deseja praticar os conteúdos aprendidos durante a formação."],
  [BriefcaseMedical, "Candidatos a concursos", "Para quem está se preparando para processos seletivos e concursos na área."],
  [Stethoscope, "Profissionais de enfermagem", "Para quem deseja revisar conhecimentos e manter uma rotina de atualização."],
] as const;
const passos = [
  ["Acesse o material", "Utilize as instruções de acesso fornecidas após a compra."],
  ["Resolva as questões", "Pratique os conteúdos e analise cuidadosamente as alternativas."],
  ["Revise seus erros", "Retome os assuntos em que encontrar dificuldades."],
  ["Continue praticando", "Organize sessões de estudo frequentes e acompanhe sua evolução."],
];
const pendente = "Resposta em breve. Entre em contato para mais informações.";
const faq = [
  ["Como vou receber as 2000 questões?", pendente],
  ["As questões possuem gabarito?", pendente],
  ["As respostas são comentadas?", pendente],
  ["O material serve para estudar para concursos?", "O material pode ser utilizado como apoio aos estudos. A adequação depende dos assuntos abordados e do edital da prova desejada."],
  ["Posso acessar pelo celular?", pendente],
  ["Como funciona o pagamento?", pendente],
];

function Cta({ children }: { children: React.ReactNode }) {
  return (
    <a href="#compra" className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-extrabold tracking-wide text-accent-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110">
      {children}
    </a>
  );
}

function Grid({ items, cols }: { items: readonly (readonly [any, string, string])[]; cols: string }) {
  return (
    <div className={`mt-12 grid gap-6 ${cols}`}>
      {items.map(([Icon, t, d]) => (
        <div key={t} className="rounded-2xl border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-accent">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-primary"><Icon className="h-6 w-6" /></div>
          <h3 className="mt-5 text-lg font-bold">{t}</h3>
          <p className="mt-2 text-muted-foreground">{d}</p>
        </div>
      ))}
    </div>
  );
}

function Head({ t, s, light }: { t: string; s?: string; light?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{t}</h2>
      {s && <p className={`mt-4 text-lg ${light ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{s}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="font-sans">
      <header className="bg-dark-gradient text-primary-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="flex items-center gap-2 font-extrabold"><HeartPulse className="h-6 w-6 text-accent" /> 2000 Questões</span>
          <div className="hidden gap-6 text-sm text-primary-foreground/80 md:flex">
            <a href="#conteudo" className="hover:text-accent">Conteúdo</a>
            <a href="#publico" className="hover:text-accent">Para quem</a>
            <a href="#compra" className="hover:text-accent">Oferta</a>
            <a href="#faq" className="hover:text-accent">Dúvidas</a>
          </div>
        </nav>
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-10 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-accent/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent">Material digital</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">2000 Questões de Enfermagem para Testar Seus Conhecimentos</h1>
            <p className="mt-5 text-lg text-primary-foreground/80">Pratique, revise e fortaleça sua preparação para provas e concursos. Identifique os assuntos que precisam de mais atenção.</p>
            <ul className="mt-6 space-y-2">
              {["2000 questões de enfermagem", "Prática e revisão de conteúdos", "Estude no seu ritmo"].map((d) => (
                <li key={d} className="flex items-center gap-2"><Check className="h-5 w-5 text-accent" />{d}</li>
              ))}
            </ul>
            <div className="mt-8"><Cta>QUERO ACESSAR AS 2000 QUESTÕES</Cta></div>
          </div>
          <img src={hero} width={1280} height={960} alt="Questões de enfermagem em notebook, tablet e celular" className="rounded-3xl shadow-glow" />
        </section>
      </header>

      <section id="conteudo" className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="O que você vai encontrar?" s="Um material pensado para tornar sua rotina de preparação mais prática e organizada." />
          <Grid items={conteudo} cols="sm:grid-cols-2 lg:grid-cols-3" />
          <div className="mt-12 text-center"><Cta>QUERO ESTUDAR COM QUESTÕES</Cta></div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Por que estudar resolvendo questões?" s="Transforme a prática em uma parte estratégica da sua preparação." />
          <Grid items={beneficios} cols="sm:grid-cols-2 lg:grid-cols-4" />
        </div>
      </section>

      <section id="publico" className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Para quem é este material?" />
          <Grid items={publico} cols="md:grid-cols-3" />
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Head t="Como utilizar as 2000 questões?" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map(([t, d], i) => (
              <div key={t} className="rounded-2xl bg-card p-7 shadow-soft">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary text-lg font-extrabold text-primary-foreground">{i + 1}</div>
                <h3 className="mt-5 text-lg font-bold">{t}</h3>
                <p className="mt-2 text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compra" className="bg-dark-gradient px-6 py-20 text-primary-foreground">
        <Head light t="Tenha acesso às 2000 Questões de Enfermagem" s="Dê um novo ritmo à sua preparação com mais prática e revisão." />
        <div className="mx-auto mt-12 max-w-md rounded-3xl bg-card p-8 text-card-foreground shadow-glow">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Material digital</p>
          <h3 className="mt-2 text-2xl font-extrabold">2000 Questões de Enfermagem</h3>
          <ul className="mt-6 space-y-3">
            {["Amplo volume de questões para praticar", "Apoio à revisão dos conteúdos de enfermagem", "Material para complementar a rotina de estudos"].map((b) => (
              <li key={b} className="flex gap-2"><CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />{b}</li>
            ))}
          </ul>
          <p className="mt-8 text-4xl font-extrabold text-primary">R$ --,--</p>
          <button className="mt-6 w-full rounded-full bg-accent py-4 text-sm font-extrabold text-accent-foreground shadow-glow transition hover:brightness-110">QUERO GARANTIR MEU ACESSO</button>
        </div>
      </section>

      <section className="bg-background px-6 pt-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 rounded-2xl border bg-card p-8 text-center shadow-soft">
          <ShieldCheck className="h-10 w-10 text-accent" />
          <h2 className="text-2xl font-extrabold">Compre com tranquilidade</h2>
          <p className="text-muted-foreground">Informações claras sobre pagamento, entrega e suporte para você comprar com segurança.</p>
        </div>
      </section>

      <section id="faq" className="bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <Head t="Dúvidas frequentes" />
          <div className="mt-10 space-y-3">
            {faq.map(([q, a]) => (
              <details key={q} className="group rounded-2xl border bg-card p-5 shadow-soft">
                <summary className="flex cursor-pointer list-none items-center justify-between font-bold">
                  {q}<ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-gradient px-6 py-20 text-center text-primary-foreground">
        <Head light t="Sua preparação começa com a próxima questão" s="Pratique seus conhecimentos em enfermagem, revise os conteúdos e construa uma rotina de estudos mais consistente." />
        <div className="mt-8"><Cta>QUERO ACESSAR AS 2000 QUESTÕES</Cta></div>
      </section>

      <footer className="bg-secondary px-6 py-8 text-sm text-secondary-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
          <span>© 2026 2000 Questões de Enfermagem</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent">Termos de uso</a>
            <a href="#" className="hover:text-accent">Política de privacidade</a>
            <a href="#" className="hover:text-accent">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
