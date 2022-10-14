(() => {



    // UI
    const displayDiv = document.getElementById("display");
    const genBtn = document.getElementById("genbtn");
    const charInput = document.getElementById("charinput");


    let str = '0123456789abcdefghijklnmopqrstuvwxyz;:[]{}()/,!@#$%^&*';


    const generateRndPassword = function (pwlength = 10) {  

        let rndPw = '';

        for (let i = 0; i < pwlength; i++) {
            
            let rndNum = Math.floor(Math.random() * str.length);

            rndPw += str[rndNum];

        }

        return rndPw

    }

    genBtn.addEventListener('click', () => {

        const pwlength = charInput.value;

        const rndPassword = generateRndPassword(pwlength);

        displayDiv.textContent = '';
        
        let i = 0;

            let addChar = setInterval(() => {
    
                displayDiv.textContent += rndPassword[i];
    
                i += 1;    

                if (i === rndPassword.length) clearInterval(addChar);

            }, 30);
            
        


        displayDiv.classList.add('active');

    });


    displayDiv.addEventListener('click', (e) => {

        navigator.clipboard.writeText(e.target.textContent);

        displayDiv.classList.add('selected');

        setTimeout(() => {
            displayDiv.classList.remove('selected')
        },1200)
    })









})();
