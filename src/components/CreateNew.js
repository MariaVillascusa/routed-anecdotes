import { useField } from '../hooks'

const CreateNew = ({ addNew }) => {
  const content = useField({ name: 'content' })
  const author = useField({ name: 'content' })
  const info = useField({ name: 'content' })

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
          <input {...content} reset='' />
        </div>
        <div>
          author
          <input {...author} reset='' />
        </div>
        <div>
          url for more info
          <input {...info} reset='' />
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