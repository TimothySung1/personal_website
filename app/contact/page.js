import { Title } from '@/components/pageComponents';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Title title="Contact"/>
      <p className="mt-8 mb-11 ml-16">
        You can contact me through any of the following: 
      </p>
      <div className="ml-32 mb-11">
        <p>Email: tsung333@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/t-sung">here</a></p>
      </div>
      <p className="ml-16">Feel free to send me tips on improvement and anything you would like to share!</p>
    </>
  );
}

function Contacts() {
  return (
    <div>
      
    </div>
  );
}

function ContactIcon() {
  return (
    <div className="flex">
      
    </div>
  );
}