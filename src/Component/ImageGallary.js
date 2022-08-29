import React from 'react'

function ImageGallary(props) {
  const {gallaryImage} = props;
  // const [isLoading, setIsLoading] = useState(false)
  // const [errorMessage, setErrorMessage] = useState('')
  return (
    <>
    <div className="wrap">
        {gallaryImage.map((item, index) => (
        <div className='box' key={index}>
            <div className='inner-Box'>
               <img src={item.urls.full} alt=""/>
            </div>
            <p>{item.user.name}</p>
        </div>
    ))}
    </div>
    </>
  )
}

export default ImageGallary