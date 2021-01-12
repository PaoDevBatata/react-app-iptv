import styled from 'styled-components';

const Bodyy = styled.body`
.background {
    position: fixed;
    width: 100%;
    height: 100%;
    margin: auto;
}
.topheader {
    width: 100%;
    height: 60px;
    position: fixed;
    z-index: 100;
    background-color: rgba(0,0,0, 0.7);

    .buscar {
        width: 200px;
        height: 25px;
        background-color: #7D7D7D;
        border-style: none;
    }

    input[type="text"] {
        color: #fff;
        font-size: 15px
    }
    
    input[type="text"]::placeholder {
        color: #fff;
        font-size: 15px
    }

    .group_A {
        padding: 20px;
        display: flexbox;
        flex-direction: row-reverse;
    }

    .hamburguer {
        display: block;
        padding-left: 80%;

        .barra1 {
            background-color: #ffffff;
            width: 30px;
            height: 2px;
            margin-bottom: 5px;
            border-radius: 15px;
        }
        .barra2 {
            background-color: #ffffff;
            width: 30px;
            height: 2px;
            margin-bottom: 5px;
            border-radius: 15px;
        }
        .barra3 {
            background-color: #ffffff;
            width: 30px;
            height: 2px;
            margin-bottom: 5px;
            border-radius: 15px;
        }
    }
}

.group_B {
    padding-top: 7vmax;
}

h1 {
    position: relative;
    font-size: 20px;
    color: #cecece;
    padding-left: 35px;
    font-family: roboto;
    font-weight:300;
}
h2 {
    position: relative;
    font-size: 2vmax;
    color: #cecece;
    margin-left: 4vmax;
    margin-bottom: 2vmax;
    font-family: roboto;
    font-weight:300;
}
`;

export default Bodyy;