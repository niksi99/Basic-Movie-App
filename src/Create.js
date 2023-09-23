import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mika')
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        const blog = {title, body, author}
        setIsLoading(true);

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('Added new blog')
            history.push('/')
            setIsLoading(false);
        }).catch((error) => console.log(error.message))
    }

    return ( 
        <div className="create">
            <h2>Add new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input type="text" required 
                       value={title} 
                       onChange={(event) => setTitle(event.target.value)}/>
                
                <label>Blog body: </label>
                <textarea required value={body}
                          onChange={(event) => setBody(event.target.value)}></textarea>   
                
                <label>Blog author: </label>
                <select value={author}
                        onChange={(event) => setAuthor(event.target.value)}>
                    <option value="Mika">Mika</option>
                    <option value="Pera">Pera</option>
                    <option value="Ana">Ana</option>
                </select>
                
                { !isLoading && <button>Create Blog</button> }
                { isLoading && <button disabled >Create Blog</button> }
            </form>
        </div>
     );
}
 
export default Create;