import React from 'react';
import {Checkbox, Select} from 'semantic-ui-react';
 class StepThree extends React.Component {
     constructor(props) {
         super(props);
         this.isValidated = this.isValidated.bind(this);
     }
     isValidated() {
         debugger;
         console.log('validated');
         return true;
     }
     render() {
         const firstOptions = [
             { key: 'A', value: 'A', text: 'A' },
             { key: 'B', value: 'B', text: 'B' },
             { key: 'C', value: 'C', text: 'C' }
             ];
         return (
             <div className="StepTwo">
                 <div className='input-form-field'>
                     <p className={'input-form-validation'}>Must display another select - PENDING</p>
                     <Select placeholder='Select your country' options={firstOptions}/>
                 </div>

             </div>

         );
     }
}

export default StepThree;
