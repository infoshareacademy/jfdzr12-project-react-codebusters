import { useOutletContext } from "react-router-dom";
import portfolioData from "../../../../public/photos.json";


export const PortfolioImage = () => {
    const imageId = useOutletContext();
    const photo = portfolioData.photos.find(
        (photo) => photo.id === parseInt(imageId)
    );
    return (
        <div>
            <img src={photo.image} />
        </div>
    )
}