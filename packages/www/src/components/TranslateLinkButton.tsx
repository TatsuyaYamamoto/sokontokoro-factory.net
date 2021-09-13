import React, { FC } from "react"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"

import { IconButton, Icon } from "@chakra-ui/react"
import { MdTranslate } from "react-icons/md"

const TranslateLinkButton: FC = () => {
  const { pathname } = useLocation()

  const onClick = () => {
    let next
    if (pathname.startsWith("/en")) {
      next = pathname.replace("/en", "")
    } else {
      next = `/en${pathname}`
    }
    navigate(next)
  }

  return (
    <IconButton
      variant="solid"
      color={`#ffffff`}
      background="unset"
      colorScheme="orange"
      aria-label="Change language"
      fontSize="20px"
      icon={<Icon as={MdTranslate} />}
      onClick={onClick}
    />
  )
}

export default TranslateLinkButton
