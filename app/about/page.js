import { Title } from '@/components/pageComponents';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Title title="About" />
      <p className="ml-24 my-8 mb-11">Welcome to the About page. Learn more about me below.</p>
      <Education />
      <Resume />
    </>
  )
}

function Education() {
  return (
    <div className="mx-24 mb-16">
      <p className="ml-4 text-3xl">
        Education:
      </p>
      <div className="flex flex-row items-center">
        <Image src="/images/georgia-tech-logo.jpg" alt="GT logo" width={250} height={40}
          className="rounded-lg border-4 border-black mt-4"
        />
        <div className="flex flex-col ml-64 w-1/2">
          <p className="mb-4">
            I am a 2nd year Computer Science student at Georgia Tech. I am studying Information Internetworks
            and Intelligence, since I feel those areas are most industry-applicable and interesting. 
          </p>
          <div className="flex flex-row">
            <GPA />
            <Coursework />
            <Clubs />
          </div>
        </div>
      </div>
    </div>
  );
}

function Coursework() {
  return (
    <div className="flex flex-col mr-16">
      <p>Relevant Coursework</p>
      <ul className="list-disc">
        <li>Design & Analysis of Algorithms</li>
        <li>Data Structures & Algorithms</li>
        <li>Object Oriented Design</li>
        <li>Systems and Networks</li>
        <li>Discrete Mathematics</li>
        <li>Secound Course of Linear Algebra</li>
      </ul>
    </div>
  );
}

function GPA() {
  return (
    <p className="mr-16">GPA: 4.0</p>
  );
}

function Clubs() {
  return (
    <div className="flex flex-col">
      <p>Clubs</p>
      <ul className="list-disc">
        <li>Data Science @ GT</li>
        <li>Web Development</li>
        <li>Mastering Android Development</li>
      </ul>
    </div>
  );
}

function Resume() {
  return (
    <div className="mt-52 flex flex-col items-center">
      <div className="flex flex-row">
        <p>
          For more information, check out my resume &nbsp;
        </p>
        <a href="assets/resume.docx">
          here
        </a>
      </div>
      <p>Feel free to contact me to get my latest resume.</p>
    </div>
  );
}

function Interests() {
  return (
    <div className="mx-24 mb-16">
      <p className="ml-4 text-3xl">
        Interests: 
      </p>
    </div>
  );
}