import config from "@/config";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-800 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center w-full max-w-4xl px-4">
        <section id='Profile' className="w-full bg-gray-700 p-8 rounded-lg shadow-lg my-12">
          <div className="flex flex-col items-center space-y-4">
            <img src={config.tsu_icon} alt="Profile" className="rounded-full brightness-100 bg-transparent w-32 h-32 object-cover"/>
            <span className="text-2xl font-bold text-slate-100">{config.profile.name}</span>
            <span className="text-xl text-slate-400 my-4">{config.profile.age} ans</span>
          </div>
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl font-bold text-slate-100">{config.profile.job}</h1>
            <span className="text-lg text-slate-400">{config.profile.description}</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold text-slate-100 my-2">Origines</h1>
            <ul className="flex flex-wrap gap-4">
              {config.profile.origines.map((origin, index) => (
                <li key={index} className="text-lg text-slate-400">{origin}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold text-slate-100 my-2">Compétences</h1>
            <ul className="flex flex-wrap gap-4">
              {config.profile.skills.map((skill, index) => (
                <li key={index} className="text-lg text-slate-400">{skill}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold text-slate-100 my-2">Éducation</h1>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center space-x-2">
                <span className="text-lg text-slate-400">{config.profile.education.university}</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-lg text-slate-400">{config.profile.education.degree}</span>
                <span className="text-lg text-slate-400">{config.profile.education.year}</span>
              </li>
              </ul>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold text-slate-100 my-2">Liens sociaux</h1>
            <ul className="flex flex-wrap gap-4">
              {Object.entries(config.profile.socialMedia).map(([key, value], index) => (
                <li key={index} className="flex items-center space-x-2">
                  <a href={value} target="_blank" rel="noreferrer">
                    <img src={`https://img.shields.io/badge/${key}-lightgrey?style=for-the-badge&logo=${key}`} alt={key} className="h-6 w-6"/>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id='Projects' className="w-full bg-gray-700 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-slate-100 my-8">Mes projets récents</h1>
          {config.profile.projects.map((project, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
              <span className="text-lg text-slate-400">{project.description}</span>
              <span className="text-lg text-slate-400">Technologies utilisées: {project.technologies.join(', ')}</span>
            </div>
          ))}
        </section>
        <section id='Contact' className="w-full bg-gray-700 p-8 rounded-lg shadow-lg my-12">
          <h1 className="text-3xl font-bold text-slate-100 my-8">Contactez-moi</h1>
          <ul className="flex flex-wrap gap-4">
            <li className="flex items-center text-slate-400 space-x-2">Mail: tsubasa.clarity@gmail.com</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
