import Head from "next/head";

import Page from "../layouts/page";

import ContentBlock from "../components/website/ContentBlock";
import H2 from "../components/website/H2";
import H3 from "../components/website/H3";
import P from "../components/website/P";

export default function Imprint() {
  return (
    <div>
      <Head>
        <title>Imprint - Praline.ai</title>
        <meta name="description" content="Praline.ai Imprint" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-gray-100">
        <h1 className="text-3xl font-bold mb-12">Imprint</h1>
        {/* <P>Information according to § 5 of the German Telemedia Act</P> */}
        <hr className="my-8 h-px bg-gray-100 border-0 dark:bg-gray-700" />

        <ContentBlock>
          <H2>Operator and Contact</H2>
          <P>
            Praline AI GbR <br />
            Schönhauser Allee 43 <br />
            10435 Berlin <br />
            Germany Contact:{" "}
            <a className="underline" href="mailto:katia@praline.ai">
              katia@praline.ai
            </a>
          </P>
        </ContentBlock>

        <ContentBlock>
          <H2>GDPR</H2>
          <P>
            Praline AI GbR (hereinafter &quot;PRALINE&quot;) is aware of the
            importance to ensure the confidentiality and lawful processing of
            your data when you visit our website. We use the terms set out in
            the General Data Protection Regulation (&quot;GDPR&quot;):
          </P>
          <P>
            <strong>Personal data</strong>: means any information relating to an
            identified or identifiable natural person (&quot;data
            subject&quot;); an identifiable natural person is one who can be
            identified, directly or indirectly, in particular by reference to an
            identifier such as a name, an identification number, location data,
            an online identifier or to one or more factors specific to the
            physical, physiological, genetic, mental, economic, cultural or
            social identity of that natural person.
          </P>

          <P>
            <strong>Processing</strong>: means any operation or set of
            operations which is performed on personal data or on sets of
            personal data, whether or not by automated means, such as
            collection, recording, organization, structuring, storage,
            adaptation or alteration, retrieval, consultation, use, disclosure
            by transmission, dissemination or otherwise making available,
            alignment or combination, restriction, erasure or destruction.
          </P>

          <P>
            <strong>Data subject</strong>: the person whose personal data is
            being processed.
          </P>

          <P>
            <strong>Controller</strong>: means the natural or legal person,
            public authority, agency or other body which, alone or jointly with
            others, determines the purposes and means of the processing of
            personal data; where the purposes and means of such processing are
            determined by Union or Member State law, the controller or the
            specific criteria for its nomination may be provided for by Union or
            Member State law.
          </P>

          <P>
            <strong>Consent (of the data subject)</strong>: means any freely
            given, specific, informed and unambiguous indication of the data
            subject&quot;s wishes by which he or she, by a statement or by a
            clear affirmative action, signifies agreement to the processing of
            personal data relating to him or her.
          </P>
        </ContentBlock>
      </Page>
    </div>
  );
}
