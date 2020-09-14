import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps } from "next";

type Product = {
  name: string;
  src: string;
  content: string;
};

type Products = {
  [key: string]: Product;
};

const products: Products = {
  cardReaders: {
    name: "Card Readers",
    src: "/test.svg",
    content: "lorem",
  },
  paymentGateways: {
    name: "Payment Gateways",
    src: "/test.svg",
    content: "lorem",
  },
  paymentLinks: {
    name: "Payment Links",
    src: "/test.svg",
    content: "lorem",
  },
  phonePayments: {
    name: "Phone Payments",
    src: "/test.svg",
    content: "lorem",
  },
};

const productUrls: ProductUrls = {
  ["card-readers"]: "cardReaders",
  ["payment-gateways"]: "paymentGateways",
  ["payment-links"]: "paymentLinks",
  ["phone-payments"]: "phonePayments",
};

type ProductUrls = {
  [key: string]: string;
};

export default function ProductPage({ product }: { product: Product }) {
  return (
    <>
      <h1>{product.name}</h1>
      <div>{product.content}</div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productUrl = params?.product as string;
  let productName;
  let product;

  if (productUrl) {
    productName = productUrls[productUrl];
  }

  if (productName) {
    product = products[productName];
  }

  return { props: { product } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = [
    { params: { product: "card-readers" } },
    { params: { product: "payment-gateways" } },
    { params: { product: "payment-links" } },
    { params: { product: "phone-payments" } },
  ];

  return { paths, fallback: false };
};
