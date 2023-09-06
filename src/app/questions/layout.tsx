import './questions.css';

export default function QuestionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='questions-page'>
      <aside>
        Menu
      </aside>
      <main>
      {children}
      </main>
      <aside>
        Addtional Infomration
      </aside>
    </div>
  )
}
