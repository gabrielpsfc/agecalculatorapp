import './App.css';
import useDate from './hooks/useDate';
import Userinfo from './components/Userinfo';


function App() {
const {ano, mes, dia} = useDate()

  return (

    <><a href="https://www.youtube.com/watch?v=jx5jmI0UlXU"> position</a>
    <Userinfo ano={ano} mes={mes} dia={dia}/> 
    
    </>
     
  


  );
}

export default App;

/**
 * <form onSubmit={handleSubmit}>
          <label>
            <span>Título</span>
            <input type="text" name='title' required placeholder='Título' onChange={(e) => setTitle(e.target.value)} value={title} />
          </label>
          <label>
            <span>Url img</span>
            <input type="text" name='image' required placeholder='Insira URL img' onChange={(e) => setImage(e.target.value)} value={image} />
          </label>
          <p className={styles.preview_title}></p>
          <img src={post.image} alt={post.title} className={styles.image_preview}/>
          <label>
            <span>Conteudo</span>
            <textarea name="" required placeholder='Conteudo post' onChange={(e) => setBody(e.target.value)} value={body}></textarea>
          </label>
          <label>
            <span>Tags:</span>
            <input type="text" name='tags' required placeholder='Insira tags separadas por virgula' onChange={(e) => setTags(e.target.value)} value={tags} />
          </label>
          {!response.loading && <button className='btn'>edit</button>}
        {response.loading && (<button className='btn' disabled>
          Aguarde...
        </button>)}
        {response.error && <p className='error'>{response.error}</p>}
        {formError && <p className='error'>{formError}</p>}
      
        
        </form>
 */
