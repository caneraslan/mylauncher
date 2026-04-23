import React,{useState} from 'react';


const BlogContext = ({ title, picture, content }) => {
  return (
    <div className="blog-item"> {
    }  
      <div className='picture'> {picture} </div>
      <div className='subarea'>
        <div className='title'> {title} </div>  
        <div className='content'> {content} </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const [page, setPage] = useState(0);
  console.log(page);
  const myblogs = [ 
    {
      title: 'New Subject 1',
      picture: 'C++',
      content: 'New Content'
    },
    {
      title: 'New Subject 2',
      picture: 'C#',
      content: 'New Content'
    },
    {
      title: 'New Subject 3 ',
      picture: 'Java',
      content: 'New Content'
    },
    {
      title: 'New Subject 4 ',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 5',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 6',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 7',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 8',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 9',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 10',
      picture: 'Algorithm',
      content: 'New Content'
    },
    {
      title: 'New Subject 11',
      picture: 'Algorithm',
      content: 'New Content'
    }
  ];

  const buttons = Math.ceil(myblogs.length/4);
  return (
    <div className='pageview'  id='blog' style={{
        behavior: "smooth", 
          block: "start",   
          transition: 'opacity 0.5s ease-in-out',
         }}> 
    <div className="blogs">
      {myblogs.slice(page*4,(page+1)*4).map((e, index) => (
        <BlogContext 
          key={index} 
          title={e.title} 
          picture={e.picture} 
          content={e.content} 
        />
      ))}
      
    </div> 
    <div className="button">
  {[...Array(Math.ceil(buttons))].map((_, index) => (
    <React.Fragment key={index}>
      <span 
        className="link" 
        onClick={() => setPage(index)}
      >
        {index + 1}
      </span>

      {index + 1 !== Math.ceil(buttons) && (
        <span className="separator"> - </span>
      )}
    </React.Fragment>
  ))}
</div>

      </div>
  );
};



export default Blog;