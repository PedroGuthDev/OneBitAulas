import Image from "next/image";
import { Card, Box, Heading } from "@radix-ui/themes";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Card>
          <Box p="5">
            <Heading>Olá, Next.js!</Heading>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            <ul>
              <li>
                <div>Via Lactea</div>
                <Image
                  src="/via-lactea.jpg"
                  alt="Via Lactea"
                  width={400}
                  height={225}
                />
              </li>
              <li>
                <div>Galáxia</div>
                <Image
                  src="https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg"
                  alt="Via Lactea"
                  width={400}
                  height={225}
                  style={{ objectFit: "cover", height: 225 }}
                />
              </li>
              <li>Item 3</li>
            </ul>
          </Box>
        </Card>
      </main>
    </div>
  );
}
