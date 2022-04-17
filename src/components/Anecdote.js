import { useParams } from 'react-router-dom'

const Anecdote = ({ anecdotes }) => {

    const { id } = useParams()
    const anecdote = anecdotes.find(anecdote => anecdote.id === Number(id))

    return (
        <div>
            <h1>{anecdote.content}</h1>
            <h2>Author: {anecdote.author}</h2>
            <h5>{anecdote.info}</h5>
            <h4>Votes: {anecdote.votes}</h4>
        </div>
    )
}

export default Anecdote