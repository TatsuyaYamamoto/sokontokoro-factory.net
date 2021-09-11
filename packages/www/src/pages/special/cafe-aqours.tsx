/*
block vars
  - var lang = "ja"
  - var pageName = "cafe-aqours"
  - var assetPath = "../../assets/";
  - var title = "Cafe Aqours 特設サイト | そこんところ工房"
  - var description = `"Cafe Aqours"は「カフェでクールにAqoursの曲が聞きたいぜ」というあなたの希望をかなえる、アコースティック・インストアレンジ音源です!`
  - var site_name = "Cafe Aqours | そこんところ工房"
  - var ogImageUrl = "https://www.sokontokoro-factory.net/__ogp/cafe-aqours.jpg"
  - var gaCode = process.env.NODE_ENV === "production"? "UA-127664761-3" : "UA-127664761-4";
  - var urlAc1YouTube = "https://www.youtube.com/watch?v=IKrST1ZwIvE&list=PLGCO2ueWMpn6FS2Cs3YzHXhrUWZLi7LRk"
  - var urlAc1Mellon = "https://www.melonbooks.co.jp/detail/detail.php?product_id=561154"
  - var urlAc1Booth = "https://sokontokoro.booth.pm/items/1670408"
  - var urlAc2YouTube = "https://www.youtube.com/watch?v=IKrST1ZwIvE&list=PLGCO2ueWMpn6FS2Cs3YzHXhrUWZLi7LRk"
  - var urlAc2Mellon = "https://www.melonbooks.co.jp/detail/detail.php?product_id=561155"
  - var urlAc2Booth = "https://sokontokoro.booth.pm/items/1677699"
  - var urlGoogleForm = "https://docs.google.com/forms/d/e/1FAIpQLSe5bSPvJ5XQM0IACqZ9NKoHuRUAcC_V1an16JGwHh6HeGd-oQ/viewform"
  - var urlTwitter = "https://twitter.com/T28_tatsuya"

include ../../_string
include ../../_config

doctype html
html(lang=`${lang}`)
  head

    meta(charset="utf-8")
    meta(http-equiv="X-UA-Compatible" content="IE=edge")
    meta(name="viewport" content="width=device-width,initial-scale=1")
    meta(name="description" content=`${description}`)

    title #{title}

    // GA
    script(async src=`https://www.googletagmanager.com/gtag/js?${gaCode}`)
    script.
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', "#{gaCode}");

    // Open Graph Protocol
    meta(name="og:title" content=`${title}`)
    meta(name="og:type" content="website")
    meta(name="og:image" content=`${ogImageUrl}`)
    meta(name="og:description" content=`${description}`)
    meta(name="og:site_name" content=`${site_name}`)
    meta(name="“og:locale:alternate" content="ja_JP")
    meta(name="“og:locale:alternate" content="en_US")

    // TODO: fix!
    //case lang
    //  when "en"
    //    meta(name="og:url" content=`${alternate_hreflang_en}`)
    //  when "ja"
    //  default
    //    meta(name="og:url" content=`${alternate_hreflang_ja}`)


    // language
    //link(rel="alternate" href="ja" hreflang=`${alternate_hreflang_ja}`) TODO: fix!
    //link(rel="alternate" href="en" hreflang=`${alternate_hreflang_en}`) TODO: fix!


    // Twitter card
    meta(name="twitter:card" content="summary_large_image")
    meta(name="twitter:site" content="@T28_Tatsuya")


    // DNS Prefetch
    each host in dns_prefetch_hosts
      link(rel="dns-prefetch" href=`http://${host}/`)


    // favicon
    link(rel="icon" sizes="32x32" href=`${favicon_url_32x32}`)
    link(rel="icon" sizes="192x192" href=`${favicon_url_192x192}`)


    // smartphone layout
    meta(name="theme-color" content="#3c93da")
    meta(name="msapplication-navbutton-color" content="#3c93da")
    meta(name="apple-mobile-web-app-status-bar-style" content="#3c93da")


    // stylesheet
    link(rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons")
    link(rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css")


    <link href="//fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&display=swap" rel="stylesheet">

    link(rel="stylesheet" href=`${assetPath}css/cafe-aqours.scss`)

  body
    a(href=`${TRANSLATE_BASE_PATH}special/cafe-aqours/index.pug`).translate-button#translate-button
      i.material-icons.mdc-toolbar__menu-icon translate

    main.cafe-aqours-container
      section.hero.sticky-container#top
        article.sticky-container__contents
          div.hero-logo
            div.hero-logo__series-title
              span Cafe Aqours
            div.hero-logo__series-description
              span Aqours no kyoku wo cafe demo kikitai.

        div#scroll-prompt.scroll-prompt
          span.scroll-prompt__text Scroll
          span.scroll-prompt__arrow

        img.sticky-container__background(src=`${assetPath}image/cafe_aqours_hero.jpg`)

      section.sticky-container#about
        article.sticky-container__contents
          div.about
            div.about__title Cafe Aqours?
            | <div class="about__description">
            | #{cafeaqours_about1}
            |
            | #{cafeaqours_about2}
        img.sticky-container__background--noizy(src=`${assetPath}image/cafe_aqours_background_about.jpg`)

      section.sticky-container#vol-1
        article.sticky-container__contents
          div.disc-info
            img.artwork(src=`${assetPath}image/cafe_aqours_artwork_vol1.jpg`)
            div.disc-detail
              div.disc-title Cafe Aqours Vol.1 君のこころは輝いてるかい?
              ul.track-list
                li.track-item
                  span 1. 君のこころは輝いてるかい?
                li.track-item
                  span 2. Step! ZERO to ONE
                li.track-item
                  span 3. Aqours☆HEROES
              ul.disc-links
                li
                  a(href=`${urlAc1YouTube}` target="__blank").link-button.vol1.youtube #{cafeaqours_link_label_youtube}
                li
                  a(href=`${urlAc1Mellon}` target="__blank").link-button.vol1.mellon #{cafeaqours_link_label_mellon}
        img.sticky-container__background--noizy(src=`${assetPath}image/cafe_aqours_background_vol1.jpg`)

      section.sticky-container#vol-2

        article.sticky-container__contents
          div.disc-info
            img.artwork(src=`${assetPath}image/cafe_aqours_artwork_vol2.jpg`)
            div.disc-detail
              div.disc-title Cafe Aqours Vol.2 恋になりたいAQUARIUM
              ul.track-list
                li.track-item
                  span 1. 恋になりたいAQUARIUM
                li.track-item
                  span 2. 待ってて愛のうた
                li.track-item
                  span 3. 届かない星だとしても
              ul.disc-links
                li
                  a(href=`${urlAc2YouTube}` target="__blank").link-button.vol2.youtube #{cafeaqours_link_label_youtube}
                li
                  a(href=`${urlAc2Mellon}` target="__blank").link-button.vol2.mellon #{cafeaqours_link_label_mellon}
        img.sticky-container__background--noizy(src=`${assetPath}image/cafe_aqours_background_vol2.jpg`)

      div.sticky-container#help
        div.footer-info.sticky-container__contents

          div.cp_qa.footer-info__help
            dl
              dt #{cafeaqours_help_1_q}
              dd #{cafeaqours_help_1_a}
              dt #{cafeaqours_help_2_q}
              dd #{cafeaqours_help_2_a}
              dt #{cafeaqours_help_4_q}
              dd
                span #{cafeaqours_help_4_a1}
                a(href=`${urlGoogleForm}` target="__blank").footer-info__help-link Google Form
                span #{cafeaqours_help_4_a2}
                a(href=`${urlTwitter}` target="__blank").footer-info__help-link Twitter
                span #{cafeaqours_help_4_a3}
              dt #{cafeaqours_help_5_q}
              dd #{cafeaqours_help_5_a}
        footer.owner-info
          include ../../components/_footer

        img.sticky-container__background--footer(src=`${assetPath}image/cafe_aqours_hero.jpg`)


    script(src=`${assetPath}js/cafe-aqours.js`)
*/

