import { Title } from '@/components/pageComponents';

export default function Projects() {
  return (
    <>
      <Title title="Projects"/>
      <div className="ml-24 my-8">
        <p>Here are some of my projects that I have worked/been working on.</p>
      </div>
      <div className="flex flex-col items-center">
        {
          // display projects with title and image on the left
          // description and link to the right
          // multiple rows of 2 boxes separating description with title
        }
        <ProjectBox />
        <p>Item two</p>
      </div>
    </>
  );
}

function ProjectBox() {
  return (
    <div className="flex flex-row">
      <p>Title and description</p>
      <p>Image and link</p>
    </div>
  );
}