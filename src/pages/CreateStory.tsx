import CreateStoryForm from "../components/CreateStoryForm/CreateStoryForm";
import styles from "./_CreateStory.module.scss";
import { createBem } from "@/utils/createBem";

import H1 from "@/components/ui/H1.tsx";



const bem = createBem("createStories", styles);



export default function CreateStory() {



  return (
    <div className="container">
      <div className={bem("")}>
        <H1 position="left" className={bem("title")}>
          Створити нову історію
        </H1>

        <CreateStoryForm/>
      </div>
    </div>
  );
}
