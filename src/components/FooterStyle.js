
import styled from "styled-components";
import { Link } from 'react-router-dom'



export const FooterWrapper= styled.div`

    width: 100%;
    height: 470px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    align-items: center;

    @media screen and (max-width: 983px){

        height: 700px;
        padding-top: 0px;
    }
    @media screen and (max-width: 768px){

        /* height: 1000px; */
        height: auto;
    }


`
export const FooterTop= styled.div`

    width: 100%;
    height: 80%;
    /* background-color: yellow; */
    display: flex;
    gap: 130px;
    align-items: center;

    @media screen and (max-width: 983px){

        /* background-color: red; */
        flex-direction: column;
        margin-top: 30px;
        padding-bottom: 30px;
        position: relative;
    }
    @media screen and (max-width: 768px){

        /* background-color: red; */
        height: auto;
        padding-bottom: 500px;
    }


`
export const FooterTopLeft= styled.div`

    width: 40%;
    height: 90%;
    /* background-color: aquamarine; */
    display: flex;
    margin-left: 60px;
    justify-content: space-between;

    @media screen and (max-width: 983px){

        flex-direction: column;
        /* background-color: aquamarine; */
        height: auto;
        width: 70%;

    }
    @media screen and (max-width: 768px){

        /* background-color: aquamarine; */
        align-items: center;
        margin-left: 0px;
    }

`
export const FooterTopAddress= styled.div`

    width: 50%;
    height: 100%;
    /* background-color: red; */

    @media screen and (max-width: 983px){

        /* background-color: purple; */
        height: auto;
        width: 100%;

    }

`
export const FooterTopAddressTop = styled.div`

    width: 100%;
    height: 20%;
    background-color: brown;
    margin-bottom: 20px;

    @media screen and (max-width: 983px){

        height : 100px;
        width : 50%;
    
    }
    @media screen and (max-width: 768px){

        height : 70px;
    
    }

`
export const FooterTopAddressDetails= styled.div`

    width: 100%;
    height: auto;
    /* background-color: green; */
    margin-bottom: 10px;
    display: flex;

    @media screen and (max-width: 768px){

        /* background: green; */

    }

`
export const FooterTopAddressDetailsImage= styled.div`

    width: 18%;
    height: 45px;
    /* background-color: orange; */
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){

        /* background: orange; */
        height: 40px;
        width: 10%;

    }

`
export const FooterTopAddressDetailsImageImg= styled.img`

    width: 70%;
    height: 70%;
    object-fit: contain;
`

export const FooterTopAddressDetailsText= styled.div`

    width: 82%;
    height: auto;
    /* background-color: pink; */
    padding-left: 10px;
    display: flex;
    flex-direction: column;

`
export const FooterTopAddressDetailsTextNav = styled.h6`

    font-size: 16px;
    color: #F4F5F9;
    font-weight: 800;
    margin-top: 0px;
    margin-bottom: 0px;
`
export const FooterTopAddressDetailsTextNavp = styled.p`

    font-size: 14px;
    color: #F8F9FA;
    font-weight: 500;
    margin-top: 2px;

`
export const FooterTopAcount= styled.div`

    width: 35%;
    height: 100%;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 983px){

        /* background: blue; */
        margin-left: 100px;
        width: 25%;
        height: auto;
        align-items: center;

    }
    @media screen and (max-width: 768px){

        margin-left: 0px;
        width: 100%;
        /* background-color: blue; */

    }

`
export const FooterTopAcountText= styled.h1`

    font-size: 24px;
    color: #F4F5F9;
    margin-bottom: 15px;

    @media screen and (max-width: 768px){

        margin-bottom: 3px;

    }

`
export const FooterTopAcountp= styled(Link)`

    font-size: 14px;
    color: #F4F5F9;
    font-weight: 500;
    margin-top: 17px;
    text-decoration: none;

`
export const FooterTopRight= styled.div`

    width: 40%;
    height: 90%;
    /* background-color: aqua; */
    display: flex;

`
export const FooterTopOurServices= styled.div`

    width: 50%;
    height: 100%;
    /* background-color: orange; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 983px){

        position: absolute;
        top: 320px;
        right: 20px;
    }
    @media screen and (max-width: 768px){

        position: absolute;
        top: 550px;
        right: 100px;
        align-items: center;
    }
    

`
export const FooterTopCompany= styled.div`

    width: 50%;
    height: 100%;
    /* background-color: purple; */
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 983px){

        position: absolute;
        top: 320px;
        right: -200px;
    }
    @media screen and (max-width: 768px){

        position: absolute;
        top: 820px;
        right: 100px;
        align-items: center;
    }

`
export const FooterBottom= styled.div`

    width: 98%;
    height: 20%;
    /* background-color: blue; */
    border-top: 2px solid grey;
    display: flex;
    align-items: center;

    @media screen and (max-width: 983px){

        /* background-color: blue; */
        width: 75%;

    }
    @media screen and (max-width: 768px){

        /* background-color: blue; */

    }

`
export const FooterBottomDetailsContainer= styled.div`

    width: 100%;
    height: 38%;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;

`
export const FooterBottomDetailsContainerCopyRight= styled.p`

    font-size: 13px;
    color: #F8F9FA;
    font-weight: 500;

`
export const FooterBottomDetailFollowContainer = styled.div`

    width: 22%;
    height: 100%;
    /* background-color: red; */
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 983px){

        /* background-color: red; */
        width: 38%;

    }
    @media screen and (max-width: 768px){

        display: none;

    }


`
export const FooterBottomDetailsFollow= styled.p`

    font-size: 17px;
    color: #F8F9FA;
    font-weight: 700;

`
export const FooterBottomDetailsMediaImageContainer= styled.div`

    width: 68%;
    height: 100%;
    /* background-color: orange; */
    display: flex;
    gap: 5px;
`
export const FooterBottomDetailsMediaImageCircle= styled.div`

    width: 20%;
    height: 100%;
    background-color: #F1D5DF;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FooterBottomDetailsMediaImage= styled.img`

    width: 60%;
    height: 60%;
    object-fit: contain;
`
