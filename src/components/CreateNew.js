import { useField } from '../hooks'

const CreateNew = ({ addNew }) => {
  const content = useField()
  const author = useField()
  const info = useField()

  const handleSubmit = (e) => {
    e.preventDefault()

    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    })
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input value={content.value} onChange={content.onChange} />
        </div>
        <div>
          author
          <input value={author.value} onChange={author.onChange} />
        </div>
        <div>
          url for more info
          <input value={info.value} onChange={info.onChange} />
        </div>
        <button>create</button>
        <button type='button' onClick={() => {
          content.reset()
          author.reset()
          info.reset()
        }}>Reset</button>
      </form>
    </div>
  )
}

export default CreateNew