import Image from 'next/image'
import NavBar from '../components/nav';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Content />
    </main>
  )
}

function Content() {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-mono text-6xl mb-14">Welcome to my website</p>
      <div className="w-5/6">
        <p className="mx-60 whitespace-normal text-center">
          Hello! My name is Timothy Sung. I am a second year student at Georgia Tech.
          I have a 4.0 GPA with a concentration in Intelligence and Information Internetworks.
          You can find more information about me in the <Link href="/about" className="text-slate-700">About</Link> page, and you can visit
          the <Link href="/projects" className="text-slate-700">Projects</Link> page if you are more interested in my coding projects.
          Check out the <Link href="/contact" className="text-slate-700">Contact</Link> page for my contact information.
        </p>
      </div>
    </div>
  )
}
