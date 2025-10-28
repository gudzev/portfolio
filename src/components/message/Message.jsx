import "./Message.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

export function Message({showMessage})
{
    if(showMessage == 1) 
    {
        return (
            <div className="message message-success">
                <h1><FontAwesomeIcon icon={faCheck} /> Your Message Has Been Sent</h1>
            </div>
        )
    }
    else if(showMessage == -1)
    {
        return (
            <div className="message message-error">
                <h1><FontAwesomeIcon icon={faCircleExclamation} />Your Message Couldn't Be Delivered</h1>
            </div>
        )
    }
    else
    {
        return (
            <div className="message">
            </div>
        )
    }
}