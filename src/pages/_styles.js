import styled from 'styled-components';

export const Thumbnail = styled.div`
  flex: 1;
  @media (max-width: 960px) {
    padding-top: 100px;
    padding-bottom: 50px;
    width: 100%;
  }

  img {
    width: 50%;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Text = styled.div`
  flex: 1;

  @media (max-width: 960px) {
      font-size: 20pt;
      color: #707070;
      width: 40%;
      display: block;
      margin-left: auto;
      margin-right: auto;
  }

  span {
    font-size: 36pt;
    color: #cc6b6b;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 100px;
  }
`;