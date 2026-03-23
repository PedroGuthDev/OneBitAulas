import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import ProductCard from "./components/ProductCard";
export default function Home() {
  return (
    <Box>
      <Flex direction="column" align="center" justify="center" p="4">
        <Heading as="h1" >Conheça a família Macbook.</Heading>
        <Text as="p">Agora com os modelos M3</Text>
        <Flex gap="4" wrap="wrap">
          <ProductCard
            name="Macbook Air de 13 e 15 pol."
            price={10999}
            imageUrl="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png"
            chip="M2 ou M3"
            description="Superfinos e rápidos para trabalhar, jogar ou crair aonde quer que você vá."
          />
          <ProductCard
            name="Macbook Pro de 14 e 16 pol."
            price={18499}
            imageUrl="https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
            chip="M3, M3 Pro ou M3 Max"
            description="Os notebooks Mac mais avançados para fluxos de trabalho pesados."
          />
        </Flex>
      </Flex>
    </Box>
  );
}
