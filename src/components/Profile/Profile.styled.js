import styled from 'styled-components';

export const Section = styled.div`
  color: rgba(128, 128, 128, 0.8);
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: auto;
  margin-top: 100px;
  align-items: center;
  border-radius:5px;
  box-shadow: 0px 1px 20px rgba(46, 47, 66, 0.5);
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  padding-top: 30px;
  width: 200px;
`;
export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 3px solid gold;
  margin-bottom: 32px;
`;

export const Text = styled.p`
  &.name {
    font-size: 24px;
    font-weight: 700;
    color: #000;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const List = styled.ul`
  display: flex;
  width: 100%;
  background-color: rgba(46, 47, 66, 0.08);
  border-top: 1px solid rgba(128, 128, 128, 0.3);
  border-radius: 0px 0px 4px 4px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: calc((100%));
  padding: 24px 10px;

  &:not(:last-child) {
    border-right: 1px solid rgba(128, 128, 128, 0.3);
  }
`;
export const Label = styled.span`
  margin-bottom: 10px;
`;
export const Quantity = styled.span`
  color: #000;
  font-weight: 700;
`;