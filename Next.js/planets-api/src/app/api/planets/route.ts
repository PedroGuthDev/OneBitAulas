import { NextRequest, NextResponse } from "next/server";

let idSequence = 4;
const planets = [
  {
    id: 1,
    name: "Terra",
    description: "Planeta Terra",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble.jpg/250px-The_Blue_Marble.jpg",
  },
  {
    id: 2,
    name: "Marte",
    description: "Planeta Marte",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/250px-OSIRIS_Mars_true_color.jpg",
  },
  {
    id: 3,
    name: "Jupiter",
    description: "Planeta Jupiter",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_moons.jpg/250px-Jupiter_and_its_moons.jpg",
  },
];

export async function GET() {
  return NextResponse.json(planets);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newPlanet = {
    id: idSequence++,
    name: body.name,
    description: body.description,
    image: body.image,
  };
  planets.push(newPlanet);
  return NextResponse.json(newPlanet, { status: 201 });
}

export async function PUT(request: NextRequest) {
  const { id, name, description, image } = await request.json();
  const planetIndex = planets.findIndex((planet) => planet.id === id);

  if (planetIndex === -1) {
    return NextResponse.json(
      { error: "Planeta não encontrado" },
      { status: 404 },
    );
  }
  if (name) planets[planetIndex].name = name;
  if (description) planets[planetIndex].description = description;
  if (image) planets[planetIndex].image = image;

  return NextResponse.json(planets[planetIndex]);
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json();
  const planetIndex = planets.findIndex((planet) => planet.id === id);

  if (planetIndex === -1) {
    return NextResponse.json(
      { error: "Planeta não encontrado" },
      { status: 404 },
    );
  }
  planets.splice(planetIndex, 1);
  return NextResponse.json({ message: "Planeta deletado com sucesso" });
}
