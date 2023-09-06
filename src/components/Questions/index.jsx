import styles from "./questions.css";

const Questions = () => {

  return (
    <>
    <div className="wrapper">
    <div>All Questions</div>
    <button>Ask Question</button>
    <div>199 questions with bounties</div>
    <div className="answers">
      <button>Newest</button>
      <button>Active</button>
      <button>Bountied</button>
      <button>Unanswered</button>
      <button>More</button>
    </div>
    <button className="filter">Filter</button>
    </div>
    </>
  )
}

export default Questions