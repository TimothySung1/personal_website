import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="sticky top-[100vh] flex justify-center items-center h-24">
      <div className="flex px-12">
        <p className="mr-24">
          Made by Timothy Sung
        </p>
        <FooterSection src="/images/mail.png" text="Email" round = {false} />
        <FooterSection src="/images/github.png" text="GitHub" round={true}/>
        <FooterSection src="/images/linkedin.webp" text="LinkedIn" round={false} />
      </div>
    </footer>
  );
}

function FooterSection({ src="", text, round}) {
  return (
    <div className="flex flex-row mx-4 items-center">
      <Image src={src} alt="Icon" height={30} width={30} className={round ? "rounded-lg" : ""} />
      <p className="text-blue-400">
        {text}
      </p>
    </div>
  );
}