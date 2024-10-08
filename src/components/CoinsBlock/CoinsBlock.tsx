import React from "react";
import { Box, Image } from "@chakra-ui/react";
import coinImg from "../../assets/img/balance-coin.png";
import "./CoinsBlock.scss";

type Props = {
   coins: number;
};

const CoinsBlock: React.FC<Props> = ({ coins }) => {
   return (
      <Box className="coinsBlock">
         <Image src={coinImg} alt="Coins" boxSize={"30px"} mr={3} />

         {coins}
      </Box>
   );
};

export default CoinsBlock;