import React, { FC } from "react"
import { PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Box, Button } from "@chakra-ui/react"

import Footer from "../../components/Footer"
import * as styles from "../../styles/cafe-aqours.module.scss"

import imageArtworkVol1 from "../../assets/image/cafe_aqours_artwork_vol1.jpg"
import imageArtworkVol2 from "../../assets/image/cafe_aqours_artwork_vol2.jpg"
import imageBackgroundVol1 from "../../assets/image/cafe_aqours_background_vol1.jpg"
import imageBackgroundVol2 from "../../assets/image/cafe_aqours_background_vol2.jpg"

const discs = [
  {
    id: "vol-1",
    artworkUrl: imageArtworkVol1,
    title: "Cafe Aqours Vol.1 君のこころは輝いてるかい?",
    tracks: [
      { title: "1. 君のこころは輝いてるかい?" },
      { title: "2. Step! ZERO to ONE" },
      { title: "3. Aqours☆HEROES" },
    ],
    links: [
      <a
        className="link-button vol1 youtube"
        href="https://www.youtube.com/watch?v=IKrST1ZwIvE&amp;list=PLGCO2ueWMpn6FS2Cs3YzHXhrUWZLi7LRk"
        target="__blank"
      >
        YouTubeで視聴する
      </a>,
      <a
        className="link-button vol1 mellon"
        href="https://www.melonbooks.co.jp/detail/detail.php?product_id=561154"
        target="__blank"
      >
        メロンブックスでDLカードを購入する
      </a>,
    ],
    backgroundUrl: imageBackgroundVol1,
  },
  {
    id: "vol-2",
    artworkUrl: imageArtworkVol2,
    title: "Cafe Aqours Vol.2 恋になりたいAQUARIUM",
    tracks: [
      { title: "1. 恋になりたいAQUARIUM" },
      { title: "2. 待ってて愛のうた" },
      { title: "3. 届かない星だとしても" },
    ],
    links: [
      <a
        className="link-button vol2 youtube"
        href="https://www.youtube.com/watch?v=IKrST1ZwIvE&amp;list=PLGCO2ueWMpn6FS2Cs3YzHXhrUWZLi7LRk"
        target="__blank"
      >
        YouTubeで視聴する
      </a>,
      <a
        className="link-button vol2 mellon"
        href="https://www.melonbooks.co.jp/detail/detail.php?product_id=561155"
        target="__blank"
      >
        メロンブックスでDLカードを購入する
      </a>,
    ],
    backgroundUrl: imageBackgroundVol2,
  },
]
const faqList = [
  {
    q: `購入方法どのようなものですか？`,
    a: (
      <span>
        <a
          href="https://www.melonbooks.co.jp/circle/index.php?circle_id=46583"
          target="_blank"
        >
          メロンブックス
        </a>
        から「DLカード」、または「DLコード付きの本」を購入することが出来ます。
      </span>
    ),
  },
  {
    q: `「DLカード」「DLコード」とは何ですか？`,
    a: (
      <span>
        {`　Cafe Aqoursは、沼津の写真に貼り付けられたファイルダウンロード用のQRコードを読み込むことで音源をダウンロードして頂く配信形式になっています。DLカード・DLコードにはこのQRコードが印字されています。
　音声ファイルをダウンロードした後、使い終わったエモ写真は壁や冷蔵庫に貼って飾りましょう!`}
      </span>
    ),
  },
  {
    q: `配信形式はどのようなものですか？`,
    a: `DLカード・DLコードからは、以下のファイル形式をダウンロードすることが出来ます。
  ・mp3( 圧縮音源)
  ・wav (CD音質)
  ・flac (ハイレゾ音質)`,
  },
  {
    q: `問い合わせ先は？`,
    a: (
      <>
        <a
          className={styles.footerInfo__helpLink}
          href="https://docs.google.com/forms/d/e/1FAIpQLSe5bSPvJ5XQM0IACqZ9NKoHuRUAcC_V1an16JGwHh6HeGd-oQ/viewform"
          target="__blank"
        >
          Google Form
        </a>
        <span>、または</span>
        <a
          className={styles.footerInfo__helpLink}
          href="https://twitter.com/T28_tatsuya"
          target="__blank"
        >
          Twitter
        </a>
        <span>まで、どうぞお気軽に！</span>
      </>
    ),
  },
  {
    q: `製作者について`,
    a: (
      <span>
        企画・音楽・写真・イラスト: そこんところ工房(
        <a href="https://twitter.com/skntkr_factory" target="_blank">
          @skntkr_factory
        </a>
        )
      </span>
    ),
  },
]

