import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="sticky-bottom flex bg-white black blue-border-top">
        <Link href="/others">
          <div className="pointer hover w6rem">others</div>
        </Link>
        <Link href="/">
          <div className="pointer hover w6rem">home</div>
        </Link>
        <Link href="/framework">
          <div className="pointer hover w6rem">framework</div>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
