import { useState } from "react";

import Head from "next/head";
// import Image from "next/image";

import Page from "../layouts/page";

import ContentBlock from "../components/website/ContentBlock";
import H2 from "../components/website/H2";
import H3 from "../components/website/H3";
import P from "../components/website/P";
// import { Button } from "../components/Button";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Praline.ai</title>
        <meta name="description" content="Praline.ai Privacy Policy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-gray-100">
        <h1 className="text-3xl font-bold mb-12">Privacy policy</h1>
        {/* <P>Information according to § 5 of the German Telemedia Act</P> */}
        <hr className="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700" />

        <ContentBlock>
          <H2>1. Responsible for data processing</H2>
          <P>
            Praline AI GbR is responsible within the meaning of Article 4 Z 7
            GDPR. You can find at:
          </P>
          <P>
            Schönhauser Allee 43 <br />
            10435 Berlin <br />
            Germany <br />
            <a className="underline" href="mailto:katia@praline.ai">
              katia@praline.ai
            </a>
          </P>
          <H3>Representation</H3>
          <P>Katia Yakovleva, Riccardo Buzzotta and Daniel Baumann</P>

          <H3>Data protection officer</H3>
          <P>
            Alvaro Suarez Rionegro <br />
            alvarosuarez@gmail.com
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>2. Purposes to process your personal data</H2>

          <H3>Use of the website and contact</H3>
          <P>
            a. Processing purposes: We operate the Praline.ai website to provide
            information on Praline. To contact us, we provide a mail to link on
            the website that you can use to send us messages. In principle, the
            website can also be used without the processing of your personal
            data, whereby no contact can be made without your provision of
            personal data.
          </P>
          <P>
            b. Categories of data: For the processing purposes mentioned above,
            we process your e-mail address, IP address, date and time of the
            request as well as additional personal data that you voluntarily
            provide to us for the purposes of contacting us, such as first and
            last name, social media handle or telephone number. The address
            (URL) of the accessed website, browser and browser version, the
            operating system used, the address (URL) of the previously visited
            pages (referrer URL), the host name and the IP address of the device
            from which access is made and the date are also recorded and time
            stored in web server log files.
          </P>

          <P>
            c. Legal basis: We process personal data on the basis of legitimate
            legal interests (Article 6 Paragraph 1 lit f GDPR) for the proper
            operation of the website and for the provision of information about
            Praline.
          </P>

          <P>
            d. Duration of storage: We store personal data for the processing
            purposes mentioned above for the duration when visit the website or,
            in the case of a request via the mailto link, for the duration of
            the processing of the request.
          </P>

          <H3>
            Processing of personal data for sending information about Praline
          </H3>
          <P>
            a. Purposes of processing: Upon request, we will send information
            about Praline by email. For this we need personal data, without this
            data we cannot send the requested information.
          </P>

          <P>
            b. Categories of data: We process first and last name, gender, email
            address and user ID for the aforementioned processing purposes.
          </P>
          <P>
            c. Legal basis: We process personal data for the processing purposes
            mentioned above on the basis of consent (Article 6 (1) (a) GDPR).
          </P>
          <P>
            d. Duration of storage: We process personal data for the
            above-mentioned processing purposes up to the point at which the
            respective consent is revoked. A revocation means that we no longer
            process data from this point in time.
          </P>
          <P>To revoke the consent, please contact us katia@praline.ai</P>

          <H3>Legal Prosecution</H3>
          <P>
            a. Processing purposes: If there is a legal dispute, we store the
            data necessary for appropriate legal prosecution in order to
            transmit this to legal representatives and courts.
          </P>
          <P>
            b. Categories of data: For the aforementioned processing purposes,
            we process contact details (e.g. first and last name, address),
            information and data in connection with the legal dispute in
            question (e.g. usage history or behavior in relation to the use of
            the website).
          </P>
          <P>
            c. Legal basis: We process personal data on the basis of legitimate
            legal interests (Article 6 Paragraph 1 lit f in conjunction with
            Article 9 Paragraph 2 lit f GDPR) for appropriate legal prosecution.
          </P>
          <P>
            d. Duration of storage: We store personal data for the
            above-mentioned processing purposes for as long as this is necessary
            to assert claims against the users or to defend ourselves against
            claims they have made against us or until the statutory limitation
            periods have expired, whereby the statutory limitation period for
            claims from the breach of contracts is three years.
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>3. To which recipients will personal data be transmitted?</H2>
          <P>
            3.1 In the course of our data processing, we transmit personal data
            to the following recipients to the extent necessary: called service
            providers, legal representatives, courts and administrative
            authorities as well as companies that are commissioned to support
            our company&apos;s internal IT infrastructure (software, hardware).
          </P>
          <P>
            3.2 We use processors who perform services on our behalf. The
            processors may only process the data provided to them in accordance
            with our instructions and to the extent necessary for us to carry
            out services.
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>4. Profiling</H2>
          <P>
            4.1 We process personal data neither automatically nor
            non-automatically with the aim of evaluating certain personal
            aspects (profiling).
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>5. To what extent is there automated decision-making?</H2>
          <P>
            5.1 We do not use fully automated decision-making in accordance with
            Article 22 GDPR. If we use these processes in the future, we will
            inform separately about this and the rights in this regard, provided
            this is required by law.
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>6. Rights</H2>
          <P>
            6.1 Users have the right to information under Article 15 GDPR, the
            right to rectification under Article 16 GDPR, the right to erasure
            under Article 17 GDPR, the right to restriction of processing under
            Article 18 GDPR, the right to object under Article 21 GDPR, the
            right not to be subject to automated decisions in individual cases,
            including profiling, and the right to data portability in accordance
            with Art. 20 GDPR. In addition, there is a right of appeal to a
            competent data protection supervisory authority (Article 77 GDPR).
          </P>
          <P>
            6.2 The competent supervisory authority is the German Federal Data
            Protection Authority - Berliner Beauftragte für Datenschutz und
            Informationsfreiheit (BlnBDI) Friedrichstraße 219, 10969 Berlin,
            Germany (https://www.datenschutz-berlin.de)
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>7. Cookie Information</H2>
          <H3>What are cookies?</H3>
          <P>
            a. Cookies are small data sets that are generated by a web server,
            sent through the Internet and stored on an end device with the help
            of the browser program. The website uses &quot;cookies&quot;
            essentially to recognize users or their devices, to save the
            user&apos;s preferences or information for the duration of the
            surfing or in the event of return. Cookies are also used to display
            behavior-based advertising and to control ad content.
          </P>

          <H3>What types of cookies are there?</H3>
          <P>a. Distinction by domain</P>
          <P>
            First party cookies: <br />
            Are sent and read exclusively from the domain of the service
            provider.
          </P>
          <P>
            Third party cookies: <br />
            Are sent and read by domains from other service providers.
          </P>

          <H3>Distinction according to storage duration</H3>
          <P>
            Session cookies (session-id): Temporary cookies that are
            automatically deleted when the browser is closed. Session cookies
            enable the user&apos;s movements on the website to be recognized, so
            that information is retained. Without cookies, websites have no
            &quot;memory&quot;.
          </P>
          <P>
            Persistent cookies: Persistent cookies that have to be deleted
            manually or are deleted after a certain period of time. These
            cookies help the website to remember the user and their preferences;
            e.g. language selection, menu preferences, internal bookmarks or
            favorites.
          </P>

          <H3>Differentiation by use</H3>
          <P>
            Technically necessary cookies: These cookies are required to ensure
            the functionality of the website and web application and cannot be
            deactivated for this reason.
          </P>
          <P>
            Analysis cookies: These cookies collect anonymous information to
            create statistics to better understand user behavior on the website
            and in the web application and to improve the application.
          </P>
          <P>
            Marketing Cookies: These cookies store information about visited
            websites in order to display personalized advertisements.
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>8. Use of cookies without consent</H2>
          <P>
            8.1 Praline is entitled to store cookies on the end device of the
            (informed) user, the sole purpose of which is to carry out or
            facilitate the transmission of a message over an electronic
            communications network, or, to the extent strictly necessary, to
            carry out a service expressly requested by the participant or user
            to provide a service (Art. 5 Para. 3 ePrivacy Directive).
          </P>
        </ContentBlock>
      </Page>
    </div>
  );
}