const CafeAqoursIndexPage: FC<PageProps> = () => {
  return (
    <>
      <Box className={styles.cafeAqours}>
        <section className={styles.stickyContainer} id="top">
          <article className={styles.stickyContainer__contents}>
            <div className={styles.heroLogo}>
              <div className={styles.heroLogo__seriesTitle}>
                <span>Cafe Aqours</span>
              </div>
              <div className={styles.heroLogo__seriesDescription}>
                <span>Aqours no kyoku wo cafe demo kikitai.</span>
              </div>
            </div>
          </article>
          <div className={styles.scrollPrompt} id="scroll-prompt">
            <span className={styles.scrollPrompt__text}>Scroll</span>
            <span className={styles.scrollPrompt__arrow} />
          </div>
          <StaticImage
            className={styles.stickyContainer__background}
            src="../../assets/image/cafe_aqours_hero.jpg"
            alt="hero image"
          />
        </section>
        <section className={styles.stickyContainer} id="about">
          <article className={styles.stickyContainer__contents}>
            <div className={styles.about}>
              <div className={styles.about__title}>Cafe Aqours?</div>
              <div className={styles.about__description}>
                "Cafe
                Aqours"は「カフェでクールにAqoursの曲が聞きたいぜ」というあなたの希望をかなえる、アコースティック・インストアレンジ音源です!
                ↓にスクロールすると、リリース済みの作品を確認できます。YouTubeで視聴動画を配信していますので、コーヒーとみかんを片手にどうぞ☕🍊️
              </div>
            </div>
          </article>
          <StaticImage
            className={styles.stickyContainer__background__noizy}
            src="../../assets/image/cafe_aqours_background_about.jpg"
            alt="background image"
          />
        </section>

        {discs.map(disc => (
          <section
            className={styles.stickyContainer}
            id={disc.id}
            key={disc.id}
          >
            <article className={styles.stickyContainer__contents}>
              <div className={styles.discInfo}>
                <img
                  className={styles.artwork}
                  src={disc.artworkUrl}
                  alt="artwork"
                />
                <div className={styles.discDetail}>
                  <div className={styles.discTitle}>{disc.title}</div>
                  <ul className={styles.trackList}>
                    {disc.tracks.map(({ title }, i) => (
                      <li key={i}>
                        <span>{title}</span>
                      </li>
                    ))}
                  </ul>
                  <ul>
                    {disc.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
            <img
              className={styles.stickyContainer__background__noizy}
              src={disc.backgroundUrl}
              alt="background image"
            />
          </section>
        ))}

        <div className={styles.stickyContainer} id="help">
          <div
            className={[
              styles.stickyContainer__contents,
              styles.footerInfo,
            ].join(" ")}
          >
            <div className={[styles.faq, styles.footerInfo__help].join(" ")}>
              <dl>
                {faqList.map(({ q, a }, i) => (
                  <React.Fragment key={i}>
                    <dt>{q}</dt>
                    <dd>{a}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
          </div>
          <StaticImage
            className={styles.stickyContainer__background__footer}
            src="../../assets/image/cafe_aqours_hero.jpg"
            alt="background image"
          />
        </div>
      </Box>
      <Box position="relative" zIndex={2}>
        <Footer />
      </Box>
    </>
  )
}

export default CafeAqoursIndexPage
