import React from "react"
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
  Divider,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import {
  CloseBy,
  InAir,
  PressInOrder,
  AfterMove,
  InTimeWith,
  Charge,
  LinkTo,
  And,
} from "../icons/condition"
import {
  CommandMoves,
  SpecialMoves,
  SuperSpecialMoves,
  ClimaxSuperSpecialMoves,
  NormalThrows,
  MoveName,
  InputBar,
} from "../accordion/accordion"
import Press from "../icons/press"
import Or from "../icons/or"
import Plus from "../icons/plus"
import right from "../../assets/icons/right.png"
import left from "../../assets/icons/left.png"
import up from "../../assets/icons/up.png"
import down from "../../assets/icons/down.png"
import downRight from "../../assets/icons/downRight.png"
import halfCircleFoward from "../../assets/icons/halfCircleForward.png"
import halfCircleBack from "../../assets/icons/halfCircleBack.png"
import shory from "../../assets/icons/shory.png"
import reverseHadoken from "../../assets/icons/reverseHadoken.png"
import hadoken from "../../assets/icons/hadoken.png"
import punchHigh from "../../assets/icons/punchHigh.png"
import punchLow from "../../assets/icons/punchLow.png"
import kickHigh from "../../assets/icons/kickHigh.png"
import kickLow from "../../assets/icons/kickLow.png"
import upRight from "../../assets/icons/upRight.png"
import upLeft from "../../assets/icons/upLeft.png"

// Application Screen || Define Exports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export default function Iori() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: "black",
          color: "whitesmoke",
          fontFamily: "montserrat",
        }}
      >
        <Typography>IORI YAGAMI</Typography>
      </AccordionSummary>

      <CommandMoves />
      <MoveName
        move=" GE-SHIKI YUMEBIKI
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" GE-SHIKI YUMEBIKI(FOLLOW UP)
      "
      />
      <InputBar>
        [GE-SHIKI YUMEBIKI]
        <Press icon={punchLow} />
      </InputBar>
      <MoveName
        move=" GE-SHIKI YURIORI
      "
      />
      <InputBar>
        <InAir /> <Press icon={left} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName
        move=" GE-SHIKI GOFU IN 'SHINIGAMI'
      "
      />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <SpecialMoves />
      <MoveName
        move=" 108 SHIKI YAMIBARAI [EX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" 100 SHIKI ONIYAKI [EX]
      "
      />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" 127 SHIKI AOIBANA 1 [EX]
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" SHIKI AOIBANA 2 [EX]
      "
      />
      <InputBar>
        [127 SHIKI AOIBANA 1]
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" SHIKI AOIBANA 3 [EX]
      "
      />
      <InputBar>
        [127 SHIKI AOIBANA 2]
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" 212 SHIKI KOTOTSHUKI IN [EX]
      "
      />
      <InputBar>
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName
        move=" KUZUKAZE [EX]
      "
      />
      <InputBar>
        <CloseBy />
        <Press icon={halfCircleBack} />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" 311 SHIKI TSUMAKUSHI [EX]
      "
      />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName
        move=" KIN 1211 SHIKI YAOTOME [MAX]
      "
      />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={halfCircleBack} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" URA 316 SHIKI SAIKA [MAX]
      "
      />
      <InputBar>
        [
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        KIN 1211 SHIKI YAOTOME]
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" URA 1018 SHIKI YASHIORI [MAX]
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        [HOLD OK]
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName
        move=" URA 1131 SHIKI HOZUKI
      "
      />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <NormalThrows />
      <MoveName
        move=" SAKAHAGI
      "
      />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName
        move=" KANYARAI
      "
      />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
    </Accordion>
  )
}
