import { useState } from 'react';

const transformSlug = (type) => {
    return type.toLowerCase().replaceAll(' ', '-').replace('é', 'e')}

const FeatherTypeCards = ({type, folder}) => {
    const [active, setActive] = useState(false);

    const slug = transformSlug(type);
    //replace space by - and convert to lower case and replace "é" by "e" to match the file name "Rémige secondaire E" => "remige-secondaire-e.svg
    const handleActive = () => {
        setActive(true);
    }

    const handleBlur = () => {
        setActive(false);
    }

    const activeOrInactiveSlug = active ? `${slug}-actif` : slug
    return (
        <button onBlur={handleBlur} onFocus={handleActive}>
            <img src={`/cards/${folder}/card-${activeOrInactiveSlug}.svg`} alt={type} />
        </button>
    )
}

export default FeatherTypeCards