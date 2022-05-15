import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="sticky-bottom flex bg-white black blue-border-top">
        <Link href="/others">
          <div className="pointer hover w6rem">其他博客</div>
        </Link>
        <Link href="/">
          <div className="pointer hover w6rem">主页</div>
        </Link>
        <Link href="/framework">
          <div className="pointer hover w6rem">部分框架</div>
        </Link>
      </footer>
    </>
  );
};

export default Footer;
