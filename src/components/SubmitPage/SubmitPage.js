import React from 'react';
import Cookies from 'js-cookie';

class SubmitPage extends React.Component {
    componentDidMount(){
        let userData = Cookies.get('userFormData');
        if(userData){
            Cookies.remove('userFormData');
        }
    }
    render() {
        return (
            <div className='SubmitPage'>
                <div className='ui green message ui big message'>Form Submitted successfully</div>

            </div>
        );
    }

}

export default SubmitPage;
