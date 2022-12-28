import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   // temp
  //   // setLoading(false);
  //   // setData(res200);

  //   fetch("http://20.113.19.4:80/api/v1/service/aks-d80a/score", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(deets),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Praline.ai</title>
        <meta
          name="description"
          content="The AI-powered workspace for content marketing"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Page showPromoMessage={true}>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lr:pr-8 lg:basis-2/5">
            <h1
              className="
                text-3xl
                font-bold
                mb-2
                lg:w-11/12
              "
            >
              The AI-powered workspace for content marketing
            </h1>

            <p className="mb-8 text-lg">
              Scale your content creation, be on top of your insights and grow
              your business.
            </p>

            <a
              className="
             inline-block
              whitespace-nowrap
          text-white
              font-bold
              tracking-wide
              rounded-lg
            px-4 py-3 mr-2
            bg-gray-900
            hover:bg-gray-800
          focus:outline-none
                focus:ring-4
              focus:ring-blue-300"
              onClick={(e) => {
                e.preventDefault();
                gtag("event", "page_view", {
                  page_title: "survey_view-index",
                });
                window.open("https://tally.so/r/wvXL5d");
              }}
              href="https://tally.so/r/wvXL5d"
              target="_blank"
              rel="noreferrer"
            >
              Get early access
            </a>
          </div>
          <div className="lg:pl-8 lg:basis-3/5 mb-12 lg:mb-0">
            <Image
              width={592}
              height={592}
              src={"/hero-transparent.png"}
              alt=" "
              priority="true"
            />
          </div>
        </div>
      </Page>
    </div>
  );
}
