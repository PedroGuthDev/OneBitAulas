import { Box, Flex, Text, Button } from "@radix-ui/themes";
import Image from "next/image";
import { Product } from "../entities/Product";
export default function ProductCard(product: Product) {
  return (
    <Box>
      <Flex direction="column" gap="2" width="300px" align="center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={300}
          height={200}
        />
        <Text as="div" weight="bold" size="6" align="center">
          {product.name}
        </Text>
        <Text as="p" weight="bold" align="center">
          Chip {product.chip}
        </Text>
        <Text as="p" align="center">
          {product.description}
        </Text>
        <Text as="p" weight="bold" align="center">
          A partir de R$ {product.price / 10}/mês ou R$ {product.price}*
        </Text>
        <Flex gap="4" justify="center">
          <Button radius="full">Saiba mais</Button>
          <Button variant="outline" radius="full">
            Comprar
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
