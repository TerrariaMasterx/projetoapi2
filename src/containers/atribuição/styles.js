import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f9;
  font-family: Arial, sans-serif;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 20px;
`;

export const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  
  &:hover {
    background-color: #45a049;
  }
  
  &:active {
    background-color: #388e3c;
  }
`;

export const TaskList = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 500px;
`;

export const TaskItem = styled.div`
  background-color: #e8f5e9;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TaskDescription = styled.span`
  font-size: 16px;
  color: #333;
`;

export const TaskMembro = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #4caf50;
`;
