import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  // Top bar with home, projects, about, contact
  return (
    <header className="flex justify-center border-b-2 border-black/25 px-20 py-3 mb-7">
      <NavIcon text="Home" imgSrc="/images/blackhome.png"/>
      <NavIcon text="Projects" imgSrc="/images/blackprojects.png" href="/projects"/>
      <NavIcon text="About" imgSrc="/images/blackabout.png" href="/about"/>
      <NavIcon text="Contact" imgSrc="/images/blackcontact.png" href="/contact"/>
    </header>
  );
}

export function NavIcon({ text, imgSrc="", href="/"}) {
  return (
    <div className="flex mx-8">
      <div>
        <Link href={href} className="text-slate-700 text-lg flex flex-row">
          {imgSrc !== "" && (
            <Image src={imgSrc} alt="NavIcon" width={25} height={25} className="mr-2"/>
          )}
          {text}
        </Link>
      </div>
      
    </div>
  )
}