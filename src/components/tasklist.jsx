// src/components/TaskList.jsx

import React from 'react';
import { TaskList as StyledTaskList, TaskItem, TaskDescription, TaskMembro } from '../styles';

const TaskList = ({ tarefas }) => {
  return (
    <StyledTaskList>
      {tarefas.map((tarefa, index) => (
        <TaskItem key={index}>
          <TaskDescription>{tarefa.descricao}</TaskDescription>
          <TaskMembro>{tarefa.membro}</TaskMembro>
        </TaskItem>
      ))}
    </StyledTaskList>
  );
};

export default TaskList;
