import "./App.css";
import Tasks from "./Tasks";

function App() {
  const Heading = "List of Tasks for the month of November 2024";
  const mytasks = [
    {
      title: "Learn Javascript",
      description:
        "Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.",
      isCompleted: true,
    },
    {
      title: "Learn Typescript",
      description:
        "Learn to supercharge your web-applications with the powerful typed language from Microsoft!",
      isCompleted: false,
    },
    {
      title: "Learn React",
      description:
        "Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.",
      isCompleted: true,
    },
    {
      title: "Learn Python",
      description:
        "Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!",
      isCompleted: false,
    },
    {
      title: "Learn HTML",
      description:
        "In this HTML tutorial, you will find more than 200 examples. With our online 'Try it Yourself' editor, you can edit and test each example yourself",
      isCompleted: true,
    },
  ];

  return (
    <div>
      <Tasks title={Heading} tasks={mytasks} />
    </div>
  );
}

export default App;
