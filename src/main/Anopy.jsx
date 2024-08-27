import React, {useState} from 'react'

const Anopy = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Text
      </button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default Anopy