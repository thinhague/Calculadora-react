import styled from 'styled-components';


export const TelaInteira = styled.div`
    
    width: 375px;
    height: 812px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid black;

   
`;

export const Visor = styled.div`
    
    display:flex;
    align-items: flex-end;
    flex-direction: column;
    padding-right:20px;
    height:35%;
    


`;

export const TelaOper = styled.span`
    display:flex;
    align-items: flex-end;
    height: 65%;
    font-size:40px;
    color:#333;
    
`;

export const TelaRes = styled.span`
    display:flex;
    align-items: flex-end;
    height: 35%;
    font-size:80px;
    color:green;
`;

export const Btn = styled.button`
   
    display: flex;
    justify-content:center;
    align-items: center;
    margin: 9px;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: rgb(190, 190, 190, 0.7);
    font-size: 30px;
    cursor: pointer;
    border:0;
    

    &:hover{
        background-color: #999;
    }
`;

export const TecladoLinha = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
`

export const Teclado = styled.div`
    height: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgb(190, 190, 190,0.9);;
    margin-right: 10px;
    margin-left: 10px;
`;