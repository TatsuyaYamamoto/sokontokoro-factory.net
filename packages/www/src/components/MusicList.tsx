import React, { FC } from "react"
import { Grid, Box, Text, Button } from "@chakra-ui/react"

const MusicCard: FC<{
  title: string
  thumbnailUrl: string
  youtubeUrl?: string
  nicoUrl?: string
}> = props => (
  <Box
    display="flex"
    flexDirection="column"
    backgroundColor="white"
    borderRadius={2}
    boxShadow="0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%);"
  >
    <Box display="flex" flexDirection="column" position="relative">
      <Box
        backgroundImage={props.thumbnailUrl}
        backgroundRepeat="no-repeat"
        backgroundPosition="50%"
        backgroundSize="cover"
        position="relative"
        _before={{
          display: "block",
          content: `""`,
          marginTop: "56.25%",
        }}
      />
    </Box>
    <Box p={2}>
      <Text className="mdc-typography--title">{props.title}</Text>
    </Box>
    <Box display="flex">
      {props.youtubeUrl && (
        <Button variant="ghost" onClick={() => window.open(props.youtubeUrl)}>
          YouTube
        </Button>
      )}
      {props.nicoUrl && (
        <Button variant="ghost" onClick={() => window.open(props.nicoUrl)}>
          ニコニコ
        </Button>
      )}
    </Box>
  </Box>
)

const MusicList: FC = () => {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(240px, 1fr))" gap={6}>
      {dateList.map(({ title, thumbnailUrl, youtubeUrl, nicoUrl }) => (
        <Box key={title}>
          <MusicCard
            title={title}
            thumbnailUrl={thumbnailUrl}
            youtubeUrl={youtubeUrl}
            nicoUrl={nicoUrl}
          />
        </Box>
      ))}
    </Grid>
  )
}

export default MusicList

const dateList = [
  {
    thumbnailUrl: "http://i.ytimg.com/vi/-ZN5tigIe-E/mqdefault.jpg",
    title:
      "【MV / Arrange / Remix】Marine Border Parasol【高海千歌 / 桜内梨子 / 渡辺 曜】",
    youtubeUrl: "https://www.youtube.com/watch?v=-ZN5tigIe-E",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/671qsGdUuUE/mqdefault.jpg",
    title: "【Arrange / MV】ぶる～べりぃ♡とれいん 【南ことり】",
    nicoUrl: "https://www.nicovideo.jp/watch/sm35669640",
    youtubeUrl: "https://www.youtube.com/watch?v=671qsGdUuUE",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/g8qJsZ8Lbx4/mqdefault.jpg",
    title:
      "(T28＾ω＾つ静岡県道17号沼津土肥線上のシンデレラ【G線上のシンデレラ / Arrange / MV】",
    nicoUrl: "https://www.nicovideo.jp/watch/sm35509292",
    youtubeUrl: "https://www.youtube.com/watch?v=g8qJsZ8Lbx4",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/peMCKpKCTlY/mqdefault.jpg",
    title: "(T28＾ω＾つ僕は毎日が告白日和【、です！ / arrange】",
    nicoUrl: "https://www.nicovideo.jp/watch/sm25365030",
    youtubeUrl: "https://www.youtube.com/watch?v=peMCKpKCTlY",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/ooKG_LTfSDM/mqdefault.jpg",
    title: "(T28＾ω＾つぼくは函館へ行こう【Awaken the power】",
    nicoUrl: "https://www.nicovideo.jp/watch/sm34370822",
    youtubeUrl: "https://www.youtube.com/watch?v=ooKG_LTfSDM",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/D6HZrIEa-nc/mqdefault.jpg",
    title: "【MV / Arrange】Snow halation【μ’s / 南ことり】",
    nicoUrl: "https://www.nicovideo.jp/watch/sm22526652",
    youtubeUrl: "https://www.youtube.com/watch?v=D6HZrIEa-nc",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/aj99WR-uKRA/mqdefault.jpg",
    title: "(T28＾ω＾つ今週のwkwk決まったかな【Waku-Waku-Week!】",
    nicoUrl: "https://www.nicovideo.jp/watch/sm34284700",
    youtubeUrl: "https://www.youtube.com/watch?v=kOywGc4JW8Q",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/kOywGc4JW8Q/mqdefault.jpg",
    title: "(T28＾ω＾つ僕も海岸通りで待ってる【よ】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm33619021",
    youtubeUrl: "https://www.youtube.com/watch?v=kOywGc4JW8Q",
  },
  {
    thumbnailUrl: "http://i.ytimg.com/vi/eIMIxFKIv3M/mqdefault.jpg",
    title: "(T28＾ω＾つぼくだってパーティーしたいじゃない？【ジングルベル】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm30292183",
    youtubeUrl: "https://www.youtube.com/watch?v=eIMIxFKIv3M",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=28545676",
    title: "(T28＾ω＾つSUNNY DAY SONG",
    nicoUrl: "http://www.nicovideo.jp/watch/sm28545676",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=26488387",
    title: "(T28＾ω＾つもう１度振り返る前回のラブライブ！【それ僕】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm26488387",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=25797977",
    title: "(T28＾ω＾つ私はだれでしょ？【そるげ】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm25797977",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=25365030",
    title: "(T28＾ω＾つ僕は毎日が告白日和【、です！】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm25365030",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=24455762",
    title: "(T28＾ω＾つ呼ばれてないけど走っていきますよ【ワンダーゾーン】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm24455762",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=24311111",
    title:
      "(T28＾ω＾つなかなか来ないことりちゃんとのフェスタvol.1【まめふぇす１",
    nicoUrl: "http://www.nicovideo.jp/watch/sm24311111",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=23366215",
    title: "(T28＾ω＾つ西木野さんのバックバンドやりました(ｽﾀｧ【ばんざい】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm23366215",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=23232659",
    title: "(T28＾ω＾つ新社畜が振り返る前回のラブライブ！【僕今】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm23232659",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=22892714",
    title: "(T28＾ω＾つもぎゅっと“ことりちゃん”に接近中!",
    nicoUrl: "http://www.nicovideo.jp/watch/sm22892714",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=22826206",
    title: "(T28＾ω＾つ　ロ　ー　ド　オ　ブ　じ　ゃ　な　い　に　こ　に　ー",
    nicoUrl: "http://www.nicovideo.jp/watch/sm22826206",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=22418748",
    title: "(T28＾ω＾つチケット落ちたのでμ'sのバックバンドしました【ﾉｰﾁｪﾝ",
    nicoUrl: "http://www.nicovideo.jp/watch/sm22418748",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=21811790",
    title: "(T28＾ω＾つ ことりちゃんとまたバンドを組んでみました【ぶるべり】",
    nicoUrl: "http://www.nicovideo.jp/watch/sm21811790",
  },
  {
    thumbnailUrl: "http://tn.smilevideo.jp/smile?i=21507624",
    title:
      "(T28＾ω＾つ ことりちゃんとバンドを組んでみました【僕らのLIVE君とのLIFE",
    nicoUrl: "http://www.nicovideo.jp/watch/sm21507624",
  },
]
