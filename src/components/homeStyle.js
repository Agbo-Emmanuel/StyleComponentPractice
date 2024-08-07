import styled from 'styled-components'



export const DetailPage = styled.div`

    width: 100%;
    height: auto;
    /* background-color: yellow; */

    @media screen and (max-width: 427px) {

        /* background-color: yellow; */
        
    }
`

export const DetailTop = styled.div`

    width: 100%;
    height: auto;
    /* background-color: red; */
    display: flex;
    gap: 40px;

    @media screen and (max-width: 427px) {
        
        /* background-color: red; */
        flex-direction: column;
        align-items: center;
    }

`
export const DetailTopLeft = styled.div`

    width: 40%;
    height: 500px;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 427px) {
        
        width: 100%;
        /* background-color: blue; */
        justify-content: center;


    }

`
export const DetailTopLeftHolder = styled.div`

    width: 85%;
    height: 90%;
    /* background-color: aquamarine; */
    border-radius: 20px;
    border: 1px solid lightgrey;
    display: flex;
    justify-content: flex-end;
    gap: 30px;

    @media screen and (max-width: 427px) {
        
        width: 95%;
        /* background-color: aquamarine; */

    }

`
export const DetailTopLeftHolderImageCard = styled.div`

    width: 60%;
    height: 70%;
    /* background-color: purple; */
    margin-top: 20px;

`
export const DetailTopLeftHolderImageCardImg = styled.img`

    width: 100%;
    height: 100%;
    object-fit: contain;

`
export const DetailTopLeftHolderSearch = styled.div`

    width: 20%;
    height: 90%;
    /* background-color: green; */
    display: flex;
    justify-content: center;

`
export const DetailTopLeftHolderSearchBtn = styled.div`

    width: 45%;
    height: 10%;
    /* background-color: red; */
    margin-top: 20px;
    object-fit: contain;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`
export const DetailTopRight = styled.div`

    width: 40%;
    height: auto;
    /* background-color: aqua; */

    @media screen and (max-width: 427px) {
        
        width: 90%;
        /* background-color: aqua; */
    }

`
export const InBtn = styled.button`

    width: 80px;
    height: 35px;
    background-color: #F8EaEF;
    border: none;
    margin-top: 25px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 6px;
    color: #BB2D5E;

`
export const DetailTopRightH1 = styled.h1`

    color: #253D4E;
    /* font-size: 15px; */

`
export const DetailTopRightRatingContainer = styled.div`

    width: 40%;
    height: 30px;
    /* background-color: orange; */
    margin-top: 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 427px) {
        
        width: 50%;
        /* background-color: orange; */

    }
    @media screen and (max-width: 395px) {
        
        width: 70%;
        /* background-color: orange; */

    }
    
`
export const DetailTopRightRating = styled.div`

    width: 50%;
    height: 100%;
    /* background-color: red; */
    background-image: url('https://argone.ng/assets/imgs/theme/rating-stars.png');
    background-repeat: repeat-x;
    background-position: 0px 0px;

`
export const DetailTopRightReviews = styled.p`

    font-size: 15px;
    color: #B6B6B6;
    margin-left: 10px;

`
export const DetailTopRightPrice = styled.div`

    width: 70%;
    height: 80px;
    /* background-color: blue; */
    margin-top: 20px;
    display: flex;
    align-items: center;

`
export const DetailTopNewPrice = styled.h1`

    color: #bb2d5e;

`
export const DetailTopOldPrice = styled.h1`

    font-size: 23px;
    color: #B6B6B6;
    text-decoration: line-through;
    margin-left: 20px;

`
export const AddCartBtn = styled.button`

    width: 150px;
    height: 50px;
    background-color: #BB2D5E;
    border: none;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    border-radius: 6px;
    margin-top: 30px;
    cursor: pointer;

`
export const DetailTopPoint = styled.div`

    width: 70%;
    height: auto;
    /* background-color: blue; */
    margin-top: 40px;

    @media screen and (max-width: 427px) {
        
        width: 100%;

    }


`
export const DetailTopPointText = styled.p`

    font-size: 16px;
    color: #7E7E7E;

`
export const DetailTopPointTextSpan = styled.span`

    color: #BB2D5E;

`

export const DetailBottom = styled.div`

    width: 100%;
    height: auto;
    /* background-color: blue; */
    margin-top: 100px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;

    @media screen and (max-width: 427px) {
        
        /* background-color: blue; */
        justify-content: center;
    }

`
export const DetailBottomContainer = styled.div`

    width: 65%;
    height: auto;
    /* background-color: red; */
    margin-left: 80px;
    border-radius: 20px;
    border: 1px solid lightgrey;
    padding-left: 50px;

    @media screen and (max-width: 427px) {

        /* background-color: red; */
        margin-left: 0px;
        width: 95%;
        border: none;
        padding-left: 10px;
    }

`
export const DetailBottomBtn = styled(InBtn)`

    width: 150px;
    height: 50px;
    color: #BB2D5E;
    font-family: 'quicksand', sans-serif;
    font-weight: 600;
    font-size: 17px;
    border-radius: 30px;
    background-color: white;
    border: 1px solid lightgrey;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    margin-top: 40px;

`
export const DetailBottomTextContainer = styled.div`

    width: 95%;
    height: auto;
    /* background-color: yellow; */
    margin-top: 60px;
    margin-bottom: 40px

`
export const DetailBottomText = styled.p`

    font-size: 14px;
    color: #7E7E7E;
    line-height: 24px;
`

