export const ImageContainer =({activeImage})=> {
    return (
    <div className="image-container">
        <img 
          src={activeImage} 
          alt="Feature illustration"
          className="featured-image"
        />
    </div>
    )
}