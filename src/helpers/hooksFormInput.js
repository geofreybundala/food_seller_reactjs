import {useState} from 'react';

export const hooksFormInput= (initialState)=>{
    const [fields,setValues] = useState(initialState);

    return[
        fields,
        function(event){
            setValues({
                ...fields,
                [event.target.id]:event.target.value
            });
        }
    ];
}