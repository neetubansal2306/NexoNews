import React, { Component } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Gabrielle Fonrouge",
  //     title:
  //       "Mattel says Barbies and Hot Wheels could soon get more expensive under Trump's tariffs - CNBC",
  //     description:
  //       "Some retailers are looking to pass on the cost of tariffs to their suppliers, but are also considering increasing prices to avoid lower profits.",
  //     url: "https://www.cnbc.com/2025/02/05/barbies-and-hot-wheels-more-expensive-under-trump-tariffs.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/107404698-17138124992024-03-07t065347z_1332554293_rc2x76abhen2_rtrmadp_0_mattel-barbie-anniversary.jpeg?v=1738774207&w=1920&h=1080",
  //     publishedAt: "2025-02-05T14:51:45Z",
  //     content:
  //       "Mattel could soon raise the prices of toys such as Barbie and Hot Wheels in response to new tariffs imposed by President Donald Trump, executives said Tuesday. \r\nThe toy giant, which manufactures abo… [+2533 chars]",
  //   },
  //   {
  //     source: {
  //       id: "associated-press",
  //       name: "Associated Press",
  //     },
  //     author: "MICHELLE CHAPMAN",
  //     title:
  //       "Box-office smash ‘Moana 2' drives Disney profit in the first quarter - The Associated Press",
  //     description:
  //       "Disney easily topped first-quarter expectations thanks in part to the box office success of “Moana 2.” The Walt Disney Co. earned $2.55 billion, or $1.40 per share, for the period ended Dec. 28. The Burbank, California-based company earned $1.91 billion, or $…",
  //     url: "https://apnews.com/article/disney-iger-moana-streaming-c2128459cbe670c85f2f374669954a99",
  //     urlToImage:
  //       "https://dims.apnews.com/dims4/default/38bf10d/2147483647/strip/true/crop/6678x3756+0+347/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Ff3%2Fb2%2F5c2a036641a17721edab2dadd7da%2Ffbeaa45e03ad421ca9458167d4290b9c",
  //     publishedAt: "2025-02-05T14:39:00Z",
  //     content:
  //       'NEW YORK (AP) Disney easily topped first-quarter expectations thanks in part to the box office smash Moana 2.\r\nThere were some oversized expectations for the animated film but Moana 2", originally in… [+3140 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Motley Fool",
  //     },
  //     author: "Motley Fool Staff",
  //     title: "AMD Earnings: Data Center and PC Shine - The Motley Fool",
  //     description: "",
  //     url: "https://www.fool.com/investing/2025/02/05/amd-earnings-data-center-and-pc-shine/",
  //     urlToImage:
  //       "https://g.foolcdn.com/editorial/images/806532/data-center.jpg",
  //     publishedAt: "2025-02-05T14:20:00Z",
  //     content:
  //       "Here's our initial take on Advanced Micro Devices' (AMD -8.13%) fourth-quarter financial report.\r\nKey Metrics\r\n<table><tr><th>Metric</th><th>Q4 2023</th><th>Q4 2024</th><th>Change</th><th>vs. Expecta… [+2840 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Motley Fool",
  //     },
  //     author: "Anthony Di Pizio",
  //     title:
  //       "Mark Zuckerberg Just Delivered Incredible News for Nvidia, AMD, and Micron Stock Investors - The Motley Fool",
  //     description: "",
  //     url: "https://www.fool.com/investing/2025/02/05/mark-zuckerberg-delivered-nvidia-amd-micron-stock/",
  //     urlToImage:
  //       "https://g.foolcdn.com/editorial/images/806240/a-digital-rendering-of-computer-chips-with-one-labelled-ai.jpg",
  //     publishedAt: "2025-02-05T14:04:00Z",
  //     content:
  //       "Last week, semiconductor stocks like Nvidia(NVDA 3.04%), Advanced Micro Devices(AMD -9.92%), and Micron Technology(MU 0.38%) plunged on news that a Chinese start-up called DeepSeek had figured out ho… [+5998 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Barron's",
  //     },
  //     author: "Barron's",
  //     title:
  //       "Uber Stock Falls After Earnings. Guidance Disappointed. - Barron's",
  //     description: null,
  //     url: "https://www.barrons.com/articles/uber-earnings-stock-price-a7509db9",
  //     urlToImage: null,
  //     publishedAt: "2025-02-05T13:55:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Investor's Business Daily",
  //     },
  //     author: null,
  //     title:
  //       "Futures Drop Ahead Of ADP Jobs Report - Investor's Business Daily",
  //     description:
  //       "Alphabet, AMD and Uber Technologies plunged on earnings Wednesday morning.",
  //     url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-alphabet-googl-stock-amd-uber/",
  //     urlToImage:
  //       "https://www.investors.com/wp-content/uploads/2024/11/Stock-wallstreetnyseflag-30-shutt.jpg",
  //     publishedAt: "2025-02-05T13:03:00Z",
  //     content:
  //       "Information in Investors Business Daily is for informational and educational purposes only and should not be construed as an offer, recommendation, solicitation, or rating to buy or sell securities. … [+1064 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Dave Michaels",
  //     title:
  //       "SEC Ousts Top Litigator Who Battled With Crypto Giants - The Wall Street Journal",
  //     description:
  //       "The agency reassigned its head of litigation to a job in its IT office",
  //     url: "https://www.wsj.com/finance/currencies/sec-ousts-top-litigator-who-battled-with-crypto-giants-558548a8",
  //     urlToImage: "https://images.wsj.net/im-24016850/social",
  //     publishedAt: "2025-02-05T13:00:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Barron's",
  //     },
  //     author: "Barron's",
  //     title:
  //       "Google-Parent Alphabet Beat Earnings Expectations. Why the Stock Is Tumbling. - Barron's",
  //     description: null,
  //     url: "https://www.barrons.com/articles/alphabet-earnings-stock-price-google-476852a7",
  //     urlToImage: null,
  //     publishedAt: "2025-02-05T12:42:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Barron's",
  //     },
  //     author: "Barron's",
  //     title:
  //       "DeepSeek Is Great, Say Google, Palantir, Nvidia. Why Stock Markets Should Worry and 5 Other Things to Know Today. - Barron's",
  //     description: null,
  //     url: "https://www.barrons.com/articles/deepseek-google-palantir-nvidia-what-to-know-today-7d3738f8",
  //     urlToImage: null,
  //     publishedAt: "2025-02-05T12:09:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Forbes",
  //     },
  //     author: "Jeff Kauflin",
  //     title:
  //       "Inside The Unlikely Turnaround Of A Fintech Helping Immigrants Get Access To Credit - Forbes",
  //     description:
  //       "The Covid pandemic crushed immigration and demand for Nova Credit's tech. Then its founder discovered a second line of business.",
  //     url: "https://www.forbes.com/sites/jeffkauflin/2025/02/05/inside-the-unlikely-turnaround-of-a-fintech-helping-immigrants-get-access-to-credit/",
  //     urlToImage:
  //       "https://imageio.forbes.com/specials-images/imageserve/67a28fd8672918cedc67b251/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds",
  //     publishedAt: "2025-02-05T11:30:00Z",
  //     content:
  //       "Inearly 2020, after four grueling years trying to prove itself to financial institutions and investors, Nova Credit was finally starting to taste success. It had built Credit Passport, a novel financ… [+11786 chars]",
  //   },
  //   {
  //     source: {
  //       id: "abc-news",
  //       name: "ABC News",
  //     },
  //     author: "ABC News",
  //     title: "Trump's China tariffs could drive up these prices - ABC News",
  //     description: null,
  //     url: "https://abcnews.go.com/Business/trump-china-tariffs-could-drive-up-these-prices/story?id\\\\u003d118431920",
  //     urlToImage: null,
  //     publishedAt: "2025-02-05T11:09:08Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "Sean McLain, Megumi Fujikawa",
  //     title:
  //       "Nissan to Reject Honda Deal to Create World’s No. 3 Automaker - The Wall Street Journal",
  //     description: "Shares in Nissan fall while Honda stock jumps",
  //     url: "https://www.wsj.com/business/autos/nissan-to-reject-hondas-merger-terms-putting-deal-in-peril-d29e808f",
  //     urlToImage: "https://images.wsj.net/im-10463395/social",
  //     publishedAt: "2025-02-05T11:06:00Z",
  //     content:
  //       "Nissans7201-4.87%decrease; red down pointing triangle\r\nboard has determined that Hondas terms for a combination of the two automakers are unacceptable, people familiar with the matter said, endangeri… [+475 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "The Colorado Sun",
  //     },
  //     author: "Tamara Chuang",
  //     title:
  //       "Colorado’s high egg prices are blamed on bird flu, but there’s more to the story - The Colorado Sun",
  //     description:
  //       "Egg farms are still recovering from the 2022 outbreak but now there’s also the cage-free law, mutations and competition as bird flu devastates other states.",
  //     url: "http://coloradosun.com/2025/02/05/colorado-high-egg-prices-bird-flu/",
  //     urlToImage:
  //       "https://newspack-coloradosun.s3.amazonaws.com/wp-content/uploads/2025/01/IMG_3422-scaled.jpg",
  //     publishedAt: "2025-02-05T10:30:00Z",
  //     content:
  //       "Walk into nearly any grocery store at the moment and the price for a dozen eggs may shock you if any eggs are in stock at all.\r\nMore than anything else, blame bird flu, say Colorado egg farmers, the … [+9701 chars]",
  //   },
  //   {
  //     source: {
  //       id: "business-insider",
  //       name: "Business Insider",
  //     },
  //     author: "James Rodriguez",
  //     title:
  //       "Workers forced to return to the office may soon become 'accidental landlords' - Business Insider",
  //     description:
  //       "Homeowners forced to move face a tough dilemma: Sell the old house or rent it out? Going the landlord route makes sense for some, but it's not easy.",
  //     url: "https://www.businessinsider.com/return-to-office-orders-accidental-landlords-sell-rent-home-mortgage-2025-2",
  //     urlToImage:
  //       "https://i.insider.com/67a22ef7bfebcc4d029dada2?width=1200&format=jpeg",
  //     publishedAt: "2025-02-05T09:07:00Z",
  //     content:
  //       "Clay Spence never really wanted to be a landlord. Lately, though, it's begun to feel like the only sensible option.\r\nSpence, a 27-year-old financial analyst, lives east of Orlando in Florida's Brevar… [+12011 chars]",
  //   },
  //   {
  //     source: {
  //       id: "abc-news",
  //       name: "ABC News",
  //     },
  //     author: "ABC News",
  //     title:
  //       "100,000 eggs worth $40,000 stolen from trailer as police try to crack the case - ABC News",
  //     description: null,
  //     url: "https://abcnews.go.com/US/100000-eggs-worth-40000-stolen-trailer-police-crack/story?id\\\\u003d118474293",
  //     urlToImage: null,
  //     publishedAt: "2025-02-05T07:28:29Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Ramishah Maruf",
  //     title:
  //       "The end of cheap Shein and Temu hauls? How Trump’s tariffs could make those shipments more expensive - CNN",
  //     description:
  //       "Americans love Shein, Temu and Alibaba for two reasons: cheap prices and fast shipping.",
  //     url: "https://www.cnn.com/2025/02/05/business/shein-temu-alibaba-china-tariffs-de-minimis/index.html",
  //     urlToImage:
  //       "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2063403281.jpg?c=16x9&q=w_800,c_fill",
  //     publishedAt: "2025-02-05T06:22:00Z",
  //     content:
  //       "Americans love Shein, Temu and AliExpress for two reasons: cheap prices and fast shipping.\r\nTrumps tariffs could change that.\r\nTrumps tariff orders reversed a long-standing shipping loophole: the de … [+4949 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "The Wall Street Journal",
  //     title:
  //       "Australia Bans DeepSeek From Government Devices - The Wall Street Journal",
  //     description: null,
  //     url: "https://www.wsj.com/tech/australia-bans-deepseek-from-government-devices-5c1534d0",
  //     urlToImage: null,
  //     publishedAt: "2025-02-05T04:17:00Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Tipranks.com",
  //     },
  //     author: "Marty Shtrubel",
  //     title: "Palantir Stock Hits a New Street-High Price Target - TipRanks",
  //     description:
  //       "Palantir (NASDAQ:PLTR) stock was one of last year’s biggest winners and with the way 2025 is shaping up to be, don’t bet against the big data company seeing out thi...",
  //     url: "https://www.tipranks.com/news/palantir-stock-hits-a-new-street-high-price-target",
  //     urlToImage:
  //       "https://blog.tipranks.com/wp-content/uploads/2024/03/PLTR-0311.jpg",
  //     publishedAt: "2025-02-05T01:58:15Z",
  //     content: "",
  //   },
  // ];
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apikey=8c7032fff74244e2962f7735eb823aaa&page=1&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=us&category=businesscategory=$(this.props.category}8c7032fff74244e2962f7735eb823aaa&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
      this.props.category
    }&apikey=8c7032fff74244e2962f7735eb823aaa&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }category=$(this.props.category}8c7032fff74244e2962f7735eb823aaa&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles || [],
      loading: false,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${
        this.props.category
      }8c7032fff74244e2962f7735eb823aaa&page=${this.state.page + 1}&pageSize=${
        this.props.pageSize
      }`;
      // let url = `https://newsapi.org/v2/top-headlines?country=${
      //   this.props.country
      // }&category=${
      //   this.props.category
      // }category=$(this.props.category}8c7032fff74244e2962f7735eb823aaa&page=${
      //   this.state.page + 1
      // }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    // console.log("hello");
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "20px " }}>
          NewsMonkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; prev
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
