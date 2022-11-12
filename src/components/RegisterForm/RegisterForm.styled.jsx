import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  align-items: center;
  border: 1px solid #b7b7bf;
`;

export const Label = styled.label`
  display: block;
  & span {
    font-weight: 700;
    display: block;
    margin-bottom: 5px;
  }
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Input = styled(Field)`
  display: block;
  padding: 5px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 5px 10px;
`;
