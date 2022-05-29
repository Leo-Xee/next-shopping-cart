import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;

  & input[type="checkbox"] + span {
    position: relative;
    display: block;
    width: 25px;
    height: 25px;
    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.light.primary};
    cursor: pointer;
  }

  & input[type="checkbox"]:checked + span {
    background-color: ${({ theme }) => theme.light.primary};
  }

  & input[type="checkbox"]:checked + span::before {
    content: "";
    position: absolute;
    top: 11px;
    width: 10px;
    height: 4px;
    background-color: ${({ theme }) => theme.light.white};

    transform: rotate(45deg);
  }

  & input[type="checkbox"]:checked + span::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 11px;
    width: 4px;
    height: 18px;
    background-color: ${({ theme }) => theme.light.white};
    transform: rotate(45deg);
  }

  & input[type="checkbox"] {
    display: none;
  }
`;

export const Text = styled.span`
  padding-left: 10px;
`;
