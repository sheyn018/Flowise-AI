/*
* You can use any libraries imported in Flowise
* You can use properties specified in Input Schema as variables. Ex: Property = userid, Variable = $userid
* You can get default flow config: $flow.sessionId, $flow.chatId, $flow.chatflowId, $flow.input
* You can get custom variables: $vars.<variable-name>
* Must return a string value at the end of function
*/

import fetch from 'node-fetch';

const generateImage = async () => {
    const url = 'https://api.openai.com/v1/images/generations';
    const apiKey = '';  // Insert your API key here
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            "prompt": "Ramen",
            "n": 1,
            "size": "512x512"  // Changed size to 512x512
        })
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        if (data.data && data.data.length > 0) {
            return data.data[0].url;
        } else {
            throw new Error('No image generated');
        }
    } catch (error) {
        console.error(error);
        return '';
    }
};

generateImage().then(url => {
    console.log('Generated Image URL:', url);
}).catch(error => {
    console.error(error);
});
