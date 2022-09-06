import React from "react"
import { Accordion, AccordionSummary, AccordionDetails, Typography, Grid, Divider } from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

import { CloseBy, InAir, PressInOrder, AfterMove, InTimeWith, Charge, LinkTo, And } from "../icons/condition"
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
export default function Ash() {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "black", color: "whitesmoke", fontFamily: "montserrat" }}
      >
        <Typography>ASH CRIMSON</Typography>
      </AccordionSummary>
      <CommandMoves />
      <MoveName move="FLOREAL" />
      <InputBar>
        <Press icon={left} />
        <Plus />
        <Press icon={kickLow} />
      </InputBar>
      <MoveName move="FLOREAL 2" />
      <InputBar>
        <Press icon={left} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="FLOREAL INSTANT" />
      <InputBar>
        <Press icon={right} />
        <Plus />
        <Press icon={kickHigh} />
      </InputBar>
      <SpecialMoves />
      <MoveName move="VENTOSE [EX]" />
      <InputBar>
        <Charge />
        <Press icon={left} />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="NIVOSE [EX]" />
      <InputBar>
        <Charge />
        <Press icon={down} />
        <Press icon={up} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="GENIE [EX]" />
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
      <MoveName move="GERMINAL CAPRICE [EX]" />
      <InputBar>
        <Charge />
        <Press icon={left} />
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move=" [SANS-COULETTE ACTIVE] VENTOSE [EX]" />
      <InputBar>
        <AfterMove move="[SANS-COULETTE ACTIVE]" />
        <Press icon={left} />
        <Press icon={right} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move=" [SANS-COULETTE ACTIVE] NIVOSE [EX]" />
      <InputBar>
        <AfterMove move="[SANS-COULETTE ACTIVE]" />
        <Press icon={up} />
        <Press icon={down} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move=" [SANS-COULETTE ACTIVE] GERMINAL CAPRICE [EX]" />
      <InputBar>
        <AfterMove move="[SANS-COULETTE ACTIVE]" />
        <Press icon={left} />
        <Press icon={right} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <SuperSpecialMoves />
      <MoveName move="THERMIDOR [MAX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={punchLow} />
        <Or />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="PLUVIOSE [MAX]" />
      <InputBar>
        <Press icon={hadoken} />
        <Press icon={hadoken} />
        <Plus />
        <Press icon={kickLow} />
        <Or />
        <Press icon={kickHigh} />
      </InputBar>
      <MoveName move="SANS-CULOTTE (2-GAUGE) [MAX]" />
      <InputBar>
        <PressInOrder />
        <Press icon={punchLow} />
        <LinkTo />
        <Press icon={kickLow} />
        <LinkTo />
        <Press icon={punchHigh} />
        <LinkTo />
        <Press icon={kickHigh} />
      </InputBar>
      <ClimaxSuperSpecialMoves />
      <MoveName move="ESPOIR" />
      <InputBar>
        <InAir />
        <Press icon={reverseHadoken} />
        <Press icon={halfCircleFoward} />
        <Plus />
        <Press icon={punchHigh} />
        <Press icon={kickHigh} />
      </InputBar>
      <NormalThrows />
      <MoveName move="RECOMPENSES" />
      <InputBar>
        <CloseBy />
        <Press icon={left} />
        <Or />
        <Press icon={right} />
        <Plus />
        <Press icon={punchHigh} />
      </InputBar>
      <MoveName move="VERTUS" />
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
