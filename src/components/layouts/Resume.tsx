import { AcadExperience } from "../ui/AcadExperience";
import { JobExperience } from "../ui/JobExperience";

export const Resume: React.FC = () => {
  return (
    <section className="flex flex-col max-w-4xl m-auto w-full min-h-screen bg-dutch-white pt-24">
      <h1 className="mb-6 text-5xl font-russo text-transparent bg-clip-text bg-gradient-to-r from-[#184E77] to-[#34A0A4]">
        Work hard. Study harder.
      </h1>

      <div className="animate-fade-in-1 flex flex-col">
        <p className="mb-14 font-roboto text-base text-paynes-gray">
          Possuo experiências em <strong>React.js</strong> com{" "}
          <strong>Next.js</strong>, <strong>Vue.js</strong> com{" "}
          <strong>Nuxt.js</strong>, <strong>Typescript</strong>,{" "}
          <strong>Node.js</strong>, <strong>Axios</strong>,{" "}
          <strong>Formik</strong> + <strong>Yup</strong> &{" "}
          <strong>React Hook Form</strong> + <strong>Zod</strong>, bibliotecas
          de estilização como <strong>Tailwind CSS</strong>,{" "}
          <strong>Headless UI</strong>, <strong>Material UI</strong>,{" "}
          <strong>Ant Design</strong>, <strong>Bootstrap</strong>, dentre
          outros. Sei trabalhar seguindo metodologias ágeis como o Scrum e com
          controle de versionamento de códigos com <strong>GIT</strong>{" "}
          (GitHub). Também possuo experiência em ferramentas de design e
          prototipagem de interfaces (UI), como o <strong>Figma</strong>, e em
          gerenciadores de conteúdos (CMS) como o <strong>WordPress</strong>.
        </p>

        <h2 className="mb-3 text-2xl font-russo text-paynes-gray">Carreira</h2>
        <div className="mb-14 flex flex-col gap-y-5">
          <JobExperience
            jobTitle="Desenvolvedor Frontend"
            companyName="Stone Plus Concrete Design"
            companyWebsite="https://www.stoneplus.com.br/"
            location="Fortaleza, CE"
            arrangement="Remoto"
            startMonth="Mar"
            startYear={2023}
            isCurrentJob={true}
          />

          <JobExperience
            jobTitle="Desenvolvedor Wordpress"
            companyName="Autônomo"
            location="Belo Horizonte"
            arrangement="Remoto"
            startMonth="Mar"
            startYear={2020}
            endMonth="Jul"
            endYear={2020}
            isCurrentJob={false}
          />
        </div>

        <h3 className="mb-3 text-2xl font-russo text-paynes-gray">Acadêmico</h3>
        <div className="mb-14 flex flex-col gap-y-5">
          <AcadExperience
            courseTitle="Sistemas de Informação"
            institutionName="Wyden UniFanor"
            institutionWebsite="https://www.unifanor.edu.br/unifanor/"
            location="Fortaleza, CE"
            startMonth="jul"
            startYear={2021}
            endMonth="dez"
            endYear={2025}
          />

          <AcadExperience
            courseTitle="Desenvolvedor Fullstack"
            institutionName="Digital College"
            institutionWebsite="https://digitalcollege.com.br/"
            location="Fortaleza, CE"
            startMonth="set"
            startYear={2022}
            endMonth="out"
            endYear={2023}
          />
        </div>
      </div>
    </section>
  );
};
