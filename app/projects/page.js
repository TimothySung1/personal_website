import { Title } from '@/components/pageComponents';

export default function Projects() {
  return (
    <>
      <Title title="Projects"/>
      <div className="ml-24 my-8 mb-11">
        <p>Here are some of my projects that I have worked/been working on.</p>
      </div>
      <div className="flex flex-col items-start">
        {
          // display projects with title and image on the left
          // description and link to the right
          // multiple rows of 2 boxes separating description with title
          // maybe include dates
        }
        <ProjectBox title="AI Generated Code Commenting" description="
          This program automatically generates python docstrings using OpenAI's API.
          It recursively searches for python files in a given directory (including subdirectories), 
          and creates docstrings for every function and method. Users can also use the resulting commented files
          to generate Sphinx documentation using the autodocs extension.
        " url="https://github.com/TimothySung1/OpenAICodeComment"/>
        <ProjectBox title="Parallel Image Processing" description="
        This Java program can process images with either single-threading or multi-threading.
        It uses ImageIO and BufferedImage to read/write files and handle individual pixels, respectively.
        There are future plans to create a GUI and add more types of image processing.
        " url="https://github.com/TimothySung1/parallel_image_processing"/>
      </div>
    </>
  );
}

function ProjectBox( {title, url, description} ) {
  return (
    <div className="grid grid-flow-col-dense grid-cols-3 mx-40 mb-11">
      <div className="mr-11">
        <p>{title}</p>
        <a href={url} target="_blank" className="">Click here for the GitHub repository</a>
      </div>
      <p className="col-span-2 text-center">{description}</p>
    </div>
  );
}