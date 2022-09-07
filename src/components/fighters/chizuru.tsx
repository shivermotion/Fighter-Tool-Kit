import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { CloseBy, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And, AirOk } from "../icons/condition"
import { CommandMoves, SpecialMoves, SuperSpecialMoves, ClimaxSuperSpecialMoves, NormalThrows, MoveName, InputBar } from "../accordion/accordion"
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
export default function Chizuru() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Typography>CHIZURU KAGURA</Typography>
      </AccordionSummary>
      <CommandMoves />
      <AfterMove move=" JO KATSU ZHENG ZHENG" />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
      </InputBar>
      <AfterMove move=" JO KATSU CANG CANG" />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <AfterMove move=" JO KATSU CONG CONG" />
      <InputBar>
        <Press icon={downRight} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <SpecialMoves />
      <AfterMove move=" 212 KATSU OTSU SHIKI CHOUMON NO ISSHIN [EX]" />
      <InputBar>
        <Press icon={down} />
        <Press icon={down} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        <Or />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <AfterMove move=" 212 KATSU SHINSOKU NO NORITO [EX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        <Or />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <AfterMove move="STOP" />
      <InputBar> [212 KATSU SHINSOKU NO NORITO]
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} /> /
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <AfterMove move=" 212 KATSU SHINSOKU NO NORITO TEN ZUI" />
      <InputBar> [212 KATSU SHINSOKU NO NORITO]
        <Press icon={reverseHadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
        /
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <AfterMove move=" 100 KATSU TENJIN NO KOTOWARI [EX]" />
      <InputBar>
        <Press icon={shory} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <AfterMove move=" 108 KATSU TAMAYURA NO SHITSUNE [EX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <AfterMove move=" URAMEN 85 KATSU REIGI NO ISHIZUE [MAX]" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <AfterMove move=" URAMEN 1 KATSU SAN RAI NO FUJIN [MAX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <AfterMove move=" URAMEN 31 KATSU KUUSEN NO JOUHARI" />
      <InputBar>
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <NormalThrows />
      <AfterMove move=" REI GETSU" />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <AfterMove move=" KAI TEN" />
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
