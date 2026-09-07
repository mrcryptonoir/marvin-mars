import Plate from './ui/Plate';
import Reveal from './ui/Reveal';

export default function Dossier() {
  return (
    <section className="sec dossier" id="dossier">
      <div className="wrap">
        <div className="sec-head">
          <Reveal className="label">Chapter I — Subject</Reveal>
          <Reveal className="sec-head__n" delay={80}>FILE 001 / MARVIN</Reveal>
        </div>

        <div className="dossier__grid">
          <div className="dossier__col">
            <Reveal>
              <h2 className="dossier__h serif-display">
                A small black dog with a <em>ridiculous</em> amount of sky above him.
              </h2>
            </Reveal>

            <Reveal delay={90} className="dossier__body measure">
              <p>
                <strong>MARVIN WAS NEVER SUPPOSED TO MATTER.</strong> He is a scruffy
                black-and-white thing with floppy ears and a bow tie, the kind of dog
                that gets photographed on a factory floor and posted once and forgotten.
                He belongs to a man who spends his working hours arguing that humanity
                should not stay on one planet.
              </p>
              <p>
                The internet, being what it is, did the obvious thing. It put a helmet
                on him. Roman, domed, gold-crested — the exact silhouette of a cartoon
                Martian who has been threatening to blow up the Earth since 1948. Then
                it pointed him at the sky and waited.
              </p>
              <p>
                What follows is not a joke about a dog. It is a joke about a dog that
                arrived at the same time as a settlement layer for tokenized equities,
                on a network fast enough to make the joke land before you finished
                reading it. Timing is the only thing a meme actually owns.
              </p>
            </Reveal>

            <Reveal delay={140} className="dossier__stats">
              <div>
                <span className="mono">Subject</span>
                <strong>Marvin</strong>
              </div>
              <div>
                <span className="mono">Class</span>
                <strong>Legionary, I Martia</strong>
              </div>
              <div>
                <span className="mono">Home</span>
                <strong>Earth (former)</strong>
              </div>
              <div>
                <span className="mono">Assignment</span>
                <strong>Robinhood Chain</strong>
              </div>
            </Reveal>
          </div>

          <div className="dossier__col dossier__col--plates">
            <Reveal delay={60}>
              <Plate
                name="plate-archive"
                ratio="4 / 3"
                alt="Archive photograph of the subject before the mission"
                left="ARCHIVE 001"
                right="PRE-FLIGHT · EARTH"
              />
            </Reveal>
            <Reveal delay={160}>
              <Plate
                name="plate-portrait"
                ratio="3 / 4"
                alt="The subject in legionary armour"
                left="ARCHIVE 002"
                right="I MARTIA · SOL 001"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
