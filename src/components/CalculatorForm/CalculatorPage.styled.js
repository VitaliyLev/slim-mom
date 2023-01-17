import styled from 'styled-components';
import leaves from '../../images/diary-page/leaf-desk.png';
import leavesTablet from '../../images/hero/tablet/leaves.png';
import SideBarBgDesk from '../../images/diary-page/sidebar-bg-desk.png';

export const WrapperAll = styled.div`

  @media (min-width: 768px) and (max-width: 1023px) {
    background-image: url(${leavesTablet});
    background-repeat: no-repeat;
    background-position: bottom 0px left 0px;
    background-size: auto;
  }
  @media (min-width: 1024px) and (max-width: 1120px) {
    padding: 300px 16px 55px 16px;
    display: flex;
    height: 100vh;
    justify-content: space-between;
    background-image: url(${leaves}), url(${SideBarBgDesk});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 50% 100%;
    background-position: top 0px right 0px, top 0px right -110px;
  }
  @media (min-width: 1121px) and (max-width: 1280px) {
    margin: 0 auto;
    padding: 300px 16px 55px 16px;
    display: flex;
    justify-content: space-between;
    background-image: url(${leaves}), url(${SideBarBgDesk});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 40% 100%;
    background-position: top 0px right 0px, top 0px right 0px;
  }
  @media (min-width: 1280px) {
    margin: 0 auto;
    padding: 300px 16px 55px 16px;
    display: flex;
    justify-content: space-between;
    background-image: url(${leaves}), url(${SideBarBgDesk});
    background-repeat: no-repeat, no-repeat;
    background-size: auto, 40% 100%;
    background-position: top 0px right 0px, top 0px right 0px;
  }
`;

export const CalculatorPageWrapper = styled.div`
  padding: 32px 20px 100px;

  @media (min-width: 426px) and (max-width: 1023px) {
    padding: 100px 32px 48px 32px;
  }
  @media (min-width: 1024px) {
    padding: 0px 16px 110px;
  }
`;

export const H2 = styled.h2`
  line-height: 1.2;
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 34px;
  color: #212121;
  @media (min-width: 426px) and (max-width: 1023px) {
    font-size: 34px;
    line-height: 1.4;
    margin-bottom: 68px;
    max-width: 635px;
  }
  @media (min-width: 1024px) {
    font-size: 34px;
    line-height: 1.4;
    margin-bottom: 68px;
    max-width: 635px;
  }
`;