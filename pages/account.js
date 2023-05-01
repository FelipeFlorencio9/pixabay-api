export function page () {

    const body = document.querySelector('body');  
    body.style = 'background-color: #1967D2';
    const container = document.createElement('div')
    container.classList.add (
        'account-container',
        'container'
    )

    const loginContainer = document.createElement('div');
    loginContainer.classList.add('login-container');

    loginContainer.innerHTML = `
        <phrase-content
            text="Login to Save Photos"
            tag="h2"
            fontsize="1.5rem">
        </phrase-content>
        <input-box
            placeholder='Login'
        ></input-box>
        <input-box
            placeholder='Password'
        ></input-box>
        <phrase-content
            text="Sign Up"
            tag="h3"
            fontsize="1.5rem"
            textAlign='end'>
        </phrase-content>
    `

    container.append(loginContainer)

    return container

}