const Wrapper = document.querySelector('.Wrapper');
const RegisterLink = document.querySelector('.Register-Link');
const LoginLink = document.querySelector('.Login-Link');

RegisterLink.onclick = () => {
    Wrapper.classList.add('active');
}

LoginLink.onclick = () => {
    Wrapper.classList.remove('active');
}