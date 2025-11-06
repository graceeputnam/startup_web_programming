import React from 'react';
import './about.css';

export function About(props) {
  const [imageUrl, setImageUrl] = React.useState('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');
  
// We only want this to render the first time the component is created and so we provide an empty dependency list.
React.useEffect(() => {
  const random = Math.floor(Math.random() * 1000);
  fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#picture');

      const width = containerEl.offsetWidth;
      const height = containerEl.offsetHeight;
      const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
      setImageUrl(apiUrl);
    })
    .catch();

  fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
      setQuote(data.quote);
      setQuoteAuthor(data.author);
    })
    .catch();
}, []);

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
      <div id="picture" className= 'picture-box'>
        <img src={imageUrl} alt='random image' /> 
        </div>
        <p>
        Help out your family and friends by rating the shows out of 5 and they will be grateful!
        </p>

        <div id="quote" className="quote-box bg-light text-dark">
          <p className="quote">{quote}</p>
          <p className="author">{quoteAuthor}</p>
        </div>
      </div>
    </main>
  );
}