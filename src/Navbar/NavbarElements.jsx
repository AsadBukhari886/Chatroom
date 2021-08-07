import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


// export const Nav = styled.nav`
// background: #63D471;
//   height: 85px;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.2rem calc((100vw - 1000px) / 2);
//   z-index: 12;
//   `;

// export const NavMenu = styled.div`
//   display:flex;
//   align-item:center;
//   margin-right:-24px;
//   @media screen and (max-width:768px){
//       display:none;
//   }
//   `;
//   export const Bars=styled(FaBars)`
//   display:none;
//   color:#808080;

//   @media screen and (max-width:768px){
//       display:block;
//       position:absolute;
//       top:0;
//       right:0;
//       transform:translate(-100%,75%);
//       font-size:1.8rem;
//       cursor:pointer;
//   }

//   `;

//   export const NavLinks=styled(Link)`
//   color:#808080;
//   display:flex;
//   align-item:center;
//   text-decoration:none;
//   padding:0rem;
//   height:100%;
//   cursor:pointer;

//   &.active{
//       color:#000000;
//   }
//   `;

//   export const NavButton=styled.nav`
//   display: flex;
//   align-items: center;
//   margin-right: 24px;
//   /* Third Nav */
//   /* justify-content: flex-end;
//   width: 100vw; */
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
//   `;

//   export const NavBtnLink=styled(Link)
//   `
//   border-radius: 4px;
//   background: #808080;
//   padding: 10px 22px;
//   color: white;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: all 0.2s ease-in-out;
//   text-decoration: none;
//   /* Second Nav */
//   margin-left: 24px;
//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: #fff;
//     color: #808080;
//   }
//   `;



export const Nav = styled.nav`
top:0px;
  background: #000;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  width:100%;
  z-index: 10;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
//   color: #fff;
  @media screen and (max-width: 300px) {
    display: block;
    // position: absolute;
    cursor: pointer;
    font-size: 1.8rem;
    color:yellow
    right: 0px;
    top: 0px;
    transform: translate(-100%, 75%);
    

    

    
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 300px) {
    display: none;
  }
`;

export const NavButton = styled.nav`
  background:none;
  align-items: center;
  margin-right: 24px;
  
  
  @media screen and (max-width: 300px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  /* Second Nav */
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
export const NavLinkImg = styled.img
  `
width:60px;
height:60px;

`;
export const NavBtnLinkbtn=styled.div
`
color:#fff;
background:Transparent;

&:hover {
color:black;
background:Transparent;
}

&.active {
  background:Transparent;
}
`;


/*


*/