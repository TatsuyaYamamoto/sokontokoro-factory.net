import React, { FC } from "react"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"

import { Box, Flex, Text } from "@chakra-ui/react"

import TabMenu from "./TabMenu"
import I18nLink from "./I18nLink"
import TranslateLinkButton from "./TranslateLinkButton"

interface HeroProps {
  activeTab:
    | "home"
    | "activity"
    | "game"
    | "music"
    | "communication"
    | "inquire"
  expanding?: boolean
}

const Hero: FC<HeroProps> = ({ activeTab, expanding = false }) => {
  const { t } = useTranslation()
  const brandIcon = (
    <StaticImage
      src="../assets/image/hammer.png"
      width={40}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
    />
  )

  return (
    <Box background={`#f57c00`}>
      <Flex height={16} paddingX={3} paddingY={2}>
        <Flex flex={1} justifyContent="flex-start" alignItems="center" />
        <Flex flex={1} justifyContent="center" alignItems="center">
          {!expanding && <I18nLink to="/">{brandIcon}</I18nLink>}
        </Flex>
        <Flex flex={1} justifyContent="flex-end" alignItems="center">
          <TranslateLinkButton />
        </Flex>
      </Flex>
      {expanding && (
        <Flex height={40} justifyContent="center" alignItems="center">
          <I18nLink to="/">
            <Flex alignItems="center">
              <Text fontFamily="PixelMplus" fontSize={30} color={`#ffffff`}>
                {t(`meta_site_name`)}
              </Text>
              {brandIcon}
            </Flex>
          </I18nLink>
        </Flex>
      )}
      <Flex>
        <TabMenu active={activeTab} />
      </Flex>
    </Box>
  )
}

export default Hero
