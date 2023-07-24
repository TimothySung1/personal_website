import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  // Top bar with home, projects, about, contact
  return (
    <div className="flex justify-center bg-slate-900 mx-20 rounded-b-2xl py-3 mb-7">
      <NavIcon text="Home" imgSrc="/images/homeicon.png"/>
      <NavIcon text="Projects" imgSrc="/images/projectsicon.png" href="/projects"/>
      <NavIcon text="About" imgSrc="/images/abouticon.png" href="/about"/>
      <NavIcon text="Contact" imgSrc="/images/contact.png" href="/contact"/>
    </div>
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