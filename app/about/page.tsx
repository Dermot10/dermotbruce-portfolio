export default function AboutPage() {
  return (
    <section className="py-12 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About</h1>

      {/* Introduction */}
      <div className="mb-8">
        <p className="mb-4 text-justify">
          I’m a software engineer with a strong background in backend development, cloud infrastructure, and automation, and I’m increasingly exploring frontend technologies and AI engineering. Over the years, I’ve delivered production systems that are reliable, scalable, and aligned with business goals, from high-throughput data pipelines to compliance-critical automation and AI-powered microservices.
        </p>
      </div>

      {/* Technical Expertise */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Technical Expertise</h2>
        <p className="mb-4 text-justify">
          My work spans multiple domains: building business-critical microservices in Go to integrate Azure and Google Cloud data, automating GDPR erasure workflows in Python on AWS Lambda, and developing AI-driven recommendation engines and automation pipelines using Tines and Python. I focus on designing end-to-end solutions that balance technical trade-offs, scalability, maintainability, and measurable impact.
        </p>
      </div>

      {/* Approach & Philosophy */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Approach & Philosophy</h2>
        <p className="mb-4 text-justify" >
          I take a product-first approach, prioritising solutions that solve real problems for users and teams. This includes architecting detection-as-code frameworks, low-code automation workflows, threat intelligence APIs, and observability tools that improve operational efficiency and decision-making. I aim to reduce manual effort, improve visibility, and deliver tangible business outcomes.
        </p>
        <p className="text-justify">
          Beyond delivery, I value clean architecture, observability, and writing systems that other engineers can understand and extend. I enjoy exploring new technologies responsibly, whether in AI, cloud, or automation, while keeping operational reliability and efficiency front and center.
        </p>
      </div>

      {/* Future Goals */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Looking Ahead</h2>
        <p className="text-justify">
          Looking forward, I’m eager to continue building SaaS products, expanding my work in AI engineering, and delivering systems that meet growing technical and business challenges. I bring a combination of deep backend expertise, pragmatic problem solving, and a drive to make meaningful impact in every project I touch.
        </p>
      </div>
    </section>
  );
}
