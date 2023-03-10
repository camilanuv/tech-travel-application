import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;  

export const ContainerList = styled.ul`
    width: 100%;
    background-color: #FFF;
    flex-directions: column;
    justify-content: center;
    border-radius: 5px;
    padding: 36px 44px;
    align-items: center;
    margin-top: 45px;
    max-width: 958px;
`;
export const TravelItems = styled.li`
    width: 100%;
    display: flex;
    margin-bottom: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #666;
    justify-content: space-between;
    align-items: center;
    
    img {
        height: 100px;
    }
`;
export const Info = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-size: 14px;
        font-weight: 600;
    }

    strong {
        margin-top: 10px;
        font-size: 16px;
    }
`;
export const Quantity = styled.input`
    font-size: 16px;
    color: #666;
    text-align: end;
    border-radius: 5px;
    width: 40px;
    height: 40px;
    border: 1px solid #0676d9;
`;
export const Subtotal = styled.div`
    display: flex;    
    font-weight: 600;
    font-size: 16px;
    align-items: right;
    align-items: center;
    p{
        margin-right: 10px;
    }
`;
export const Total = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    p {
        color: #666;
    }
    strong{
        margin-left: 10px
    }
`;