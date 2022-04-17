
const AnecdoteList = ({ anecdotes, vote }) => (
    <div>
        <h2>Anecdotes</h2>
        <ul>
            {anecdotes.map(anecdote =>
                <li key={anecdote.id} >
                    {anecdote.content} - {anecdote.votes} votes
                    <button type='button' onClick={() => vote(anecdote.id)}>
                        Vote
                    </button>
                </li>)}
        </ul>
    </div>
)

export default AnecdoteList