import './GoogleEmbed.css';
import React, { useEffect } from 'react';

function Example() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      const paragraphs = document.getElementsByTagName("p");
      console.log(paragraphs);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
      <p>Paragraph 3</p>
    </div>
  );   
}
export default Example;
