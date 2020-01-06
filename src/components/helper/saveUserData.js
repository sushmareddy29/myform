import Cookies from 'js-cookie';

const saveUserData = data => {
    Cookies.set('userFormData', JSON.stringify(data));
};

export default saveUserData;