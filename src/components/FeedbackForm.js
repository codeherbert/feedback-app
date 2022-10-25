import React, {useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState('true');
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === "") {
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text !== "" && text.trim().length < 9) {
            setBtnDisabled(true);
            setMessage("Plese enter at least 10 characters");
        }
        else {
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    };

    return (
        <Card>
            <form>
                <h2>How would you rate our service?</h2>
                {/* todo - the rating select component */}
                <div className="input-group">
                    <input 
                        onChange={handleTextChange} 
                        type="text" 
                        placeholder="Write a review"
                        value={text} 
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                    {message && <div className="message">{message}</div>}
                </div>
            </form>
        </Card>
    )
};

export default FeedbackForm;