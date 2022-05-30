import React from 'react'

const QuoteBox = ({userRandom, buttonStyle, clickButton,comaStyle}) => {
  return (

    <div  className='QuoteBox'>
      
        <div className='QuoteLeft'>
          <i style={comaStyle} className="fas fa-quote-left coma"></i> 
          <p>{userRandom.quote}</p>
        </div>

        <div className='QuoteRigth'>
          <p>{userRandom.author}</p>
          <button onClick={clickButton}  style={buttonStyle}><i class="fas fa-chevron-right arrow"></i></button>
        </div>
    </div>
  )
}

export default QuoteBox