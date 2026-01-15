/* eslint-disable @next/next/no-img-element */
export default function fieldonepager() {
  return (
    <main className="container">
      <section id="top" className="top-grid" aria-label="Top">
        <section
          id="file-header"
          className="file-header"
          aria-label="Field File Header"
        >
          <img
            className="dossier-shot"
            src="/assets/dossier.png"
            alt="Field dossier for Ike Theodore Umunnah"
            loading="lazy"
          />
        </section>
        <aside className="header-portrait">
          <figure className="headshot headshot-top">
            <a
              href="/assets/ikeUmunnahHD.jpg"
              download="ikeUmunnahHD.jpg"
              title="Download headshot"
            >
              <img
                src="/assets/headshot.png"
                alt="Headshot of Ike Umunnah"
                width={194}
                height={194}
                loading="lazy"
              />
            </a>
          </figure>
        </aside>
      </section>

      <section id="about-me">
        <h2 className="slug">Field notes / About me</h2>
        <ul>
          <li>
            <span>
              <strong>Richmond, VA native.</strong> At 15 I figured out how to
              call the Governor for an internship. He wasn&apos;t amused.
            </span>
            <span className="hand-note"> (I got it anyway.)</span>
          </li>
          <li>
            <strong>My mother taught me</strong> the worst thing anyone can ever
            say is &quot;no&quot;{" "}
            <span className="hand-note">
              (Still waiting for this to be proven wrong.)
            </span>
          </li>
        </ul>
      </section>

      <section id="where-i-lived">
        <h2 className="slug">Field Coordinates / Where life has taken me</h2>
        <ul>
          <li>
            Served, built, and traveled across more than{" "}
            <span className="highlight-yellow">50 countries</span>, some with
            Fortune 500 companies, some on behalf of the American people, and
            some out of pure curiosity.
          </li>
          <li>
            Saudi Arabia surprised me most, watching tradition and
            transformation collide. <br />{" "}
            <span className="hand-note">
              (Adaptation is a currency more valuable than oil.)
            </span>
          </li>
          <li>
            Lived in <span className="highlight-yellow">11 states</span> and one
            territory: VA, GA, MO, SC, ND, MA, MN, CA, WI, DC, and PR.
          </li>
          <li>
            Extended time in{" "}
            <span className="highlight-yellow">Bangalore, India</span>{" "}
            <span className="hand-note">(long enough to feel local.)</span>
          </li>
          <li>
            <span className="hand-note">Bonus: 42 of 50 states visited.</span>
          </li>
        </ul>
      </section>

      <section id="where-i-worked">
        <h2 className="slug">Field record / Career</h2>
        <ul>
          <li>
            <strong>BIDEN ADMINISTRATION.</strong> Presidential Appointee Chief
            Strategy Officer, Global Markets U.S. Department of Commerce
            <ul>
              <li>
                Represented the United States across more than 20 countries,
                including Brazil, India, Saudi Arabia, Spain, and Azerbaijan.
                Shaped strategy that positioned U.S. companies for wins across
                sectors. Negotiated directly with Foreign Ministers,
                Ambassadors, and Senior Executives.
              </li>
              <li>
                I measured silence, knowing when to speak and when to let the
                weight of American soft power do the work. In Sao Paulo, I
                acted. In Riyadh, I measured. Dispatched when outcomes mattered
                most.
              </li>
            </ul>
          </li>
          <li>
            <strong>COLUMBIA UNIVERSITY. </strong>Faculty at Columbia. Teaching
            leadership to architects and engineers, disciplines that shape the
            physical world. In my course, they learn to shape people. Course
            built for impact.{" "}
            <span className="hand-note">
              Recognized as a student favorite.
            </span>
          </li>
          <li>
            <strong>TARGET. </strong>Selected to lead Global Strategic
            Partnerships at the U.S.&apos;s 2nd largest retailer at a time when
            it was leaning in globally, built early partnerships linking
            business and government in India while shaping enterprise strategy
            with the President of Target India, proved that global reach means
            nothing without local judgment{" "}
            <span className="hand-note">
              (aligning innovation with purpose and purpose with profit.)
            </span>
          </li>
          <li>
            <strong>ROCKWELL AUTOMATION. </strong>Led global public affairs
            strategy for an <span className="highlight-yellow">$8 billion</span>{" "}
            Fortune 500 enterprise across 80 countries with 23,000 employees. My
            job was to make the <span className="highlight-yellow">CEO shine</span>. I did. Lifting investor confidence
            and shareholder value.
          </li>
          <li>
            <strong>U.S. ARMY. </strong>6 years in the Army National Guard. 2
            enlisted, 4 as an officer. Started in public affairs, ended up
            briefing Generals. The Army taught me to stay calm when the stakes
            are high and the facts are incomplete. That&apos;s where I learned
            clear decisions beat perfect ones.{" "}
            <span className="hand-note">
              I still lead that way: fast, honest, accountable.
            </span>
          </li>
          <li>
            <strong>FOUNDER. </strong>Founded an auto tech startup in college
            focused on simplifying the car-buying process and giving people
            their time back. It wasn&apos;t glamorous work, but it was real.
          </li>
        </ul>
      </section>

      <section id="where-i-learned">
        <h2 className="slug">Field training / where I learned</h2>
        <ul className="beliefs-new">
          <li>
            <strong>HARVARD UNIVERSITY.</strong> Masters in Management and Policy
            from HGSE, cross-pollinated by HBS and HKS. Entered focused on
            education&apos;s power to shape people and left understanding
            business shapes outcomes.
          </li>
          <li>
            <strong>
              <a
                href="https://www.presidentialleadershipscholars.org"
                target="_blank"
                rel="noopener noreferrer"
                title="Presidential Leadership Scholars link"
              >
                PRESIDENTIAL LEADERSHIP SCHOLAR.
              </a>
            </strong>{" "}
            Selected by Presidents George W. Bush and Bill Clinton as 1 of 60
            global leaders trusted to tackle real problems across business and
            community.{" "}
            <span className="hand-note">
              Proof that leadership doesn&apos;t need a party line to get things
              done.
            </span>
          </li>
          <li>
            <strong>LAW DEGREE. UND</strong> Law, known for its rigor and
            practicality. Trained to think critically, argue precisely, and move
            decisions from theory to action.
          </li>
          <li>
            <strong>MOREHOUSE COLLEGE. B.A. </strong>
            in International Relations. Chose it because it sounded cool. Now
            I&apos;m living it. Two gigs helped pay for college: startup founder
            and BMW sales advisor.{" "}
            <span className="hand-note">
              Learned how to read people, navigate differences, and perform
              under pressure.
            </span>
          </li>
        </ul>
      </section>

      <section id="what-i-do">
        <h2 className="slug">Field operations / What I do</h2>
        <p>
          I advise funds, families, enterprises, senior leaders, and sometimes
          public figures when outcomes, reputation, or capital are at stake.
        </p>
        <p>I stay centered when the room tilts toward chaos.</p>
      </section>

      <section id="field-off-duty">
        <h2 className="slug">Field leave / off-duty </h2>
        <div className="field-off-duty__grid">
          <ul className="field-off-duty__list">
            <li>
              <strong>BLUEPRINT.</strong>{" "}
              <a
                href="https://reginaldflewis.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Reginald Lewis"
              >
                <i>Reginald Lewis&apos;s</i>
              </a>{" "}
              story inspired me. His story taught me that persistence,
              preparation, and excellence open every door. My friendship with
              his widow,{" "}
              <a
                href="https://loidalewis.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Loida Lewis"
              >
                <i>Loida Lewis</i>
              </a>
              , completes the circle.{" "}
              <span className="hand-note">
                (She texts faster than most 20-year-olds.)
              </span>
            </li>
            <li>
              <strong>VINTAGE GERMAN CARS (80s/90s).</strong> First car: 1985
              mahogany brown metallic Audi 5000S <br />
              <span className="hand-note">
                (a relationship built on faith, oil, and invoices.)
              </span>
              <br />
              On the lookout for an Agate Gray Porsche 911 992.1 with Bordeaux
              Red leather interior, heated steering wheel required.{" "}
              <span className="hand-note">Some things you don&apos;t negotiate</span>
            </li>
            <li>
              <strong>MODEL TRAINS.</strong> N-scale builder. Micro-scale
              precision teaches macro-level execution.
            </li>
            <li>
              <strong>PASSIONS.</strong> Economic mobility and opportunity
              through exposure.
            </li>
            <li>
              <strong>DOG DAD.</strong> Doberman Pinscher.{" "}
              <span className="highlight-yellow">
                My loyalty compass and patience trainer.
              </span>
            </li>
          </ul>
          <div className="field-off-duty__dog">
            <figure className="taped-photo small">
              <img
                src="/assets/dog.jpg"
                alt="Doberman Pinscher photo"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>

      <section id="closing">
        <h2 className="slug">Field comms / Where to find me</h2>
        <p>
          I am available for strategic calls, quiet advice, and to help make the
          tough decisions that shape outcomes.
        </p>
        <p>
          Sometimes I share writings or thoughts on leadership, strategy and
          endurance here:
        </p>
        <div className="social-logos" aria-label="Social links">
          <a
            href="https://medium.com/@iketheodoreumunnah"
            target="_blank"
            rel="noopener noreferrer"
            title="Medium"
          >
            <img src="/assets/mediumLogo.png" alt="Medium logo" loading="lazy" />
          </a>
          <a
            href="https://substack.com/@ikeumunnah"
            target="_blank"
            rel="noopener noreferrer"
            title="Substack"
          >
            <img
              src="/assets/substackLogo.png"
              alt="Substack logo"
              loading="lazy"
            />
          </a>
          <a
            href="https://x.com/IkeUmunnah"
            target="_blank"
            rel="noopener noreferrer"
            title="X (Twitter)"
          >
            <img src="/assets/xLogo.png" alt="X (Twitter) logo" loading="lazy" />
          </a>
          <a
            href="https://www.linkedin.com/in/ikeumunnah/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <img
              src="/assets/linkedinLogo.png"
              alt="LinkedIn logo"
              loading="lazy"
            />
          </a>
        </div>
      </section>
    </main>
  );
}
