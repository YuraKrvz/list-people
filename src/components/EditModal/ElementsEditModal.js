import styled from 'styled-components';

export const WrapperModal = styled.div`
   // position: relative;
   background-color: rgba(0,0,0, .5);
   text-align: center;
`;

// modal: {
//    position: 'relative',
//    backgroundColor: 'rgba(0,0,0, .5)',
//    //backgroundColor: 'red',
//    //margin: 'auto',
//    textAlign: 'center',
// }

export const BodyModal = styled.div`
   position: absolute;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   width: 500px;
   height: 500px;
   border: 2px solid #000;
   background-color: silver;
   margin: 100px auto;
`;
// body__modal: {
//    position: 'absolute',
//    top: 0,
//    bottom: 0,
//    left: 0,
//    right:0,
//    width: '300px',
//    height: '300px',
//    border: '100px solid black',
//    backgroundColor: 'white',
//    margin: '100px auto',
   

// },

export const Input = styled.input`
   width: 80%;
   height: 30px;
`;