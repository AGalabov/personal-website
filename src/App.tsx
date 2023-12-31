import './App.css';

function App() {
  return (
    <>
      <div className="grid">
        <section>
          <h1>Hello, folks! 👋</h1>
          <p>
            My name is Alexandar Galabov and I am from Sofia, Bulgaria. A very
            active and outgoing person with passion for most sports out there. I
            also like experimenting with new technologies and building small
            projects. Here's some information on the things I currently keep
            myself busy with:
          </p>
          <ul>
            <li>
              🧑‍💻 Working full-time as a Senior Software Engineer at{' '}
              <a href="https://asteasolutions.com/" target="_blank">
                Astea Solutions
              </a>
              .
            </li>
            <li>
              🤖 Working part-time as a Senior Software Engineer at{' '}
              <a href="https://team-gpt.com/" target="_blank">
                Team-GPT
              </a>
              .
            </li>
            <li>
              💻 Main contributor of{' '}
              <a
                href="https://github.com/asteasolutions/zod-to-openapi"
                target="_blank"
              >
                @asteasolutions/zod-to-openapi
              </a>
              .
            </li>
            <li>👨‍🏫 Mentoring in our company's internship programs.</li>
            <li>
              🎓 A Bachelor degree in Software Engineering at Sofia University.
            </li>
            <li>
              🎓 A Master's degree in Technology entrepreneurship at Sofia
              University.
            </li>
            <li>🕺 Attending Bachata & Salsa courses.</li>
            <li>🏓 Professional table tennis player.</li>
            <li>
              🎯 2023 goal: Contribute more to Personal and Open Source
              projects.
            </li>
          </ul>
        </section>
        <img src="me.png" className="image" alt="Just me on a microphone" />
      </div>
    </>
  );
}

export default App;
