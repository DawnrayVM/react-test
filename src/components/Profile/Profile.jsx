import PropTypes from 'prop-types';

const Profile = ({ photo, name, age, education }) => (
    <div>
        <img src={photo} alt={name} />
        <h2>{name}</h2>
        <p>Вік: {age}</p>
        <p>Освіта: {education}</p>
    </div>
);

Profile.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    education: PropTypes.string.isRequired,
};

export default Profile;
