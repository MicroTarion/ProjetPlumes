import { useState } from 'react';

const transformSlug = (type) => {
    return type.toLowerCase().replaceAll(' ', '-').replace('é', 'e');
};

const FeatherTypeCards = ({ type, folder, handleSelect, selected }) => {
    const [active, setActive] = useState(false);

    const slug = transformSlug(type);

    const handleActive = () => {
        setActive(true);
    };

    const handleBlur = () => {
        setActive(false);
    };

    const handleItemClick = () => {
        handleSelect(type);
    };

    return (
        <button onBlur={handleBlur} onFocus={handleActive} onClick={handleItemClick}>
            <img
                src={`/cards/${folder}/card-${active ? `${slug}-actif` : slug}.svg`}
                alt={type}
                className={selected ? 'selected' : ''}
            />
        </button>
    );
};

export default FeatherTypeCards;
