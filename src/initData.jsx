const initData = {
  tasks: {
    'task-1': { id: 'task-1', content: '123123123' },
    'task-2': { id: 'task-2', content: '12323' },
    'task-3': { id: 'task-3', content: '68979678' },
    'task-4': { id: 'task-4', content: 'cvzxcvscvzx' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'to do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  columnOrder: ['column-1'],
}
export default initData
