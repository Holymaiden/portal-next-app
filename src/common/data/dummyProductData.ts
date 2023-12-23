const data: {
  id: number;
  image: string;
  name: string;
  category: string;
  series: { data: number[] }[];
  color: string;
  stock: number;
  price: number;
  store: string;
  file: string;
}[] = [
  {
    id: 1,
    image: "/img/abstract/beveled-cone.png",
    name: "Beveled Cone",
    category: "3D Shapes",
    series: [
      {
        data: [25, 66, 41, 89, 63],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 380,
    price: 14.5,
    store: "Company A",
    file: "Figma",
  },
  {
    id: 2,
    image: "/img/abstract/cloud-ball.png",
    name: "Cloud Ball",
    category: "3D Shapes",
    series: [
      {
        data: [12, 24, 33, 12, 48],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 1245,
    price: 12,
    store: "Company A",
    file: "Figma",
  },
  {
    id: 3,
    image: "/img/abstract/quadrilateral.png",
    name: "Quadrilateral",
    category: "3D Shapes",
    series: [
      {
        data: [34, 32, 36, 34, 34],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_WARNING_COLOR),
    stock: 27,
    price: 12.8,
    store: "Company D",
    file: "XD",
  },
  {
    id: 4,
    image: "/img/abstract/hald-sharp-donut.png",
    name: "Hald Sharp Donut",
    category: "3D Shapes",
    series: [
      {
        data: [54, 34, 42, 23, 12],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_DANGER_COLOR),
    stock: 219,
    price: 16,
    store: "Company C",
    file: "Sketch",
  },
  {
    id: 5,
    image: "/img/abstract/bendy-rectangle.png",
    name: "Bendy Rectangle",
    category: "3D Shapes",
    series: [
      {
        data: [23, 21, 12, 34, 14],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_DANGER_COLOR),
    stock: 219,
    price: 16,
    store: "Company A",
    file: "Figma",
  },
  {
    id: 6,
    image: "/img/abstract/infinity.png",
    name: "Infinity",
    category: "3D Shapes",
    series: [
      {
        data: [23, 13, 34, 41, 38],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 219,
    price: 16,
    store: "Company C",
    file: "Figma",
  },
  {
    id: 7,
    image: "/img/abstract/octahedron.png",
    name: "Octahedron",
    category: "3D Shapes",
    series: [
      {
        data: [21, 34, 23, 12, 67],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 498,
    price: 18,
    store: "Company B",
    file: "Figma",
  },
  {
    id: 8,
    image: "/img/abstract/triangle.png",
    name: "Triangle",
    category: "3D Shapes",
    series: [
      {
        data: [18, 32, 26, 15, 34],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 219,
    price: 16,
    store: "Company B",
    file: "Figma",
  },
  {
    id: 9,
    image: "/img/abstract/squigly-globe.png",
    name: "SquiglyGlobe",
    category: "3D Shapes",
    series: [
      {
        data: [18, 32, 26, 15, 34],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 219,
    price: 16,
    store: "Company C",
    file: "Figma",
  },
  {
    id: 10,
    image: "/img/abstract/dodecagon.png",
    name: "Dodecagon",
    category: "3D Shapes",
    series: [
      {
        data: [18, 32, 26, 15, 34],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 219,
    price: 16,
    store: "Company A",
    file: "Figma",
  },
  {
    id: 11,
    image: "/img/abstract/beveled-cube.png",
    name: "Beveled Cube",
    category: "3D Shapes",
    series: [
      {
        data: [18, 32, 26, 15, 34],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 219,
    price: 16,
    store: "Company A",
    file: "Figma",
  },
  {
    id: 12,
    image: "/img/abstract/cylinder.png",
    name: "Cylinder",
    category: "3D Shapes",
    series: [
      {
        data: [18, 32, 26, 15, 34],
      },
    ],
    color: String(process.env.NEXT_PUBLIC_SUCCESS_COLOR),
    stock: 219,
    price: 16,
    store: "Company B",
    file: "Figma",
  },
];
export default data;
